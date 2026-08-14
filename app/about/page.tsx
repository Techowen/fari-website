import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { Btn, Media, PageHero, SectionHead } from "@/components/ui";
import { Check, Icon } from "@/components/icons";
import { site } from "@/lib/site";
import { approach, priorityGroups, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FARI is a Nigerian not-for-profit organisation established in 2026, promoting inclusive development, sustainable livelihoods, resilience and improved access to essential services.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "About Us" }]}
        eyebrow="About FARI"
        image="/assets/banners/page-about.jpg"
        imageAlt="PLACEHOLDER — community members at a consultation meeting"
        title="Working with communities, not on their behalf"
        lead={`${site.name} is a Nigerian not-for-profit organisation established in ${site.founded} to support vulnerable communities through community-led programmes and strategic partnerships.`}
      />

      {/* ------------------------------ STORY ------------------------------ */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="split split--wide-left">
            <Reveal>
              <div>
                <span className="eyebrow">Our story</span>
                <h2>Why FARI exists</h2>
                <div className="stack mt-3">
                  <p className="lead">
                    FARI was established in {site.founded} around a straightforward observation: the
                    pressures facing vulnerable Nigerian communities do not arrive one at a time.
                  </p>
                  <p>
                    A failed season takes a household&rsquo;s income. Lost income takes children out
                    of school. A flood displaces the family entirely, and displacement sharply
                    raises the risk of exploitation for the women and girls within it. Each of
                    those is treated as a separate sector by the organisations that respond to
                    them — and gains made in one are routinely reversed by another.
                  </p>
                  <p>
                    We were formed to work across all five of those pressures with the same
                    communities. Education, humanitarian response, climate resilience, livelihoods
                    and protection are not five programmes at FARI; they are one continuous piece of
                    work, sequenced so that relief leads into recovery and recovery leads into
                    income that lasts.
                  </p>
                  <p>
                    We are a new organisation and we are direct about that. We do not have years of
                    results to point to yet. What we do have is a clear method, a governance
                    structure built for accountability, and a commitment to publish honestly what
                    our work achieves — including where it falls short.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div style={{ position: "relative" }}>
                <Media src="/assets/about-story.jpg" alt="PLACEHOLDER — a portrait from a community FARI works with" variant={3} ratio="3x4" />
                <div className="chip">
                  <span className="chip__ic">
                    <Icon name="compass" size={22} />
                  </span>
                  <span>
                    <strong>Est. {site.founded}</strong>
                    <small>Nigerian not-for-profit organisation</small>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------- MISSION / VISION ------------------------ */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              center
              eyebrow="Our compass"
              title="Mission, vision and mandate"
            />
          </Reveal>

          <div className="grid grid-3">
            <Reveal>
              <article className="panel">
                <span className="panel__no">01</span>
                <h3>Our mission</h3>
                <p className="mt-2">
                  To support vulnerable communities in Nigeria through community-led programmes and
                  strategic partnerships across education, humanitarian response, climate
                  resilience, livelihoods and protection — prioritising women, youth, children,
                  persons with disabilities and displaced persons.
                </p>
              </article>
            </Reveal>

            <Reveal delay={1}>
              <article className="panel panel--brand">
                <span className="panel__no">02</span>
                <h3>Our vision</h3>
                <p className="mt-2">
                  A Nigeria in which every community — including those furthest from services and
                  most exposed to shocks — can access what it needs to be safe, educated,
                  economically secure and resilient to a changing climate.
                </p>
              </article>
            </Reveal>

            <Reveal delay={2}>
              <article className="panel">
                <span className="panel__no">03</span>
                <h3>What we promote</h3>
                <p className="mt-2">
                  Inclusive development, sustainable livelihoods, community resilience and improved
                  access to essential services — pursued together rather than in isolation, because
                  progress in one rarely holds without the others.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ VALUES ------------------------------ */}
      <section className="section section--paper">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Our values"
              title="The commitments we hold ourselves to"
              lead="These are working standards rather than statements of intent. Each one has a practical consequence for how programmes are designed and reported."
            />
          </Reveal>

          <div className="grid grid-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i % 3}>
                <article className="card">
                  <span className="card__icon">
                    <Icon name={value.icon} size={26} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------- APPROACH ----------------------------- */}
      <section className="section section--brand">
        <div className="wrap">
          <Reveal>
            <SectionHead
              light
              eyebrow="Our approach"
              title="How a FARI programme is built"
              lead="Five stages, in order. The first two happen before any proposal is written, and the last one is planned from the beginning."
            />
          </Reveal>

          <div className="grid grid-3">
            {approach.map((step, i) => (
              <Reveal key={step.step} delay={i % 3}>
                <article className="stat" style={{ height: "100%" }}>
                  <span className="panel__no" style={{ color: "var(--accent-400)" }}>
                    {step.step}
                  </span>
                  <h3 style={{ color: "#fff", fontSize: "1.25rem" }}>{step.title}</h3>
                  <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.75rem" }}>
                    {step.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- WHO WE SERVE --------------------------- */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <div>
                <span className="eyebrow">Who we serve</span>
                <h2>Five groups, reached deliberately</h2>
                <p className="lead mt-2">
                  Vulnerability is not evenly distributed, and programmes that treat a community as
                  a single unit reliably miss the people within it who need support most. FARI
                  identifies and targets these five groups explicitly at assessment, design and
                  reporting stages.
                </p>
                <ul className="ticks">
                  {priorityGroups.map((group) => (
                    <li key={group.title}>
                      <Check size={19} />
                      <span>
                        <strong>{group.title}.</strong> {group.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <Media src="/assets/about-governance.jpg" alt="PLACEHOLDER — a team working session" variant={2} ratio="4x3" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------- GOVERNANCE ----------------------------- */}
      <section className="section section--paper">
        <div className="wrap wrap--narrow">
          <Reveal>
            <SectionHead
              center
              eyebrow="Governance"
              title="Accountability and safeguarding"
              lead="How we are governed, and what communities and partners are entitled to expect from us."
            />
          </Reveal>

          <Reveal delay={1}>
            <div className="grid grid-2">
              <article className="card">
                <h3>Oversight</h3>
                <p className="mt-2">
                  FARI is governed by a board responsible for strategy, financial oversight and
                  organisational conduct. Programme decisions are made by the management team
                  within a framework the board approves and reviews.
                </p>
              </article>
              <article className="card">
                <h3>Financial transparency</h3>
                <p className="mt-2">
                  We publish how funds are allocated between programme delivery and the operational
                  systems that responsible delivery requires. Accounts are prepared annually and
                  available to partners and donors.
                </p>
              </article>
              <article className="card">
                <h3>Safeguarding</h3>
                <p className="mt-2">
                  Clear conduct standards apply to all staff, volunteers and partners. Anyone who
                  works with FARI is bound by them, and breaches are treated as a matter for the
                  board rather than for programme management alone.
                </p>
              </article>
              <article className="card">
                <h3>Complaints and feedback</h3>
                <p className="mt-2">
                  Communities we work with have an accessible route to raise concerns about our
                  conduct or our programmes, confidentially and without consequence. Accountability
                  runs to them first.
                </p>
              </article>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="center mt-5">
              <Btn href="/contact" variant="outline" arrow>
                Request our governance documents
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- CTA -------------------------------- */}
      <section className="cta">
        <div className="wrap center">
          <Reveal>
            <h2>Bring your organisation alongside ours</h2>
          </Reveal>
          <Reveal delay={1}>
            <p>
              We work with government agencies, community-based organisations, foundations and
              companies on joint delivery, funding and technical collaboration.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="cta__actions">
              <Btn href="/get-involved" variant="light" arrow>
                Ways to get involved
              </Btn>
              <Btn href="/contact" variant="ghost">
                Contact our team
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
