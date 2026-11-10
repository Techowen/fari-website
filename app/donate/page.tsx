import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { Btn, PageHero, SectionHead } from "@/components/ui";
import DonateWidget from "@/components/donate-widget";
import { Check, Icon } from "@/components/icons";
import { faqs, focusAreas } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support FARI's community-led programmes across education, humanitarian response, climate resilience, livelihoods and protection in Nigeria.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Donate" }]}
        eyebrow="Support our work"
        image="/assets/banners/page-donate.jpg"
        imageAlt="PLACEHOLDER — a health worker at a community facility"
        title="Give to programmes designed with the people they serve"
        lead="Your donation funds school access, emergency relief, start-up capital and the community structures that keep programmes running after we hand over."
      />

      {/* --------------------------- WIDGET + WHY --------------------------- */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <Reveal>
              <div>
                <span className="eyebrow">Why give to FARI</span>
                <h2>Where your donation goes</h2>
                <p className="lead mt-2">
                  FARI was established in {site.founded}, which means every naira given now shapes
                  what our first programme cycle is able to deliver. We commit to reporting exactly
                  what that funding achieved.
                </p>

                <ul className="ticks">
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Straight into programmes.</strong> The large majority of every
                      donation funds direct delivery, with the remainder covering the monitoring and
                      safeguarding systems responsible delivery requires.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Targeted deliberately.</strong> Funds reach women, youth, children,
                      persons with disabilities and displaced persons by design.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Reported honestly.</strong> We publish what we spent and what it
                      achieved — including where results fell short of what we planned.
                    </span>
                  </li>
                  <li>
                    <Check size={19} />
                    <span>
                      <strong>Built to continue.</strong> Assets and skills stay with communities
                      when our direct involvement ends.
                    </span>
                  </li>
                </ul>


              </div>
            </Reveal>

            <Reveal delay={1}>
              <DonateWidget />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------- WHAT IT FUNDS -------------------------- */}
      <section className="section section--brand">
        <div className="wrap">
          <Reveal>
            <SectionHead
              center
              light
              eyebrow="What it funds"
              title="Five areas, one continuous piece of work"
              lead="Unrestricted giving lets us move funds to wherever need is sharpest. Restricted giving to a single focus area is also welcome."
            />
          </Reveal>

          <div className="grid grid-3">
            {focusAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i % 3}>
                <article className="stat" style={{ height: "100%" }}>
                  <span style={{ color: "var(--accent-400)", display: "block", marginBottom: "0.75rem" }}>
                    <Icon name={area.icon} size={26} />
                  </span>
                  <h3 style={{ color: "#fff", fontSize: "1.2rem" }}>{area.title}</h3>
                  <p className="stat__note" style={{ fontSize: "0.95rem", marginTop: "0.6rem" }}>
                    {area.short}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- OTHER WAYS ---------------------------- */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Other ways to give"
              title="Bank transfer, in-kind and institutional giving"
            />
          </Reveal>

          <div className="grid grid-3">
            <Reveal>
              <article className="card">
                <h3>Bank transfer</h3>
                <p className="mt-2">
                  For larger gifts, or if you prefer not to give online, contact us and we will
                  provide FARI&rsquo;s account details together with a confirmation of receipt.
                </p>
                <div className="mt-3">
                  <Btn href={`mailto:${site.contact.email}`} variant="outline" small>
                    Request details
                  </Btn>
                </div>
              </article>
            </Reveal>

            <Reveal delay={1}>
              <article className="card">
                <h3>In-kind donations</h3>
                <p className="mt-2">
                  We accept in-kind support where it matches genuine need. Because poorly matched
                  goods can cost more to move than they are worth, please speak to us first.
                </p>
                <div className="mt-3">
                  <Btn href="/contact?enquiry=donation" variant="outline" small>
                    Talk to us
                  </Btn>
                </div>
              </article>
            </Reveal>

            <Reveal delay={2}>
              <article className="card">
                <h3>Institutional funding</h3>
                <p className="mt-2">
                  Foundations, donors and companies looking to fund a defined programme or community
                  can work with us on scope, budget and reporting from the outset.
                </p>
                <div className="mt-3">
                  <Btn href={`mailto:${site.contact.partnerships}`} variant="outline" small>
                    Partnerships team
                  </Btn>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------- FAQ -------------------------------- */}
      <section className="section section--paper">
        <div className="wrap wrap--narrow">
          <Reveal>
            <SectionHead center eyebrow="Questions" title="Giving to FARI" />
          </Reveal>
          <Reveal delay={1}>
            <div>
              {faqs.slice(0, 4).map((faq) => (
                <details className="faq" key={faq.q}>
                  <summary>{faq.q}</summary>
                  <div className="faq__body">{faq.a}</div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
