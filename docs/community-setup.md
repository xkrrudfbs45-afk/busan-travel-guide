# Go2Busan Community — Supabase setup

This repository is a static HTML/CSS/JavaScript site deployed on Render. The community database and authentication are provided by Supabase; the browser connects using only the Supabase project URL and publishable/anon key. Never put a Supabase service-role key in this repository or browser code.

## MVP scope

- Public read access to moderated/published questions and answers.
- Email-based sign-up/sign-in (provider configuration is completed in Supabase).
- Authenticated members can submit questions and answers; new submissions enter `pending`.
- Categories: Food & Restaurants, Attractions, Transport, Local Tips, K-pop & BTS.
- Answer votes, accepted-answer marker, and abuse/privacy reports.
- Moderator actions are server-side/admin-only. No client policy can change moderation status or role.

## Database

Apply `supabase/migrations/20261105000000_community.sql` to a new Supabase project using the Supabase SQL Editor or migration workflow. It creates profiles, questions, answers, votes and reports, indexes, timestamps, signup profile trigger and row-level security policies.

Important security notes:
- Public visitors can read only published questions and answers.
- New questions and answers are pending by default and cannot be published by a normal member.
- Users cannot update moderation status or roles through the client.
- Do not expose the service-role key.
- Configure a moderator/admin workflow before accepting public submissions; otherwise pending content will remain unpublished.

## Project connection required

A Supabase project must be created/selected and connected before the live UI can read or write data. Set these public frontend values in the hosting environment or a non-secret public config file:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` (or the current Supabase publishable key)

These are public browser credentials; row-level security is the security boundary. Do not use a service-role key in frontend configuration.

Configure Supabase Auth:
1. Enable email sign-in and choose whether email confirmation is required.
2. Add `https://go2busan.com/community/` and the local preview URL to allowed redirect URLs.
3. Set the site URL to `https://go2busan.com`.
4. Configure email templates and sender settings before launch.
5. Create moderator/admin access through a trusted administrative process, never by editing public user metadata.

## Before launch

- Decide whether public question submission is open immediately or requires moderation (recommended: moderation for the first month).
- Publish community rules, privacy notice, reporting guidance and contact path.
- Update the English, Japanese and Traditional Chinese privacy pages before collecting profile data.
- Test anonymous reads, authenticated writes, pending-content invisibility, cross-user access denial, vote uniqueness, report target validation, and moderator actions.
- Add a retention/deletion process and a rate-limit / CAPTCHA strategy to reduce spam.
- Do not advertise the community as live until a real Supabase project is connected and end-to-end tests pass.
