# CodeBandhan Landing (Next.js)

Conversion-focused landing page for CodeBandhan with CTA capture into Google Sheets.

## Stack

- Next.js App Router
- React
- Google Sheets API (`googleapis`)

## Local run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Google Sheets lead capture setup

1. Create a Google Cloud project.
2. Enable `Google Sheets API`.
3. Create a Service Account and generate a JSON key.
4. Copy these values into `.env.local`:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEETS_SPREADSHEET_ID`
   - optional `GOOGLE_SHEETS_SHEET_NAME` (defaults to `Leads`)
5. Share your target Google Sheet with the service account email as `Editor`.
6. Create header columns in row 1 to match appended values:
   - `timestamp_iso`
   - `interest`
   - `full_name`
   - `work_email`
   - `company`
   - `team_size`
   - `repo_url`
   - `notes`
   - `utm_source`
   - `utm_medium`
   - `utm_campaign`
   - `referrer`
   - `landing_path`
   - `user_agent`
   - `ip_forwarded_for`

Submissions are written via `POST /api/lead`.

## Deployment: Hostinger or Vercel?

Both can work.

- Use **Vercel** if you want the easiest/fastest path for Next.js + API routes.
- Use **Hostinger** only if your plan supports persistent Node.js runtime (or VPS) for `next start`.

Recommended for this project: **Vercel + your `codebandhan.com` domain**.

### Domain setup (recommended)

1. Deploy this repo to Vercel.
2. Add `codebandhan.com` in Vercel project domains.
3. Update DNS at Hostinger to Vercel records:
   - apex `A` to `76.76.21.21`
   - `www` CNAME to `cname.vercel-dns.com`
4. Add production env vars in Vercel project settings.

If you insist on Hostinger-only deployment, use a VPS and run:

```bash
npm ci
npm run build
npm run start
```

with reverse proxy + SSL configured.
