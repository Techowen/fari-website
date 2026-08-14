"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Btn } from "./ui";
import { ArrowRight } from "./icons";
import { heroSlides } from "@/lib/content";

/**
 * Home hero.
 *
 * Every slide renders server-side, so the first one — headline, copy and
 * buttons — is on the page before any JavaScript arrives. The client work is
 * only the crossfade, the autoplay timer and the controls.
 *
 * Autoplay pauses on hover, on keyboard focus, when the tab is hidden, and
 * entirely for anyone who prefers reduced motion.
 */

const INTERVAL_MS = 7000;

export default function HeroSlider() {
  const count = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(false);
  const [warm, setWarm] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  // Reduced motion turns the carousel into a manual one.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setStill(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // The later photographs are fetched once the first one is out of the way,
  // so they are ready well before the first transition without competing
  // with the slide everybody actually sees first.
  useEffect(() => {
    const id = window.setTimeout(() => setWarm(true), 600);
    return () => window.clearTimeout(id);
  }, []);

  // No point animating a hero nobody is looking at.
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused || still || count < 2) return;
    const id = window.setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, still, count, go]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  };

  const slide = heroSlides[index];

  return (
    <section
      className={`hero${paused || still ? " is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="FARI's work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => {
        touchX.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="hero__slides" aria-hidden="true">
        {heroSlides.map((item, i) => (
          <div key={item.image} className={`hero__slide${i === index ? " is-active" : ""}`}>
            {/* Plain <img> so the hero stays a single self-contained component
                and a missing file degrades to the brand gradient behind it. */}
            {i === 0 || warm ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={item.image}
                alt=""
                fetchPriority={i === 0 ? "high" : "low"}
                decoding="async"
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="wrap">
        <div className="hero__inner">
          <div className="hero__copy" key={index}>
            <span className="badge">
              <span className="dot" />
              {slide.kicker}
            </span>

            <h1>{slide.title}</h1>
            <p className="hero__text">{slide.text}</p>

            <div className="hero__actions">
              <Btn href={slide.primary.href} arrow>
                {slide.primary.label}
              </Btn>
              <Btn href={slide.secondary.href} variant="ghost">
                {slide.secondary.label}
              </Btn>
            </div>
          </div>

          <div className="hero__controls">
            <button
              type="button"
              className="hero__arrow"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
            >
              <ArrowRight size={18} style={{ transform: "rotate(180deg)" }} />
            </button>

            <div className="hero__dots">
              {heroSlides.map((item, i) => (
                <button
                  key={item.image}
                  type="button"
                  className={`hero__dot${i === index ? " is-active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}: ${item.kicker}`}
                  aria-current={i === index ? "true" : undefined}
                >
                  <span style={{ animationDuration: `${INTERVAL_MS}ms` }} />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="hero__arrow"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {count}: {slide.title}
      </p>
    </section>
  );
}
