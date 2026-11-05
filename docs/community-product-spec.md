# Go2Busan Community — Product and UI specification

## Product promise
A practical question-and-answer space where independent visitors ask about Busan and local contributors share grounded, useful answers. The differentiator is local knowledge, not a generic social feed.

## Primary audiences
- International visitors planning a trip who need a quick, specific answer.
- Travelers already in Busan who need route, food, etiquette or last-minute help.
- Busan locals who can answer from first-hand knowledge.

## MVP information architecture
- `/community/`: community landing page, search, category filters, latest questions, unanswered questions, and a clear ask button.
- `/community/question/<id>/`: question detail, answers, accepted answer, helpful votes and report action.
- `/community/ask/`: question form.
- `/community/sign-in/`: sign-in and sign-up.
- `/community/rules/`: community rules, privacy and moderation explanation.

## Categories
1. Food & Restaurants
2. Attractions & Things to Do
3. Transportation
4. Local Tips & Etiquette
5. K-pop & BTS in Busan

Avoid creating separate forums for each language in the MVP. Store the language on each question and let users filter by language; later add translated summaries only when there is enough moderation capacity.

## Landing-page mobile layout
1. Compact header with Go2Busan logo and a visible back-to-guides link.
2. Headline: “Ask Busan. Get local answers.”
3. Supporting copy: “Planning a visit? Ask about food, transport, neighborhoods and the small details only locals know.”
4. One prominent “Ask a question” action.
5. Search field with a clear search button.
6. Horizontally scrollable category chips.
7. Two simple tabs: “Latest” and “Unanswered”.
8. Question cards: category, title, language, answer count, relative date and answered state.
9. Sticky mobile ask action only if it does not obscure content or keyboard focus.

## Question form
- Category (required)
- Title (8–140 characters)
- Details (20–8,000 characters)
- Language (English, Japanese, Traditional Chinese, Korean)
- Optional location/neighborhood tag can be added later.
- Explain that first posts may be reviewed before appearing publicly.
- Warn users not to post passport numbers, booking references, phone numbers, addresses or other private data.

## Answer experience
- Answers appear below the question, oldest first.
- Question author can mark one answer as accepted.
- Helpful vote is one per signed-in user per answer.
- Clearly label accepted answer and local contributor profile; do not imply verification unless actually verified.
- Show language label and preserve original text. Machine translation should be an explicit later feature, not silently applied.

## Trust and moderation
- First month: pre-moderate new questions and answers; approve/reject from a trusted admin workflow.
- Provide report reasons: spam, abuse, misinformation, privacy, other.
- Never allow a user to edit role, publication status, votes or accepted-answer state through unrestricted client writes.
- Add rate limits/CAPTCHA before opening write access widely.
- Add a deletion/contact process and a clear retention policy.
- Hide reported content only through moderator action; keep an audit trail in a later iteration.

## Launch sequence
1. Connect a Supabase project and apply the migration.
2. Configure email auth and redirect URLs.
3. Build the UI against the Supabase schema with environment-specific public URL/key.
4. Add trusted moderation controls (Edge Function or protected server-side workflow).
5. Update EN/JA/zh-TW privacy notices and community rules.
6. Test RLS, account deletion, spam controls, keyboard navigation and mobile widths 360/390/1280.
7. Soft launch with a handful of seed questions written by the Go2Busan team and labelled as editorial prompts, not fake user activity.
8. Add homepage and guide cross-links only after the community is working end to end.

## Success metrics
- Questions submitted per week
- Share of questions receiving at least one answer
- Median time to first answer
- Returning questioners and answer contributors
- Search visits landing on public question pages
- Reports per 100 posts and moderation response time

Do not optimize for raw post volume. A small number of useful answers is better than an empty, noisy forum.
