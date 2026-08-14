import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

/* ------------------------------------------------------------------ */
/* Media — a branded placeholder that becomes a photo when you add one */
/* ------------------------------------------------------------------ */

type MediaProps = {
  /** Path under /public, e.g. "/assets/education.jpg". Omit for the gradient. */
  src?: string;
  alt?: string;
  /** 1–5, picks one of the branded gradient treatments. */
  variant?: number;
  ratio?: "4x3" | "3x4" | "16x9" | "square";
  label?: string;
  className?: string;
  priority?: boolean;
};

export function Media({
  src,
  alt = "",
  variant = 1,
  ratio = "4x3",
  label,
  className = "",
}: MediaProps) {
  const v = ((variant - 1) % 5) + 1;
  return (
    <div className={`media media--${v} media--${ratio} ${className}`.trim()}>
      {src ? (
        // A plain <img> keeps this a server component and avoids a broken
        // render if the file has not been added yet — the gradient shows through.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      ) : null}
      {label ? <span className="media__label">{label}</span> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      {eyebrow ? <span className={`eyebrow${light ? " eyebrow--light" : ""}`}>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type BtnVariant = "clay" | "brand" | "outline" | "ghost" | "light";

const variantClass: Record<BtnVariant, string> = {
  clay: "",
  brand: " btn--brand",
  outline: " btn--outline",
  ghost: " btn--ghost",
  light: " btn--light",
};

export function Btn({
  href,
  children,
  variant = "clay",
  arrow,
  small,
  block,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  arrow?: boolean;
  small?: boolean;
  block?: boolean;
  className?: string;
}) {
  const cls =
    `btn${variantClass[variant]}${small ? " btn--sm" : ""}${block ? " btn--block" : ""} ${className}`.trim();

  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const inner = (
    <>
      {children}
      {arrow ? <ArrowRight className="arrow" size={small ? 16 : 18} /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a className={cls} href={href}>
        {inner}
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Breadcrumbs                                                         */
/* ------------------------------------------------------------------ */

export function Crumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {trail.map((item) => (
        <span key={item.label} style={{ display: "contents" }}>
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Page banner                                                         */
/* ------------------------------------------------------------------ */

export function PageHero({
  eyebrow,
  title,
  lead,
  trail,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  trail?: { label: string; href?: string }[];
  /** Path under /public, e.g. "/assets/banners/page-about.jpg". */
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero${image ? " has-image" : ""}`}>
      {image ? (
        <div className="page-hero__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} fetchPriority="high" decoding="async" />
        </div>
      ) : null}
      <div className="wrap">
        {trail ? <Crumbs trail={trail} /> : null}
        {eyebrow ? <span className="eyebrow eyebrow--light">{eyebrow}</span> : null}
        <h1>{title}</h1>
        {lead ? <p>{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Editorial note — visible reminder to replace placeholder content    */
/* ------------------------------------------------------------------ */

export function EditorNote({ children }: { children: ReactNode }) {
  return (
    <p className="note">
      <strong>Note for the FARI team:</strong> {children}
    </p>
  );
}
