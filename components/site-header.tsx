"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { BrandMark } from "./icons";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`site-header${stuck ? " is-stuck" : ""}`}>
        <div className="wrap">
          <nav className="nav" aria-label="Main navigation">
            <Link className="brand" href="/" aria-label={`${site.shortName} — home`}>
              <span className="brand__mark">
                <BrandMark size={24} />
              </span>
              <span className="brand__text">
                <span className="brand__name">{site.shortName}</span>
                <span className="brand__sub">Advancement &amp; Relief</span>
              </span>
            </Link>

            <ul className="nav__list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`nav__link${isActive(item.href) ? " is-active" : ""}`}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link className="btn btn--sm nav__cta" href="/donate">
              Donate
            </Link>

            <button
              className="burger"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </div>
      </header>

      <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} hidden={!open}>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "is-active" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <Link className="btn btn--block" href="/donate">
          Donate
        </Link>
      </div>
    </>
  );
}
