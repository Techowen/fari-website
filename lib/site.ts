/**
 * Organisation-wide constants.
 * Anything that appears in more than one place lives here.
 */

export const site = {
  name: "Future Advancement and Relief Initiative",
  shortName: "FARI",
  tagline: "Advancing communities. Delivering relief.",
  founded: 2026,

  description:
    "FARI is a Nigerian not-for-profit organisation working with vulnerable communities across education, humanitarian response, climate resilience, livelihoods and protection.",

  // Used for canonical URLs, sitemap and Open Graph. Replace with your live domain.
  url: "https://fari.org.ng",

  contact: {
    email: "info@fari.org.ng",
    programmes: "programmes@fari.org.ng",
    partnerships: "partnerships@fari.org.ng",
    phone: "+234 800 000 0000",
    phoneHref: "+2348000000000",
    address: {
      line1: "Registered Office",
      line2: "Abuja, Federal Capital Territory",
      country: "Nigeria",
    },
    hours: "Monday – Friday, 9:00am – 5:00pm (WAT)",
  },

  socials: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "X", href: "#", icon: "x" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;
