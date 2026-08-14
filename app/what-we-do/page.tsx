import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { Btn, Media, PageHero, SectionHead } from "@/components/ui";
import { ArrowRight, Icon } from "@/components/icons";
import { focusAreas, priorityGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "FARI works across five connected focus areas: education, humanitarian response, climate resilience, livelihoods and protection.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "What We Do" }]}
        eyebrow="Our work"
        image="/assets/banners/page-what-we-do.jpg"
        imageAlt="PLACEHOLDER — volunteers preparing supplies at a community outreach"
        title="Five focus areas, one continuous piece of work"
        lead="Education, humanitarian response, climate resilience, livelihoods and protection. Each area is designed to reinforce the others, so that assistance leads somewhere rather than stopping when the programme does."
      />

      {/* ------------------------ AREAS AS FULL ROWS ------------------------ */}
      <section className="section section--paper">
        <div className="wrap">
          <div style={{ display: "grid", gap: "clamp(3rem,6vw,5rem)" }}>
            {focusAreas.map((area, i) => (
              <Reveal key={area.slug}>
                <div className="split" style={{ direction: i % 2 ? "rtl" : "ltr" }}>
                  <div style={{ direction: "ltr" }}>
                    <Media src={area.image} alt="" variant={area.gradient} ratio="4x3" label={area.title} />
                  </div>

                  <div style={{ direction: "ltr" }}>
                    <span className="tag">{String(i + 1).padStart(2, "0")} · Focus area</span>
                    <h2 className="mt-2">{area.title}</h2>
                    <p className="lead mt-2">{area.summary}</p>

                    <div className="pills">
                      {area.serves.slice(0, 4).map((s) => (
                        <span className="pill" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Btn href={`/what-we-do/${area.slug}`} variant="outline" arrow>
                        Explore {area.title.toLowerCase()}
                      </Btn>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- HOW THEY LINK -------------------------- */}
      <section className="section section--brand">
        <div className="wrap">
          <Reveal>
            <SectionHead
              center
              light
              eyebrow="How they connect"
              title="Why we refuse to run these as separate programmes"
              lead="A household hit by a flood needs relief this month, its children back in school this term, and an income by next season. Splitting those across three organisations is how progress gets lost."
            />
          </Reveal>

          <div className="grid grid-3">
            <Reveal>
              <article className="stat" style={{ height: "100%" }}>
                <span className="panel__no" style={{ color: "var(--accent-400)" }}>
                  Stage one
                </span>
                <h3 style={{ color: "#fff", fontSize: "1.25rem" }}>Stabilise</h3>
                <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.75rem" }}>
                  Humanitarian response and protection meet immediate need and reduce the risk of
                  harm, so that a household is not making decisions purely to survive the week.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="stat" style={{ height: "100%" }}>
                <span className="panel__no" style={{ color: "var(--accent-400)" }}>
                  Stage two
                </span>
                <h3 style={{ color: "#fff", fontSize: "1.25rem" }}>Recover</h3>
                <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.75rem" }}>
                  Education gets children learning again and livelihoods restore income — the two
                  things a displaced or crisis-affected household loses first and misses longest.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="stat" style={{ height: "100%" }}>
                <span className="panel__no" style={{ color: "var(--accent-400)" }}>
                  Stage three
                </span>
                <h3 style={{ color: "#fff", fontSize: "1.25rem" }}>Withstand</h3>
                <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.75rem" }}>
                  Climate resilience and savings reduce the damage the next shock does, so that
                  households are not returned to stage one every time the rains fail or flood.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- WHO WE REACH -------------------------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              center
              eyebrow="Across every area"
              title="The people each programme is designed to reach"
            />
          </Reveal>

          <div className="grid grid-3">
            {priorityGroups.map((group, i) => (
              <Reveal key={group.title} delay={i % 3}>
                <article className="card">
                  <h3>{group.title}</h3>
                  <p className="mt-2">{group.body}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={2}>
              <Link
                className="card card--link"
                href="/get-involved"
                style={{ background: "var(--brand-800)", borderColor: "transparent" }}
              >
                <h3 style={{ color: "#fff" }}>Help us reach them</h3>
                <p style={{ color: "rgba(255,255,255,.75)" }}>
                  Give, volunteer your skills, or partner with us on delivery.
                </p>
                <span className="card__more" style={{ color: "var(--accent-400)" }}>
                  Get involved <ArrowRight size={16} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
