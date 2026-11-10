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
      <section className="section section--paper">
        <div className="wrap">
          <Reveal>
            <SectionHead
              center
              eyebrow="Strategic Partnerships"
              title="Who we work alongside"
              lead="Our model depends on reinforcing what already exists in a community rather than displacing it. These are the four core partnerships we actively seek."
            />
          </Reveal>

          <div className="grid grid-2">
            <Reveal>
              <article className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <span className="card__icon" style={{ margin: 0 }}>
                    <Icon name="community" size={24} />
                  </span>
                  <span className="tag">Grassroots Delivery</span>
                </div>
                <h3>Community-Based Organisations</h3>
                <p className="mt-2">
                  Local grassroots organisations hold relationships, trust, and cultural context an incoming group cannot replicate. We enter into joint delivery arrangements where community expertise leads and FARI provides technical, operational, and financial resourcing.
                </p>
              </article>
            </Reveal>

            <Reveal delay={1}>
              <article className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <span className="card__icon" style={{ margin: 0 }}>
                    <Icon name="scales" size={24} />
                  </span>
                  <span className="tag">Public Systems</span>
                </div>
                <h3>Government Agencies</h3>
                <p className="mt-2">
                  Coordination with federal, state, and local government keeps our programmes aligned with official development plans, prevents duplication, and ensures public facilities have institutional pathways to continue long after handover.
                </p>
              </article>
            </Reveal>

            <Reveal delay={2}>
              <article className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <span className="card__icon" style={{ margin: 0 }}>
                    <Icon name="growth" size={24} />
                  </span>
                  <span className="tag">Institutional Giving</span>
                </div>
                <h3>Foundations &amp; Institutional Donors</h3>
                <p className="mt-2">
                  We partner with philanthropic foundations seeking measurable humanitarian impact, transparent tracking against milestones, and unvarnished reporting of challenges and programmatic lessons learned.
                </p>
              </article>
            </Reveal>

            <Reveal delay={3}>
              <article className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                  <span className="card__icon" style={{ margin: 0 }}>
                    <Icon name="handshake" size={24} />
                  </span>
                  <span className="tag">Corporate CSR</span>
                </div>
                <h3>Private Sector &amp; Industry Partners</h3>
                <p className="mt-2">
                  We develop high-impact corporate social investment partnerships, connecting employee pro-bono expertise, logistics networks, and funding directly with communities facing severe socio-economic shocks.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="center mt-5">
              <Btn href={`mailto:${site.contact.partnerships}`} variant="outline" arrow>
                Discuss a partnership ({site.contact.partnerships})
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
