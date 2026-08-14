import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { Btn, Media, PageHero, SectionHead } from "@/components/ui";
import { Check, Icon } from "@/components/icons";
import { involvement } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, partner with FARI, give, or join our team. Support community-led programmes across Nigeria.",
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Get Involved" }]}
        eyebrow="Get involved"
        image="/assets/banners/page-involved.jpg"
        imageAlt="PLACEHOLDER — two colleagues working together at a laptop"
        title="Communities lead the work. Partners make it possible."
        lead="There is more than one useful way to support FARI. Whichever route you take, what you contribute goes into programmes designed with the people they serve."
      />

      {/* ------------------------------ ROUTES ------------------------------ */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="grid grid-2">
            {involvement.map((item, i) => (
              <Reveal key={item.title} delay={i % 2}>
                <article className="card card--link">
                  <span className="card__icon">
                    <Icon name={item.icon} size={26} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="mt-4">
                    <Btn href={item.href} variant="outline" small arrow>
                      {item.action}
                    </Btn>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- VOLUNTEERING -------------------------- */}
      <section className="section">
        <div className="wrap">
          <div className="split split--wide-left">
            <Reveal>
              <div>
                <span className="eyebrow">Volunteering</span>
                <h2>Where volunteers make the most difference</h2>
                <p className="lead mt-2">
                  We are a young organisation, which means volunteer contributions have unusually
                  direct effect. These are the areas where we most need support right now.
                </p>
                <ul className="ticks">
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Community mobilisation.</strong> Supporting assessment and engagement
                      work with community committees.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Monitoring and data.</strong> Helping collect, clean and analyse the
                      programme data our reporting depends on.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Training delivery.</strong> Vocational, digital and enterprise skills
                      for our livelihoods programming.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Communications and design.</strong> Reporting, storytelling and
                      materials for community use.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Professional services.</strong> Legal, financial, safeguarding and
                      governance expertise, offered remotely.
                    </span>
                  </li>
                </ul>

                <div className="mt-5">
                  <Btn href="/contact?enquiry=volunteer" arrow>
                    Register your interest
                  </Btn>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div style={{ position: "relative" }}>
                <Media src="/assets/involved-volunteer.jpg" alt="PLACEHOLDER — volunteers at a community outreach" variant={5} ratio="4x3" />
                <div className="chip">
                  <span className="chip__ic">
                    <Icon name="community" size={22} />
                  </span>
                  <span>
                    <strong>In Nigeria or remote</strong>
                    <small>Both are genuinely useful to us</small>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- PARTNERSHIPS -------------------------- */}
      <section className="section section--brand">
        <div className="wrap">
          <Reveal>
            <SectionHead
              light
              eyebrow="Partnerships"
              title="Who we work with"
              lead="Our model depends on complementing what already exists in a community rather than displacing it. These are the partnerships we are actively seeking."
            />
          </Reveal>

          <div className="grid grid-2">
            <Reveal>
              <article className="stat" style={{ height: "100%" }}>
                <h3 style={{ color: "#fff", fontSize: "1.2rem" }}>Community-based organisations</h3>
                <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.7rem" }}>
                  Local organisations hold relationships, trust and context an incoming organisation
                  cannot replicate. We look for joint delivery arrangements where that expertise
                  leads and FARI provides resourcing and technical support.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="stat" style={{ height: "100%" }}>
                <h3 style={{ color: "#fff", fontSize: "1.2rem" }}>Government agencies</h3>
                <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.7rem" }}>
                  Coordination with state and local government keeps our work aligned to existing
                  plans, avoids duplication, and gives programmes a route to continue through public
                  systems after we hand over.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="stat" style={{ height: "100%" }}>
                <h3 style={{ color: "#fff", fontSize: "1.2rem" }}>Foundations and institutional donors</h3>
                <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.7rem" }}>
                  We welcome funders who want defined outcomes, honest reporting against them, and a
                  clear account of what did not work alongside what did.
                </p>
              </article>
            </Reveal>
            <Reveal delay={3}>
              <article className="stat" style={{ height: "100%" }}>
                <h3 style={{ color: "#fff", fontSize: "1.2rem" }}>Companies</h3>
                <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.7rem" }}>
                  Substantive community investment, employee skills contribution, and in-kind
                  support that is matched to genuine need rather than to available stock.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="center mt-5">
              <Btn href={`mailto:${site.contact.partnerships}`} variant="light" arrow>
                {site.contact.partnerships}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- CTA -------------------------------- */}
      <section className="cta">
        <div className="wrap center">
          <Reveal>
            <h2>Every route starts with a conversation</h2>
          </Reveal>
          <Reveal delay={1}>
            <p>
              Tell us what you have in mind — time, skills, funding or a joint programme — and our
              team will come back to you.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="cta__actions">
              <Btn href="/contact" variant="light" arrow>
                Contact us
              </Btn>
              <Btn href="/donate" variant="ghost">
                Give instead
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
