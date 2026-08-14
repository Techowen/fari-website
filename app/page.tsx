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
                  alt="PLACEHOLDER — a community gathering during a programme session"
                  variant={1}
                  ratio="4x3"
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
                  support vulnerable communities across Nigeria. We combine immediate relief with
                  the longer work of education, income and resilience — because the pressures
                  facing these communities never arrive one at a time.
                </p>

                <ul className="ticks">
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Community-led.</strong> Programmes are designed with community
                      committees, not delivered to them.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Deliberately inclusive.</strong> Women, persons with disabilities and
                      displaced people are reached by design, not by chance.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Built through partnership.</strong> We work with government, local
                      organisations and communities rather than around them.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Designed to continue.</strong> Every programme has an exit, and the
                      capability stays behind.
                    </span>
                  </li>
                </ul>

                <div className="mt-5">
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
              <div className="card" style={{ background: "var(--brand-800)", borderColor: "transparent" }}>
                <h3 style={{ color: "#fff" }}>Not sure where to start?</h3>
                <p style={{ color: "rgba(255,255,255,.75)" }}>
                  Our overview page sets out how the five areas fit together and who each one is
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
              eyebrow="Who we serve"
              title="Priority is given to those most often missed"
              lead="Programmes that do not deliberately seek out the most excluded tend not to reach them. These five groups are built into how we target, design and measure our work."
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
          </div>
        </div>
      </section>

      {/* --------------------------- COMMITMENTS --------------------------- */}
      <section className="section section--brand">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <div>
                <span className="eyebrow eyebrow--light">Where we stand</span>
                <h2>A new organisation, held to an old standard</h2>
                <p className="lead mt-2">
                  FARI was established in {site.founded}, so we do not yet have years of results to
                  point to. What we can commit to now is how we work: openly, inclusively, and
                  accountable to communities first. Our first impact report will be published at
                  the close of our first programme cycle.
                </p>
                <div className="mt-5">
                  <Btn href="/about" variant="light" arrow>
                    How we work
                  </Btn>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="grid grid-2" style={{ gap: "1rem" }}>
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "clamp(2rem,4vw,3rem)",
              }}
            >
              <div style={{ maxWidth: 620 }}>
                <span className="eyebrow">Latest</span>
                <h2>News and updates</h2>
              </div>
              <Btn href="/news" variant="outline" small arrow>
                All news
              </Btn>
            </div>
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
                  </div>
                </Link>
              </Reveal>
            ))}
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
