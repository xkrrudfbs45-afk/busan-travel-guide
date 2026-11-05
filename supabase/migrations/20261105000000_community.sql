-- Go2Busan Community MVP
-- Apply in Supabase SQL Editor or through the Supabase migrations workflow.
-- Public content is readable only after moderation. All writes require authentication.

create extension if not exists pgcrypto;

create table if not exists public.community_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Busan traveler',
  preferred_language text not null default 'en'
    check (preferred_language in ('en', 'ja', 'zh-TW', 'ko')),
  role text not null default 'member'
    check (role in ('member', 'moderator', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.community_questions (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.community_profiles(id) on delete cascade,
  category text not null
    check (category in ('food', 'attractions', 'transport', 'local-tips', 'kpop-bts')),
  title text not null check (char_length(title) between 8 and 140),
  body text not null check (char_length(body) between 20 and 8000),
  language text not null default 'en'
    check (language in ('en', 'ja', 'zh-TW', 'ko')),
  status text not null default 'pending'
    check (status in ('pending', 'published', 'hidden', 'removed')),
  is_answered boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.community_answers (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.community_questions(id) on delete cascade,
  author_id uuid not null references public.community_profiles(id) on delete cascade,
  body text not null check (char_length(body) between 2 and 8000),
  status text not null default 'pending'
    check (status in ('pending', 'published', 'hidden', 'removed')),
  is_accepted boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.community_votes (
  id uuid primary key default gen_random_uuid(),
  answer_id uuid not null references public.community_answers(id) on delete cascade,
  user_id uuid not null references public.community_profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (answer_id, user_id)
);

create table if not exists public.community_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.community_profiles(id) on delete cascade,
  question_id uuid references public.community_questions(id) on delete cascade,
  answer_id uuid references public.community_answers(id) on delete cascade,
  reason text not null check (reason in ('spam', 'abuse', 'misinformation', 'privacy', 'other')),
  details text check (details is null or char_length(details) <= 1500),
  status text not null default 'open'
    check (status in ('open', 'reviewing', 'resolved', 'dismissed')),
  created_at timestamptz not null default now(),
  constraint report_has_target check (
    (question_id is not null)::int + (answer_id is not null)::int = 1
  )
);

create index if not exists community_questions_feed_idx
  on public.community_questions (status, created_at desc);
create index if not exists community_questions_category_idx
  on public.community_questions (category, status, created_at desc);
create index if not exists community_answers_question_idx
  on public.community_answers (question_id, status, created_at asc);
create index if not exists community_votes_answer_idx
  on public.community_votes (answer_id);
create index if not exists community_reports_queue_idx
  on public.community_reports (status, created_at asc);

create or replace function public.community_touch_updated_at()
returns trigger language plpgsql set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists community_profiles_touch on public.community_profiles;
create trigger community_profiles_touch before update on public.community_profiles
for each row execute function public.community_touch_updated_at();
drop trigger if exists community_questions_touch on public.community_questions;
create trigger community_questions_touch before update on public.community_questions
for each row execute function public.community_touch_updated_at();
drop trigger if exists community_answers_touch on public.community_answers;
create trigger community_answers_touch before update on public.community_answers
for each row execute function public.community_touch_updated_at();

create or replace function public.community_create_profile()
returns trigger language plpgsql security definer set search_path = public
as $$
declare
  chosen_name text;
  chosen_language text;
begin
  chosen_name := nullif(trim(coalesce(new.raw_user_meta_data ->> 'display_name', '')), '');
  chosen_language := coalesce(new.raw_user_meta_data ->> 'preferred_language', 'en');
  if chosen_language not in ('en', 'ja', 'zh-TW', 'ko') then
    chosen_language := 'en';
  end if;
  insert into public.community_profiles (id, display_name, preferred_language)
  values (new.id, coalesce(chosen_name, 'Busan traveler'), chosen_language)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists community_auth_user_created on auth.users;
create trigger community_auth_user_created
after insert on auth.users
for each row execute function public.community_create_profile();

alter table public.community_profiles enable row level security;
alter table public.community_questions enable row level security;
alter table public.community_answers enable row level security;
alter table public.community_votes enable row level security;
alter table public.community_reports enable row level security;

-- Profiles are visible to signed-in community members; members may edit only their own display fields.
create policy "Profiles readable by authenticated users"
on public.community_profiles for select to authenticated using (true);
create policy "Members update their own profile"
on public.community_profiles for update to authenticated
using (auth.uid() = id) with check (auth.uid() = id);

-- Published questions are public. Authors can see their own pending/hidden submissions.
create policy "Published questions are public"
on public.community_questions for select to anon, authenticated
using (status = 'published' or (auth.uid() = author_id));
create policy "Authenticated members ask questions"
on public.community_questions for insert to authenticated
with check (auth.uid() = author_id and status = 'pending');
create policy "Authors delete own questions"
on public.community_questions for delete to authenticated
using (auth.uid() = author_id and status = 'pending');

create policy "Published answers are public"
on public.community_answers for select to anon, authenticated
using (
  status = 'published'
  or auth.uid() = author_id
  or exists (
    select 1 from public.community_questions q
    where q.id = question_id and q.author_id = auth.uid()
  )
);
create policy "Authenticated members answer questions"
on public.community_answers for insert to authenticated
with check (
  auth.uid() = author_id and status = 'pending'
  and exists (
    select 1 from public.community_questions q
    where q.id = question_id and q.status = 'published'
  )
);
create policy "Authors delete own pending answers"
on public.community_answers for delete to authenticated
using (auth.uid() = author_id and status = 'pending');

create policy "Votes visible to authenticated users"
on public.community_votes for select to authenticated using (true);
create policy "Members vote once per answer"
on public.community_votes for insert to authenticated
with check (
  auth.uid() = user_id
  and exists (
    select 1 from public.community_answers a
    where a.id = answer_id and a.status = 'published'
  )
);
create policy "Members remove own votes"
on public.community_votes for delete to authenticated using (auth.uid() = user_id);

create policy "Members submit reports"
on public.community_reports for insert to authenticated
with check (auth.uid() = reporter_id);
create policy "Reporters see own reports"
on public.community_reports for select to authenticated
using (auth.uid() = reporter_id);

-- No client-side update policy for moderation fields. Moderators/admins should moderate
-- through a trusted server-side/admin workflow, never by exposing the service-role key.
revoke all on public.community_profiles from anon;
revoke all on public.community_questions from anon;
revoke all on public.community_answers from anon;
revoke all on public.community_votes from anon;
revoke all on public.community_reports from anon;
grant select on public.community_questions, public.community_answers to anon;
grant select on public.community_profiles to authenticated;
grant update (display_name, preferred_language) on public.community_profiles to authenticated;
grant select, insert, delete on public.community_questions to authenticated;
grant select, insert, delete on public.community_answers to authenticated;
grant select, insert, delete on public.community_votes to authenticated;
grant select, insert on public.community_reports to authenticated;
