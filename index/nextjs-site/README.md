# Esti Smit Biokinetics: new site (Next.js)

Drop-in replacement for the pages in github.com/estismit/Esti-Smit-Biokineticist.

## What is in here
- `app/`: layout (keeps the Meta Pixel), homepage, /can-biokinetics-help-me, /medical-aid, /blog and the four blog posts
- `components/`: header, footer, design-system components, quiz chat
- `content/`: blog posts, FAQs, conditions, testimonials (edit text here)
- `public/`: photos, icons, scripts, sitemap.xml, robots.txt, site.webmanifest

No new packages are needed. The repo's existing `next`, `react`, `lucide-react` and `tailwindcss` are enough.

## Do not delete in the repo
- `app/move-beyond-pain/` (stays as it is)
- `package.json`, `tailwind.config.js`, `postcss.config.js`

## Still needed
- `public/og-image.jpg` (1200x630), used for link previews. Not supplied yet.

## Add a new blog post
1. Add the post object to the top of `content/posts.js`.
2. Copy one folder in `app/blog/`, rename it to the new slug and change the slug in its `page.js` (two places).
3. Add the URL to `public/sitemap.xml`.
