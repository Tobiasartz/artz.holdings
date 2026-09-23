# artz.holdings

Direct-booking site for Artz Holdings' three Scottsdale vacation homes. Built with Eleventy 3 and Tailwind CSS 4.

## Editing content

- `_data/properties.js` holds everything about each home: name, tagline, Airbnb link, beds, ratings, highlights, amenities, fees, rules, photos. Every page reads from this file.
- `_data/metadata.js` holds site-wide settings: contact email, host stats, the Google Form URL used on the booking page, analytics ID, and the `bestRateGuarantee` toggle for the "Why book direct" copy.
- Photos live in `content/img/homes/<slug>/`. Reference them as `/img/homes/<slug>/file.jpg`; the build generates AVIF, WebP and JPEG sizes automatically.
- Pages: `content/index.njk` (home), `content/homes.njk` (one page per property), `content/book.njk`, `content/contact.njk`, `content/help.njk`, `content/agreement.njk`, `content/privacy-policy.njk`.
- Layouts and components are in `_includes/`. Theme colors, fonts and button styles are in `styles/main.css`.

## Commands

```
yarn install
yarn start     # dev server with live reload
yarn build     # production build to _site/
```

Deploy from the repo root with `./deploy.sh`, which builds and copies `_site` into `docs/` for GitHub Pages. Note that the script deletes `docs/` first, so keep only generated files there.
