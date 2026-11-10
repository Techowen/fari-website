import Link from "next/link";
import type { Metadata } from "next";
import HeroSlider from "@/components/hero-slider";
import Reveal from "@/components/reveal";
import { Btn, Media, SectionHead } from "@/components/ui";
import { ArrowRight, Check, Icon } from "@/components/icons";
import { site } from "@/lib/site";
import { commitments, focusAreas, formatDate, posts, priorityGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} (${site.shortName})`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const latest = posts.slice(0, 3);

  return (
    <>
      {/* ------------------------------ HERO ------------------------------ */}
      <HeroSlider />

      {/* ---------------------------- WHO WE ARE --------------------------- */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="split split--wide-left">
            <Reveal>
              <div style={{ position: "relative" }}>
                <Media
                  src="/assets/home-about.jpg"
                  alt="A community consultation meeting in Nigeria"
                  variant={1}
                  ratio="3x4"
                />
                <div className="chip">
                  <span className="chip__ic">
                    <Icon name="community" size={22} />
                  </span>
                  <span>
                    <strong>Community-led</strong>
                    <small>Designed with the people it serves</small>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div>
                <span className="eyebrow">Who we are</span>
                <h2>A Nigerian organisation built around the people it serves</h2>
                <p className="lead mt-2">
                  Future Advancement and Relief Initiative was established in {site.founded} to
                  support vulnerable communities across Nigeria. We integrate immediate emergency relief
                  with sustainable education, income generation, and community resilience so families can
                  rebuild with lasting stability.
                </p>

                <ul className="ticks">
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Community-Led.</strong> Programmes are designed directly with local committees
                      rather than delivered from the outside.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Deliberately Inclusive.</strong> Women, youth, persons with disabilities, and
                      displaced families are prioritized at every phase.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Built Through Partnership.</strong> We coordinate closely with grassroots organisations,
                      community groups, and local authorities.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Designed for Self-Sufficiency.</strong> Every programme includes an exit plan
                      that leaves long-term local capacity in place.
                    </span>
                  </li>
                </ul>

                <div className="mt-4" style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Btn href="/about" variant="outline" arrow>
                    More about FARI
                  </Btn>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- WHAT WE DO --------------------------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              center
              eyebrow="What we do"
              title="Five focus areas, designed to connect"
              lead="Relief that leads into recovery, and recovery that leads into income which lasts. Each area strengthens the others."
            />
          </Reveal>

          <div className="grid grid-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i % 3}>
                <Link className="card card--link" href={`/what-we-do/${area.slug}`}>
                  <span className="card__icon">
                    <Icon name={area.icon} size={26} />
                  </span>
                  <h3>{area.title}</h3>
                  <p>{area.short}</p>
                  <span className="card__more">
                    Read more <ArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={2}>
              <div className="card" style={{ background: "var(--primary-700)", borderColor: "transparent" }}>
                <h3 style={{ color: "#fff" }}>Not sure where to start?</h3>
                <p style={{ color: "rgba(255,255,255,.85)", marginTop: "0.5rem" }}>
                  Our overview page sets out how the five areas fit together, our practical methodology, and who each one is
                  designed to reach.
                </p>
                <div className="mt-3">
                  <Btn href="/what-we-do" variant="light" small arrow>
                    See the overview
                  </Btn>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------- WHO WE SERVE -------------------------- */}
      <section className="section section--paper">
        <div className="wrap">
          <Reveal>
            <SectionHead
              center
              eyebrow="Who we serve"
              title="Priority is given to those most often missed"
              lead="Programmes that do not deliberately seek out the most excluded tend not to reach them. These target groups are built into how we design, resource, and measure our work."
            />
          </Reveal>

          <div className="grid grid-3">
            {priorityGroups.map((group, i) => (
              <Reveal key={group.title} delay={i % 3}>
                <article className="panel">
                  <span className="panel__no">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                  <p className="mt-2">{group.body}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={2}>
              <article className="panel panel--brand">
                <span className="panel__no" style={{ color: "var(--accent-400)" }}>06</span>
                <h3>Accountable Inclusion</h3>
                <p className="mt-2">
                  Our delivery frameworks monitor participation across each vulnerable demographic to guarantee that those furthest behind are reached first.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------- COMMITMENTS --------------------------- */}
      <section className="section section--primary">
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <Reveal>
              <div className="sticky-col">
                <span className="eyebrow eyebrow--light">Where we stand</span>
                <h2>A new organisation, held to an old standard</h2>
                <p className="lead mt-2">
                  FARI was established in {site.founded}, so we do not yet have years of historical figures to
                  point to. What we commit to now is how we work: openly, inclusively, and
                  accountable to communities first. Our first impact report will be published at
                  the close of our inaugural programme cycle.
                </p>
                <div className="mt-4">
                  <Btn href="/about" variant="light" arrow>
                    How we work
                  </Btn>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="grid grid-2" style={{ gap: "1.25rem" }}>
                {commitments.map((item) => (
                  <div className="stat" key={item.label}>
                    <div className="stat__num">{item.figure}</div>
                    <div className="stat__label">{item.label}</div>
                    <div className="stat__note">{item.note}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ NEWS ------------------------------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              center
              eyebrow="News & Dispatches"
              title="Latest from the Field"
              lead="Stories, research, and programme milestones from our ongoing community initiatives."
            />
          </Reveal>

          <div className="grid grid-3">
            {latest.map((post, i) => (
              <Reveal key={post.slug} delay={i}>
                <Link className="post-card" href={`/news/${post.slug}`}>
                  <Media src={post.image} alt="" variant={post.gradient} ratio="16x9" />
                  <div className="post-card__body">
                    <div className="post-card__meta">
                      <span className="tag tag--accent">{post.category}</span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="post-card__read">
                      Read story <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 center">
            <Btn href="/news" variant="outline" arrow>
              View all news & updates
            </Btn>
          </div>
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="cta">
        <div className="wrap center">
          <Reveal>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: "center", display: "inline-flex" }}>
              Get involved
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2>Communities lead the work. Partners make it possible.</h2>
          </Reveal>
          <Reveal delay={2}>
            <p>
              Whether you give, volunteer your skills or bring your organisation alongside ours,
              your support goes into programmes designed with the people they serve.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="cta__actions">
              <Btn href="/donate" variant="light" arrow>
                Support our work
              </Btn>
              <Btn href="/get-involved" variant="ghost">
                Other ways to help
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
