# FARI — Future Advancement and Relief Initiative

The official website for FARI, a Nigerian not-for-profit working with vulnerable
communities across education, humanitarian response, climate resilience,
livelihoods and protection.

Built with Next.js 16 (App Router, Turbopack), React 19 and TypeScript. Every
page is prerendered as static HTML, so the site can be hosted anywhere.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Pages

| Route | What it holds |
|---|---|
| `/` | Hero, focus areas, who we are, our approach, impact, latest news, closing call to action |
| `/about` | Story, mission and vision, values, how we work, governance |
| `/what-we-do` | The five focus areas, with our programme priorities |
| `/what-we-do/[slug]` | One page per focus area — generated from `focusAreas` |
| `/get-involved` | Volunteering, partnership, giving, careers |
| `/news` | Announcements and updates |
| `/news/[slug]` | One page per post — generated from `posts` |
| `/donate` | Donation panel, what a gift funds, FAQ |
| `/contact` | Contact routes and the enquiry form |

`robots.txt`, `sitemap.xml`, the favicon and the 404 page are generated from
`app/robots.ts`, `app/sitemap.ts`, `app/icon.tsx` and `app/not-found.tsx`.

## Where things live

```
app/                 one folder per route, plus globals.css
components/          shared UI — header, footer, forms, icons, primitives
lib/site.ts          organisation constants: name, contact details, navigation
lib/content.ts       all page content: focus areas, values, posts, FAQs, tiers
public/assets/       photographs (see the README in that folder)
_legacy-deeds-static/  the earlier static site, kept for reference only
```

## Changing content

Almost everything you will want to edit is in **`lib/content.ts`** and
**`lib/site.ts`** rather than in the pages themselves.

- **Contact details, email addresses, the domain, social links** — `lib/site.ts`.
  The domain there feeds canonical URLs, Open Graph tags and the sitemap, so set
  it to the real one before launch.
- **Navigation** — the `nav` array in `lib/site.ts`. Header and footer both read
  it, so a link only needs changing once.
- **A new focus area** — add an entry to `focusAreas` in `lib/content.ts`. Its
  detail page, the card on `/what-we-do` and the sitemap entry all appear on
  their own.
- **A news post** — add an entry to `posts`. Newest first; the top one becomes
  the lead story on `/news`.

Content written before FARI's own material was ready is marked with an
`<EditorNote>` on the page, which renders a visible reminder. Search for
`EditorNote` to find every one, and delete the note once you have replaced the
text around it.

## Brand colours

The whole design runs on custom properties at the top of `app/globals.css`:

```css
:root {
  --brand-700: #0a4d49;   /* deep teal — headers, primary surfaces */
  --clay-500:  #d2622c;   /* warm clay — buttons, accents */
  --sand:      #f8f5f0;   /* page background */
  --ink-900:   #0f1f1e;   /* body text */
}
```

Each has a scale around it (`--brand-100` through `--brand-900`). Change the
tokens and every page follows.

## Forms — not yet connected

The enquiry, donation and newsletter forms validate in the browser and show a
confirmation, but **nothing is sent anywhere yet**. Each one has a marked block
to replace:

- `components/contact-form.tsx` — between the `---- Replace from here ----`
  comments. Post to a route handler at `app/api/contact/route.ts`, or to a form
  service.
- `components/newsletter-form.tsx` — the same pattern.
- `components/donate-widget.tsx` — hand off to a payment provider.
  **Paystack** and **Flutterwave** both handle Nigerian cards and transfers
  well.

No account number is published anywhere: `/donate` asks anyone wanting to give
by bank transfer to email for details. That is deliberate — keep it that way
until you are ready to monitor the account.

Once a form really sends, remove the note rendered beneath it.

## Before launch

- [ ] Set the live domain in `lib/site.ts` (`url`).
- [ ] Replace the placeholder phone number, `+234 800 000 0000`.
- [ ] Point the social links at real profiles — they are all `#` today.
- [ ] Replace the illustrative donation amounts in `donationTiers` with your
      real programme costings.
- [ ] Connect the three forms.
- [ ] Add photographs to `public/assets/`.
- [ ] Work through every `EditorNote` on the site.

## Deploying

`npm run build` produces a standard Next.js build. Vercel needs no
configuration. Any Node host works with `npm run build && npm run start`.

## Accessibility and performance

Semantic landmarks throughout, visible focus styles, labelled form controls,
breadcrumbs on inner pages, and `prefers-reduced-motion` respected — the scroll
reveals and transitions switch off for anyone who asks for that. No client-side
JavaScript is loaded for pages that do not need it.
