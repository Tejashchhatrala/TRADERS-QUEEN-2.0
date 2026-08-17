# LinkedIn AI Comment Assistant

A Chrome Manifest V3 extension that helps users write LinkedIn comments using Google sign-in, a user-provided Google AI key, profile context, and configurable comment tones.

## Features

- Google login through `chrome.identity`.
- Secure settings storage for a Google AI key, profile summary, comment tones, default tone, and desired comment length.
- LinkedIn content script that adds an **AI comment** button near comment fields.
- Comment generation with Gemini using the visible post text, detected author context, user profile summary, and selected tone.

## Setup

1. Create a Google OAuth client for a Chrome extension and replace the placeholder `oauth2.client_id` in `extension/manifest.json`.
2. Get a Google AI Studio API key.
3. Run `npm run build`.
4. Open `chrome://extensions`, enable Developer Mode, and load the `dist/` folder as an unpacked extension.
5. Open the extension settings, add your Google AI key and profile preferences, then save.
6. Visit LinkedIn and click **AI comment** near a comment box.

## Scripts

- `npm run lint` validates required extension files and manifest settings.
- `npm run build` copies the extension into `dist/` for Chrome loading.
- `npm run clean` removes `dist/`.

## Privacy

The extension stores settings in Chrome storage. LinkedIn post context is only sent to Google AI when the user clicks **AI comment**.
