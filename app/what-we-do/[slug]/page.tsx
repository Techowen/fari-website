import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { Btn, Media, PageHero, SectionHead } from "@/components/ui";
import { ArrowRight, Check, Icon } from "@/components/icons";
import { focusAreaBySlug, focusAreas } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return focusAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = focusAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.summary,
    alternates: { canonical: `/what-we-do/${area.slug}` },
    openGraph: { title: `${area.title} — FARI`, description: area.summary },
  };
}

export default async function FocusAreaPage({ params }: Params) {
  const { slug } = await params;
  const area = focusAreaBySlug(slug);
  if (!area) notFound();

  const others = focusAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        trail={[{ label: "What We Do", href: "/what-we-do" }, { label: area.title }]}
        eyebrow="Focus area"
        image={area.banner}
        imageAlt={`PLACEHOLDER — ${area.title.toLowerCase()} programme activity`}
        title={area.title}
        lead={area.summary}
      />

      {/* ------------------------------ INTRO ------------------------------ */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="split split--wide-left" style={{ alignItems: "start" }}>
            <Reveal>
              <div>
                <span className="eyebrow">The challenge</span>
                <h2>Why this matters</h2>
                <p className="lead mt-3">{area.intro}</p>

                <div className="mt-5">
                  <h4 style={{ marginBottom: "0.75rem" }}>This area is designed to reach</h4>
                  <div className="pills" style={{ marginTop: 0 }}>
                    {area.serves.map((s) => (
                      <span className="pill" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div style={{ position: "relative" }}>
                <Media src={area.image} alt={`PLACEHOLDER — ${area.title.toLowerCase()} programme activity`} variant={area.gradient} ratio="4x3" />
                <div className="chip">
                  <span className="chip__ic">
                    <Icon name={area.icon} size={22} />
                  </span>
                  <span>
                    <strong>{area.title}</strong>
                    <small>One of five FARI focus areas</small>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- ACTIVITIES ---------------------------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="What we do"
              title={`Our work in ${area.title.toLowerCase()}`}
              lead="These are the interventions FARI delivers within this area. What runs in any given community is agreed with that community, not decided in advance."
            />
          </Reveal>

          <div className="grid grid-2">
            {area.activities.map((activity, i) => (
              <Reveal key={activity.title} delay={i % 2}>
                <article className="panel">
                  <span className="panel__no">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{activity.title}</h3>
                  <p className="mt-2">{activity.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- HOW WE DELIVER -------------------------- */}
      <section className="section section--brand">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <div>
                <span className="eyebrow eyebrow--light">How we deliver</span>
                <h2>Agreed with the community first</h2>
                <p className="lead mt-2">
                  No {area.title.toLowerCase()} programme is designed before we have spoken to the
                  people it is meant to serve. What follows applies to every FARI intervention in
                  this area.
                </p>
                <ul className="ticks">
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Assessment before design.</strong> Need is established with community
                      committees, including women, young people and persons with disabilities.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Coordination, not duplication.</strong> We check what government and
                      other responders already provide before committing.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Measured against what we promised.</strong> Targets are agreed in
                      advance and reported against honestly.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Handed over.</strong> Skills, assets and decision-making stay with the
                      community when our direct involvement ends.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="grid" style={{ gap: "1rem" }}>
                <div className="stat">
                  <div className="stat__label" style={{ marginTop: 0 }}>
                    Support this work
                  </div>
                  <div className="stat__note">
                    Direct funding for {area.title.toLowerCase()} programming, or a partnership on
                    joint delivery.
                  </div>
                  <div className="mt-3" style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    <Btn href="/donate" variant="light" small arrow>
                      Donate
                    </Btn>
                    <Btn href="/contact?enquiry=partnership" variant="ghost" small>
                      Partner with us
                    </Btn>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- OTHER AREAS --------------------------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead eyebrow="Explore further" title="Our other focus areas" />
          </Reveal>

          <div className="grid grid-4">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i % 4}>
                <Link className="card card--link" href={`/what-we-do/${other.slug}`}>
                  <span className="card__icon">
                    <Icon name={other.icon} size={24} />
                  </span>
                  <h3 style={{ fontSize: "1.15rem" }}>{other.title}</h3>
                  <p style={{ fontSize: "0.93rem" }}>{other.short}</p>
                  <span className="card__more">
                    Read more <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
