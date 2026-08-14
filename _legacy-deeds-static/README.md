# Deeds Support Initiative International — Website

A modern, responsive, multi-page website for an NGO. Plain HTML, CSS and JavaScript —
no build step, no dependencies, no framework. Open `index.html` and it runs.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero slider, focus areas, about snapshot, mission/vision, project preview, impact counters, testimonials, partners, CTA |
| `about.html` | Our story, mission, vision, values, four-step approach, impact numbers |
| `projects.html` | Featured programme plus six project cards with animated funding bars |
| `team.html` | Leadership team with hover socials, board of trustees |
| `gallery.html` | Filterable photo grid with a lightbox viewer |
| `news.html` | News and stories grid, newsletter signup |
| `contact.html` | Contact tiles, validated enquiry form, embedded map |
| `donate.html` | Donation panel (amount picker, one-time/monthly toggle), impact breakdown, FAQ |

## Structure

```
deeds-support-website/
├── index.html … donate.html    the eight pages
├── css/style.css               all styling, design tokens at the top
├── js/main.js                  all behaviour, no dependencies
└── assets/                     drop your photos here
```

## Adding your photos

The site is built to look finished **before** you have photography. Every image
container carries a `.mediabox` class that paints a branded gradient behind the
`<img>`. If the file is missing, `js/main.js` hides the broken image and the
gradient shows through — nothing breaks.

To use real photos, drop files with these names into `assets/`:

**Hero slider** (wide, at least 1920×1080)
`hero-1.jpg` `hero-2.jpg` `hero-3.jpg`

**Page banners** (wide)
`about-hero.jpg` `projects-hero.jpg` `team-hero.jpg` `gallery-hero.jpg`
`news-hero.jpg` `contact-hero.jpg` `donate-hero.jpg`

**Content**
`about-main.jpg` `about-story.jpg` `contact-office.jpg`
`project-1.jpg` … `project-6.jpg`
`gallery-1.jpg` … `gallery-10.jpg`
`team-1.jpg` … `team-4.jpg` (portraits, 3:4 works best)
`news-1.jpg` … `news-6.jpg`

Compress them first — aim for under 300 KB each.

## Changing the brand colours

Everything is driven by custom properties at the top of `css/style.css`:

```css
:root {
  --green-800: #0c4137;   /* primary dark */
  --green-600: #176553;
  --amber-500: #c8792f;   /* accent / donate button */
  --cream:     #faf7f2;   /* page background */
}
```

Change those four and the whole site follows.

## Changing content

Text is written directly in the HTML. Impact numbers animate from the
`data-count` attribute:

```html
<span data-count="1000" data-suffix="+">0</span>
```

Project funding bars read `data-value` as a percentage:

```html
<div class="progress__bar" data-value="82"></div>
```

## Editing the navigation

Because this is a plain static site, the header and footer are repeated in each
of the eight HTML files. If you change a nav link, change it in all eight — or
move the site onto a static site generator later if that becomes tedious.

## Wiring up the forms

The contact, donation and newsletter forms currently validate in the browser and
show a confirmation message, but **do not send anywhere**. In `js/main.js`, find
section 8 (`Forms`) and replace the `setTimeout` block with a real request:

```js
const res = await fetch('https://your-endpoint', {
  method: 'POST',
  body: new FormData(form)
});
```

For donations, connect `donate.html` to **Paystack** or **Flutterwave** — both
have straightforward Nigerian card and transfer support. The bank details block
on that page is a placeholder; replace it with your real account.

## Publishing

Drag the whole folder onto [Netlify Drop](https://app.netlify.com/drop), or push
it to a GitHub repository and enable GitHub Pages. No configuration needed.

## Browser support

Works in all current versions of Chrome, Edge, Firefox and Safari. Respects
`prefers-reduced-motion` — animations switch off for users who ask for that.
