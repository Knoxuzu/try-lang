# a somewhere.
A seven-screen static story. Plain HTML/CSS/JS, no build step.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Configure Formspree
1. Create a free form at formspree.io and set the receiving email there.
2. Copy its endpoint (`https://formspree.io/f/xxxxxxxx`).
3. In `scripts/main.js`, replace `https://formspree.io/f/YOUR_FORM_ID` in `FORM_ENDPOINT`.
Until then, the form shows a setup warning and never reports success.

## Publish on GitHub Pages
Push this folder to a repository, then Settings → Pages → Deploy from branch → `main` / root. All paths are relative, so repo-subpath URLs work.

## Verify
Open the live URL on a phone, step through all 7 screens, test the browser Back button, then send a real test response and confirm the email arrives.

## Replace
Only `FORM_ENDPOINT` in `scripts/main.js`.
