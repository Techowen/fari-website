import type { SVGProps } from "react";
import type { IconName } from "@/lib/content";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

type P = SVGProps<SVGSVGElement> & { size?: number };

const svg =
  (paths: React.ReactNode, strokeWidth = 1.7) =>
  ({ size = 24, ...rest }: P) => (
    <svg {...base} strokeWidth={strokeWidth} width={size} height={size} aria-hidden="true" {...rest}>
      {paths}
    </svg>
  );

/* ---- Focus-area and value icons ---- */

export const BookIcon = svg(
  <>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M9 7h7M9 11h5" />
  </>,
);

export const ReliefIcon = svg(
  <>
    <path d="M3 9.5 12 3l9 6.5" />
    <path d="M5 21V11h14v10z" />
    <path d="M12 13.5v4M10 15.5h4" />
  </>,
);

export const ClimateIcon = svg(
  <>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
    <path d="M2 21c0-3 1.9-5.4 5.1-6" />
  </>,
);

export const LivelihoodIcon = svg(
  <>
    <rect x="2" y="7" width="20" height="14" rx="2.5" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M2 12h20M12 12v3" />
  </>,
);

export const ShieldIcon = svg(
  <>
    <path d="M12 2 4 5.5v6c0 5 3.4 9.4 8 10.5 4.6-1.1 8-5.5 8-10.5v-6z" />
    <path d="m9 12 2 2 4-4" />
  </>,
);

export const CommunityIcon = svg(
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9.5" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
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
    <circle cx="12" cy="12" r="9.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </>,
);

export const ScalesIcon = svg(
  <>
    <path d="M12 3v18M7 21h10" />
    <path d="M5 7h14M8.5 6.5 5 13h7z" />
    <path d="M15.5 6.5 12 13h7z" />
  </>,
);

export const GrowthIcon = svg(
  <>
    <path d="M3 21h18" />
    <path d="M12 21V9" />
    <path d="M12 9c0-3 2-5.5 6-6 0 4-2.5 6-6 6z" />
    <path d="M12 13c0-2.5-1.8-4.5-5-5 0 3.4 2 5 5 5z" />
  </>,
);

/* ---- UI icons ---- */

export const ArrowRight = svg(
  <>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </>,
  2.2,
);

export const Check = svg(
  <>
    <path d="M20 6 9 17l-5-5" />
  </>,
  2.6,
);

export const MailIcon = svg(
  <>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 9 6 9-6" />
  </>,
);

export const PhoneIcon = svg(
  <>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </>,
);

export const PinIcon = svg(
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </>,
);

export const ClockIcon = svg(
  <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 6.5V12l3.5 2" />
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
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      {/* Rising arc over a sheltering base — advancement and relief */}
      <path
        d="M7 21c0-6.2 4.2-11 9-11 3.1 0 5.8 1.6 7.4 4.2"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M20.5 9.5 25 13.5l-5.6 1.6z" fill="#fff" />
      <rect x="7" y="24" width="18" height="3.2" rx="1.6" fill="rgba(255,255,255,.72)" />
    </svg>
  );
}
