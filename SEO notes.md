# SEO changes — Homepage

## Done in the design (Homepage.dc.html)
- Title, meta description, canonical, robots, Open Graph, Twitter card, geo tags, `lang="en-ZA"`.
- JSON-LD: MedicalBusiness/Physiotherapy (address, phone, email, hours, team, 6 programmes as Services, booking action), WebSite, WebPage, FAQPage.
- One H1 that includes "Biokinetics | Paarl"; H2 per section, H3 per programme/step.
- `<header>`, `<nav>`, `<main>`, `<article>`, `<address>` landmarks.
- Descriptive alt text on every image, including testimonial photos (previously empty).
- Phone numbers are `tel:` links, email is `mailto:`, address links to Google Maps.
- Full address (NAP) repeated in the footer.
- Hero image preloaded with high priority and not hidden behind a fade-in (faster LCP).
- Mobile nav now exists and stays in the HTML on every screen size (Google indexes mobile first).
- FAQ answers stay in the HTML when collapsed, so they are indexable.
- `robots.txt` and `sitemap.xml` at project root.

## Google Analytics (G-Y3P3KNPKCX)
- Loaded on every page via `analytics.js`.
- Custom events: `book_assessment_click`, `whatsapp_click`, `phone_click`, `email_click`, plus `assessment_answer` / `assessment_complete` on the "Can Biokinetics Help Me?" chat.
- In GA4, mark `book_assessment_click` and `whatsapp_click` as key events (Admin → Events).
- Next.js: use `@next/third-parties/google` `<GoogleAnalytics gaId="G-Y3P3KNPKCX" />` in `app/layout.js`, and keep the click listener from `analytics.js`.

## To port into the Next.js repo
- Move the head tags into `export const metadata` in `app/page.js` and `app/move-beyond-pain/page.js`.
- Render the JSON-LD server-side: `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />`.
- Replace base64 data-URI images with files in `/public` served through `next/image` (WebP/AVIF, width/height set). Inlined base64 bloats the HTML and can't be indexed in Google Images.
- Add `app/robots.js` and `app/sitemap.js` (or copy the static files into `/public`).
- Create `/public/og-image.jpg` at 1200×630.

## Needs your input
- **Address mismatch:** this site says "1D New Eskdale Street"; the current estismitbio.com and its schema say "3 New Eskdale Street". Pick one and use it identically on the site, Google Business Profile and directories.
- **Opening hours** (Mon–Fri 08:00–17:00) were taken from the HealthPLUS listing. Confirm.
- **Google Business Profile URL and social links** — add them to `sameAs` in the schema.
- **Geo coordinates** of the practice for the schema.
- **Domain:** canonical assumes `https://www.estismitbio.com/`.
