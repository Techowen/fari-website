import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { Media, PageHero } from "@/components/ui";
import { ArrowRight } from "@/components/icons";
import { formatDate, posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Dispatches",
  description: "Announcements, updates and field reflections from the FARI team.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        trail={[{ label: "News" }]}
        eyebrow="Newsroom &amp; Field Reports"
        image="/assets/banners/page-news.jpg"
        imageAlt="Workshop and community training session in Nigeria"
        title="News and updates"
        lead="Announcements, programme updates and field reflections on our community-led initiatives across Nigeria."
      />

      <section className="section section--paper">
        <div className="wrap">
          {/* Featured post */}
          {lead ? (
            <Reveal>
              <Link
                href={`/news/${lead.slug}`}
                className="post-card"
                style={{ marginBottom: "clamp(2rem,4vw,3.5rem)" }}
              >
                <div className="split" style={{ gap: 0, alignItems: "stretch" }}>
                  <Media src={lead.image} alt="" variant={lead.gradient} ratio="16x9" />
                  <div className="post-card__body" style={{ justifyContent: "center", padding: "clamp(1.75rem,3vw,2.75rem)" }}>
                    <div className="post-card__meta">
                      <span className="tag tag--accent">{lead.category}</span>
                      <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                    </div>
                    <h2 style={{ fontSize: "clamp(1.45rem,2.5vw,2rem)" }}>{lead.title}</h2>
                    <p className="mt-2" style={{ WebkitLineClamp: 4 }}>{lead.excerpt}</p>
                    <span className="post-card__read" style={{ marginTop: "1.25rem" }}>
                      Read featured story <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ) : null}

          {/* The rest */}
          <div className="grid grid-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i % 3}>
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
                      Read full story <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
