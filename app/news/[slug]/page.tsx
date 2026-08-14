import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { Btn, Crumbs, Media, SectionHead } from "@/components/ui";
import { formatDate, postBySlug, posts } from "@/lib/content";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/news/${post.slug}`,
  };

  return (
    <>
      <section className="page-hero has-image">
        <div className="page-hero__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" fetchPriority="high" decoding="async" />
        </div>
        <div className="wrap wrap--narrow">
          <Crumbs trail={[{ label: "News", href: "/news" }, { label: post.category }]} />
          <span className="tag tag--accent">{post.category}</span>
          <h1 className="mt-3">{post.title}</h1>
          <p style={{ marginTop: "1.25rem", fontWeight: 600 }}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap wrap--narrow">
          <Reveal>
            <article className="article">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </article>
          </Reveal>

          <Reveal delay={2}>
            <div
              className="mt-5"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--line)",
              }}
            >
              <Btn href="/news" variant="outline" small>
                ← All news
              </Btn>
              <Btn href="/get-involved" small arrow>
                Get involved
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {more.length ? (
        <section className="section">
          <div className="wrap">
            <Reveal>
              <SectionHead eyebrow="Keep reading" title="More from FARI" />
            </Reveal>
            <div className="grid grid-3">
              {more.map((other, i) => (
                <Reveal key={other.slug} delay={i % 3}>
                  <Link className="post-card" href={`/news/${other.slug}`}>
                    <Media src={other.image} alt="" variant={other.gradient} ratio="16x9" />
                    <div className="post-card__body">
                      <div className="post-card__meta">
                        <span className="tag tag--accent">{other.category}</span>
                        <time dateTime={other.date}>{formatDate(other.date)}</time>
                      </div>
                      <h3>{other.title}</h3>
                      <p>{other.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
