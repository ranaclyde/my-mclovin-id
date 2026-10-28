# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Fans making a meme.** Superbad fans and Spanish-speaking internet users who want a funny "McLovin" ID of themselves to post or send to friends. They mostly arrive from social links on their phones and want a shareable image within a minute or two.
- **Portfolio viewers.** People evaluating the author's front-end work, such as recruiters, peers and other developers. To them the product shows craft: real-time canvas rendering, photo cropping and camera capture, a signature pad, i18n, and SEO.

## Product Purpose

The user fills in a name, date of birth and sex, adds a photo (upload and crop, or a selfie) and a hand-drawn signature. They watch a Hawaii-style ID inspired by Fogell's fake ID in *Superbad* (2007) render live, then download it. Success means a funny, finished image is on their device and ready to share, with nothing in the way.

## Positioning

A faithful, playful fan tribute to one specific movie prop. It works entirely in the browser, is free, needs no sign-up, and the user's face never leaves their device.

## Operating Context

- Most visits come from social media links on phones. The camera, cropping, signature and download flow has to work well there first. Desktop adds a front/back flip preview.
- Output is a PNG of the front, or a ZIP with the front and the static back image (`/images/mclovin-id-back.webp`).
- Two locales: Spanish at `/` (default) and English at `/en/`.

## Capabilities and Constraints

- Static Astro site hosted on Netlify, with no backend. All processing (canvas, Croppie crop, camera, signature, JSZip) happens on the client.
- Live canvas preview. Empty fields fall back to the original McLovin values (name `McLOVIN`, DOB `06/03/1981`, McLovin's face and signature).
- The expiry date is derived from the DOB with the year set to now + 10. The issue date is today.
- The name is limited to 15 characters.
- Error and warning toasts are called in code, but `window.toast` is never assigned, so no feedback reaches users right now (open gap).

## Brand Commitments

- **Everything stays in the browser.** Photos, signatures and form data are never uploaded or stored. Future work must keep this true and may say so to users.
- **Clearly a parody, not a real ID.** The output must read as a novelty fan piece and must never be made more usable as a real identity document. A visible disclaimer is required. *No disclaimer exists in the UI yet (open gap).*
- **Free, no sign-up.** No accounts, paywalls, or gates before the download.
- **Voice.** Casual rioplatense Spanish with voseo ("Completás", "subís", "firmás") is the primary voice and is full of Superbad references. English is secondary and should keep the same playful tone.
- **Name.** "My McLovin ID".

## Evidence on Hand

- Assets in `public/images/`: the empty ID template, McLovin's face and signature, the ID back, `mclovin.webp`, `logo.webp`, and `screenshot.jpg` (also used as the OG image).
- An embedded YouTube clip of the McLovin scene (About section).
- There are no testimonials, usage numbers, or press. Do not invent any.

## Product Principles

1. **Phone-first, share-ready.** Every step should be quick and pleasant one-handed on a phone, and the finished image should be one tap from download.
2. **Private by construction.** Personal data lives only in the tab. Never add a feature that needs to send it anywhere.
3. **Joke, not forgery.** Keep it fun and recognizable as a movie tribute, and make it obvious that it isn't a real document.
4. **Craft is part of the pitch.** The product doubles as a portfolio piece, so polish and technical quality are part of what it delivers.
5. **Zero friction.** Free, no sign-up, and sensible McLovin defaults so the preview always looks complete.

## Accessibility & Inclusion

Mobile-first is critical, with touch-friendly controls, camera and signature input that work on small screens, and downloads that work in mobile browsers. Beyond that, aim for standard WCAG AA (contrast, keyboard access to the dialogs and controls).
