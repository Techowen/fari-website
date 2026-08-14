import Link from "next/link";
import { site } from "@/lib/site";
import { focusAreas } from "@/lib/content";
import { BrandMark, SocialIcon } from "./icons";
import NewsletterForm from "./newsletter-form";

/** "2026" in the founding year, "2026–2029" thereafter. Resolved at build time. */
function yearRange() {
  const now = new Date().getFullYear();
  return now > site.founded ? `${site.founded}–${now}` : `${site.founded}`;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <Link className="brand" href="/">
              <span className="brand__mark">
                <BrandMark size={24} />
              </span>
              <span className="brand__text">
                <span className="brand__name">{site.shortName}</span>
                <span className="brand__sub">Advancement &amp; Relief</span>
              </span>
            </Link>
            <p>
              {site.name} is a Nigerian not-for-profit organisation established in {site.founded},
              working with vulnerable communities through community-led programmes and strategic
              partnerships.
            </p>
            <div className="socials">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <SocialIcon name={s.icon} size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>What we do</h4>
            <ul className="fmenu">
              {focusAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/what-we-do/${area.slug}`}>{area.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Organisation</h4>
            <ul className="fmenu">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/get-involved">Get involved</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/donate">Donate</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Stay in touch</h4>
            <p style={{ lineHeight: 1.8 }}>
              {site.contact.address.line2}
              <br />
              {site.contact.address.country}
              <br />
              <a href={`mailto:${site.contact.email}`} style={{ color: "var(--accent-400)" }}>
                {site.contact.email}
              </a>
              <br />
              <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {yearRange()} {site.name}. All rights reserved.
          </span>
          <span>
            <Link href="/contact">Privacy</Link> &nbsp;·&nbsp; <Link href="/contact">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
