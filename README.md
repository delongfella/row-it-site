# row-it.in (Astro + Netlify)

Static site for Rohit Kumar's coaching practice. Look: "Clear Sky" (the old WordPress identity, tidied).

## First-time setup (on your Mac, in this folder)
1. `npm install`
2. `npm run fetch-images`   <- downloads photos from the live WordPress site and compresses them. Run it BEFORE WordPress hosting is switched off.
3. `npm run dev`            <- preview at http://localhost:4321
4. `npm run build`          <- makes the `dist/` folder Netlify serves

## Deploy to Netlify
- Push this folder to a GitHub repo, then in Netlify: Add new site > Import from Git. Build settings come from `netlify.toml`.
- Add the custom domain row-it.in in Netlify, then point the domain's DNS to Netlify (WordPress.com > Domains > DNS records).
- Contact form: Netlify detects it automatically (Forms tab). Turn on email notifications there.

## Adding a blog post
Create `src/content/blog/my-post.md` with `title`, `date`, `excerpt` (and optional `image`), write the post, commit. Netlify rebuilds.

## Editing coaching service pages
All four service pages are generated from `src/data/services.ts`. Edit the text there. (Draft copy: review before launch.)

---

# Search visibility (SEO) checklist

## Already built in
- One clear title and meta description per page, canonical URLs, Open Graph and Twitter cards
- Structured data (JSON-LD): Person, WebSite, Service, Article and Breadcrumbs
- Separate page per coaching service, each aimed at what people actually search for
- Internal links: blog posts link to related services and other posts; services link to related posts
- `sitemap-index.xml`, `robots.txt`, RSS feed, fast static pages, compressed images, mobile-friendly layout
- 301 redirects from every old WordPress URL (keeps existing Google rankings)

## Do after launch (about 30 minutes, big impact)
1. **Google Search Console**: add `row-it.in` as a "Domain" property (verify with a DNS TXT record), then submit `https://row-it.in/sitemap-index.xml`. Do the same in Bing Webmaster Tools.
2. **Check the redirects**: open 3 old WordPress post URLs and confirm they land on the new posts.
3. **Link from where people already find Rohit**: LinkedIn profile "Website" field, Topmate profile, Substack profile, any airline/training bios. Every link to row-it.in helps.
4. **Share new posts on LinkedIn** with a link back to the post on row-it.in.
5. **Google Business Profile**: only if Rohit coaches in person in a specific city. Online-only coaching usually doesn't qualify.

## Keep ranking: content habits
- Publish a post every 2 to 4 weeks. The blog is the main way to be found for topics like decision-making, cognitive bias and aviation lessons.
- Each post: one clear topic in the title, 600+ words, one image with descriptive alt text, a link to a related service page.
- Add client stories or testimonials only with the client's permission. They improve trust and conversions.
- Add a short FAQ to each service page once Rohit confirms answers (price, session length, online or in person). It helps search results and visitors.

## Target topics (what the site is written to be found for)
- Life coach / career coach for professionals (India)
- Decision-making coaching; decision-making under pressure; cognitive bias, outcome bias, hindsight bias
- Pilot or aviation lessons for leadership and life; human factors; FORDEC decision model
- Career clarity coaching for students and young adults
- ICF-trained coach with an aviation background
