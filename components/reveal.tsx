"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Fades content in as it scrolls into view.
 *
 * One shared IntersectionObserver handles every instance on the page, so the
 * cost stays flat no matter how many elements are wrapped.
 */

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (typeof window === "undefined") return null;
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  return observer;
}

type Props = {
  children: ReactNode;
  /** Stagger step — each unit adds 90ms. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

export default function Reveal({ children, delay = 0, as: Tag = "div", className }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Anything already on screen at mount should not wait for a scroll event.
    const io = getObserver();
    if (!io) {
      el.classList.add("is-visible");
      return;
    }

    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": delay } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
