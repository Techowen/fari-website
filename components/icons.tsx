import type { SVGProps } from "react";
import type { IconName } from "@/lib/content";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

type P = SVGProps<SVGSVGElement> & { size?: number };

const svg =
  (paths: React.ReactNode, strokeWidth = 1.8) =>
  ({ size = 24, ...rest }: P) => (
    <svg {...base} strokeWidth={strokeWidth} width={size} height={size} aria-hidden="true" {...rest}>
      {paths}
    </svg>
  );

/* ---- Focus-area and value icons (Professional & Detailed) ---- */

export const BookIcon = svg(
  <>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
    <path d="M6 14h6" />
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
  </>,
);

export const ReliefIcon = svg(
  <>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
    <path d="M12 12v6" />
    <path d="M9 15h6" />
  </>,
);

export const ClimateIcon = svg(
  <>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />
    <path d="M2 21c0-3 1.9-5.4 5.1-6" />
    <path d="M12 12c-2 1-3 3-3 5" />
  </>,
);

export const LivelihoodIcon = svg(
  <>
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <circle cx="12" cy="13" r="1.5" />
    <path d="M12 14.5V17" />
  </>,
);

export const ShieldIcon = svg(
  <>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </>,
);

export const CommunityIcon = svg(
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
);

export const HandshakeIcon = svg(
  <>
    <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
    <path d="m13.5 15.5 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.5-3.5" />
    <path d="M3 11 8 6l3.5 3.5a1.5 1.5 0 0 0 2.1 0L16 7l5 5" />
    <path d="M3 11v4l4 4M21 12v3l-3 3" />
  </>,
);

export const CompassIcon = svg(
  <>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </>,
);

export const ScalesIcon = svg(
  <>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h18" />
  </>,
);

export const GrowthIcon = svg(
  <>
    <path d="M12 20v-8" />
    <path d="M4 4v16h16" />
    <path d="m4 15 6-6 4 4 6-6" />
    <path d="M16 7h4v4" />
  </>,
);

/* ---- UI icons ---- */

export const ArrowRight = svg(
  <>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </>,
  2,
);

export const Check = svg(
  <>
    <polyline points="20 6 9 17 4 12" />
  </>,
  2.4,
);

export const MailIcon = svg(
  <>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>,
);

export const PhoneIcon = svg(
  <>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </>,
);

export const PinIcon = svg(
  <>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </>,
);

export const ClockIcon = svg(
  <>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </>,
);

/* ---- Social icons (filled) ---- */

const social = (path: React.ReactNode) =>
  function SocialIcon({ size = 18, ...rest }: P) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
        {path}
      </svg>
    );
  };

export const FacebookIcon = social(
  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />,
);

export const XIcon = social(
  <path d="M18.9 2H22l-7 8 8.2 12h-6.4l-5-7.3L6 22H2.9l7.5-8.6L2.5 2H9l4.5 6.7L18.9 2zm-1.1 18h1.7L7.3 3.8H5.5L17.8 20z" />,
);

export const LinkedInIcon = social(
  <path d="M5 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.03 0-2.34 1.58-2.34 3.21V21h-3.99V9z" />,
);

export const InstagramIcon = ({ size = 18, ...rest }: P) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden="true" {...rest}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none" />
  </svg>
);

/* ---- Registry ---- */

const registry: Record<IconName, (p: P) => React.ReactElement> = {
  book: BookIcon,
  relief: ReliefIcon,
  climate: ClimateIcon,
  livelihood: LivelihoodIcon,
  shield: ShieldIcon,
  community: CommunityIcon,
  handshake: HandshakeIcon,
  compass: CompassIcon,
  scales: ScalesIcon,
  growth: GrowthIcon,
};

export function Icon({ name, ...rest }: P & { name: IconName }) {
  const Cmp = registry[name] ?? CompassIcon;
  return <Cmp {...rest} />;
}

const socialRegistry: Record<string, (p: P) => React.ReactElement> = {
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

export function SocialIcon({ name, ...rest }: P & { name: string }) {
  const Cmp = socialRegistry[name] ?? XIcon;
  return <Cmp {...rest} />;
}

/* ---- Brand mark ---- */

export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Sheltering relief base */}
      <rect x="6" y="24" width="20" height="3" rx="1.5" fill="#fff" fillOpacity="0.85" />
      {/* Rising advancement arc */}
      <path
        d="M7 21C7 14.8 11.2 10 16 10C19.1 10 21.8 11.6 23.4 14.2"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Forward direction arrow / crest */}
      <path d="M20.5 9.5L25.5 13.5L20 15.2Z" fill="#fff" />
      {/* Warm terracotta accent dot */}
      <circle cx="16" cy="16" r="2.2" fill="#D95D22" />
    </svg>
  );
}
