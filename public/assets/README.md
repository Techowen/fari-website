# Photos

Every image in this folder is a **stock placeholder**, not FARI photography.
They are here so the site can be designed, reviewed and shown with real images
in place. Replace them with FARI's own photographs before launch, and keep
[CREDITS.md](CREDITS.md) accurate while any of them remain — most carry licences
that require attribution.

## Replacing one

Keep the filename and drop your photo in over it. Nothing in the code changes:

```
public/assets/hero/hero-education.jpg   ← overwrite this file
```

Then update the `alt` text, which currently starts with `PLACEHOLDER —`. Alt
text lives beside the image path:

- Hero slides — `heroSlides` in `lib/content.ts`
- Focus-area photos — `image` (in the page body) and `banner` (behind the page
  title) on each entry in `focusAreas`
- News photos — `image` on each entry in `posts`, used on the card and behind
  the article title
- Inner-page banners — the `image` prop on that page's `<PageHero>`
- One-off page photos — the `<Media src=… alt=…>` call on the page itself

The page banners crop wide and the title sits over the left of the frame, so
pick photographs with their subject to the right of centre.

If you would rather use a new filename, change the path in the same place.

## What is used where

| File | Used on | Shape |
|---|---|---|
| `hero/hero-education.jpg` | Home hero, slide 1 | 16:9, landscape |
| `hero/hero-community.jpg` | Home hero, slide 2 | 16:9, landscape |
| `hero/hero-climate.jpg` | Home hero, slide 3 | 16:9, landscape |
| `hero/hero-livelihoods.jpg` | Home hero, slide 4 | 16:9, landscape |
| `banners/page-about.jpg` `banners/page-what-we-do.jpg` `banners/page-news.jpg` `banners/page-contact.jpg` `banners/page-donate.jpg` `banners/page-involved.jpg` | The banner behind the title on each inner page | wide, landscape |
| `home-about.jpg` | Home, about snapshot | 4:3, landscape |
| `about-story.jpg` | About, our story | 3:4, portrait |
| `about-governance.jpg` | About, governance | 4:3, landscape |
| `involved-volunteer.jpg` | Get Involved | 4:3, landscape |
| `education.jpg` `humanitarian-response.jpg` `climate-resilience.jpg` `livelihoods.jpg` `protection.jpg` | What We Do — one per focus area, list and detail pages | 4:3, landscape |
| `news-1.jpg` `news-2.jpg` `news-3.jpg` | News cards and article headers | 16:9, landscape |

A branded gradient sits behind every image, so a missing or slow-loading file
never leaves a broken box on the page.

## Before you upload

- Hero photographs want about 1900px on the long edge; everything else about
  1400px. Larger is wasted on the web.
- Compress to under 300 KB each — the placeholders are heavier than that and
  should not set the standard. [Squoosh](https://squoosh.app) does this in the
  browser.
- The hero crops to the centre of the frame and text sits over the middle of
  it. Choose photographs with room to breathe there, and avoid busy or bright
  centres.
- Write a real `alt` describing what is happening in the photo. Leave `alt=""`
  only when the image is purely decorative.
- Confirm you have consent to publish photographs of the people in them,
  especially children. This matters more than the file size.
