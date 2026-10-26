# Sachin & Prachi — Animated Wedding Invitation

A responsive React + Vite wedding invitation with an animated envelope cover, cinematic hero, countdown, story section, event details, directions link, and email RSVP.

## Personalised settings

The invitation is configured with:
- Couple names: Sachin & Prachi
- Date: Monday, 30 November 2026
- Location: Raebareli, Uttar Pradesh, India
- Visual style: burgundy, gold and warm ivory

Before sharing publicly, confirm the exact venue/address and ceremony time. The current time (6:00 PM) is a placeholder. Replace `hello@example.com` with the correct RSVP email and update the RSVP deadline in `src/wedding.js`.

## Run locally

Install Node.js LTS, open a terminal in this folder, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Check the production build with:

```bash
npm run build
```

## Push to GitHub

1. Create a new empty repository on GitHub, for example `sachin-prachi-wedding`.
2. In this project folder, run the following commands, replacing the URL with your repository URL:

```bash
git init
git add .
git commit -m "Personalise Sachin and Prachi wedding invitation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sachin-prachi-wedding.git
git push -u origin main
```

If Git says the repository is already initialised, do not run `git init` again; continue with `git add`, `git commit`, and the remote/push steps as appropriate.

## Deploy on Vercel

1. Sign in at https://vercel.com/
2. Choose **Add New → Project**.
3. Import the GitHub repository.
4. Confirm these settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click **Deploy**.

Vercel will provide a live URL. Once GitHub is connected, pushing changes to the configured branch will trigger deployments automatically.

## Important notes

- The RSVP button opens the visitor's email app; responses are not stored in a database.
- The sound control is a visual toggle only; no audio file is bundled.
- The hero image is loaded from Unsplash and needs an internet connection. Replace it with a photo you have permission to use if desired.
