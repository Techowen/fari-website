import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { EditorNote, Media, PageHero } from "@/components/ui";
import { formatDate, posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements, updates and reflections from the FARI team.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        trail={[{ label: "News" }]}
        eyebrow="Newsroom"
        image="/assets/banners/page-news.jpg"
        imageAlt="PLACEHOLDER — participants at a training session"
        title="News and updates"
        lead="Announcements, programme updates and reflections on how we work. We publish what we are learning, including where our approach needs to change."
      />

      <section className="section section--paper">
        <div className="wrap">
          {/* Featured post */}
          {lead ? (
            <Reveal>
              <Link
                href={`/news/${lead.slug}`}
                className="post-card"
                style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}
              >
                <div className="split" style={{ gap: 0, alignItems: "stretch" }}>
                  <Media src={lead.image} alt="" variant={lead.gradient} ratio="16x9" />
                  <div className="post-card__body" style={{ justifyContent: "center", padding: "clamp(1.75rem,3vw,2.75rem)" }}>
                    <div className="post-card__meta">
                      <span className="tag tag--accent">{lead.category}</span>
                      <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                    </div>
                    <h2 style={{ fontSize: "clamp(1.45rem,2.6vw,2rem)" }}>{lead.title}</h2>
                    <p className="mt-2">{lead.excerpt}</p>
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
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1}>
            <div className="mt-5">
              <EditorNote>
                These posts are starter content written from FARI&rsquo;s founding brief. Add,
                replace or remove entries in <code>lib/content.ts</code> under <code>posts</code> —
                each one automatically gets its own page, appears on the home page, and is added to
                the sitemap. Delete this note from <code>app/news/page.tsx</code> when you publish.
              </EditorNote>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
