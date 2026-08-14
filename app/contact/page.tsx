import { Suspense } from "react";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { EditorNote, PageHero, SectionHead } from "@/components/ui";
import ContactForm from "@/components/contact-form";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the FARI team about volunteering, partnerships, giving, careers or media enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        trail={[{ label: "Contact" }]}
        eyebrow="Contact"
        image="/assets/banners/page-contact.jpg"
        imageAlt="PLACEHOLDER — a team member at work in the office"
        title="Talk to our team"
        lead="Whether you want to volunteer, propose a partnership, ask about our programmes or raise a concern, we would like to hear from you."
      />

      {/* ----------------------------- TILES ------------------------------- */}
      <section className="section section--tight section--paper">
        <div className="wrap">
          <div className="grid grid-4">
            <Reveal>
              <div className="contact-tile">
                <span className="contact-tile__ic">
                  <MailIcon size={22} />
                </span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                    <br />
                    <a href={`mailto:${site.contact.partnerships}`}>{site.contact.partnerships}</a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="contact-tile">
                <span className="contact-tile__ic">
                  <PhoneIcon size={22} />
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="contact-tile">
                <span className="contact-tile__ic">
                  <PinIcon size={22} />
                </span>
                <div>
                  <h4>Office</h4>
                  <p>
                    {site.contact.address.line1}
                    <br />
                    {site.contact.address.line2}
                    <br />
                    {site.contact.address.country}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="contact-tile">
                <span className="contact-tile__ic">
                  <ClockIcon size={22} />
                </span>
                <div>
                  <h4>Hours</h4>
                  <p>{site.contact.hours}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------ FORM -------------------------------- */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <Reveal>
              <div>
                <span className="eyebrow">Send a message</span>
                <h2>Tell us what you have in mind</h2>
                <p className="lead mt-2">
                  Give us enough detail to respond usefully — the community or area you are asking
                  about, the kind of support you are offering, or the question you need answered. We
                  aim to reply within three working days.
                </p>

                <div className="mt-5">
                  <h4 style={{ marginBottom: "0.6rem" }}>Raising a safeguarding concern</h4>
                  <p className="muted" style={{ fontSize: "0.95rem" }}>
                    If your message concerns the conduct of FARI staff, volunteers or partners,
                    select <strong>Safeguarding or complaint</strong> in the form. Reports are
                    treated confidentially and escalated to our board, not to programme management.
                  </p>
                </div>

                <div className="mt-4">
                  <EditorNote>
                    The form validates in the browser and confirms on screen, but does not deliver
                    yet. Wire it up in <code>components/contact-form.tsx</code> — the block to
                    replace is marked in the file — then delete this note from{" "}
                    <code>app/contact/page.tsx</code>.
                  </EditorNote>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <Suspense fallback={<div className="donate-box">Loading form…</div>}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------- FAQ -------------------------------- */}
      <section className="section section--paper">
        <div className="wrap wrap--narrow">
          <Reveal>
            <SectionHead center eyebrow="Questions" title="Frequently asked" />
          </Reveal>

          <Reveal delay={1}>
            <div>
              {faqs.map((faq) => (
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
