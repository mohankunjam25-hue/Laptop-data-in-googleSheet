# Laptop Submission Form

This project contains a student laptop submission form that sends data to a Google Apps Script web app, which writes rows to Google Sheets.

## Files

- `index.html`: Main form UI
- `styles.css`: All styles extracted from `index.html`
- `script.js`: All form logic extracted from `index.html`

## Configure

1. Open `script.js`.
2. Find `const SHEET_URL = "..."`.
3. Paste your latest deployed Google Apps Script `/exec` URL.

## Run

1. Open `index.html` in your browser.
2. Fill the form and click submit.
3. Verify data in the target Google Sheet tab.

## Deploy Reminder (Apps Script)

After changing Apps Script code:

1. Save `Code.gs`
2. Deploy > Manage deployments > Edit > Update
3. Use the latest `/exec` URL in `script.js`
