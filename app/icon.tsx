import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * FARI Favicon:
 * Professional NGO mark — deep forest green foundation,
 * sheltering relief base and rising advancement arc in pure white,
 * with a warm terracotta accent.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B3B2C",
          borderRadius: 7,
          padding: 4,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sheltering base */}
          <rect x="6" y="24" width="20" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.85" />
          {/* Rising advancement arc */}
          <path
            d="M7 21C7 14.8 11.2 10 16 10C19.1 10 21.8 11.6 23.4 14.2"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Forward direction arrow / crest */}
          <path d="M20.5 9.5L25.5 13.5L20 15.2Z" fill="#FFFFFF" />
          {/* Warm terracotta accent dot of hope / vitality */}
          <circle cx="16" cy="16" r="2.2" fill="#D95D22" />
        </svg>
      </div>
    ),
    size,
  );
}
