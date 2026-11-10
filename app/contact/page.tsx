import { Suspense } from "react";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { PageHero, SectionHead } from "@/components/ui";
import ContactForm from "@/components/contact-form";
import { ArrowRight, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
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
      <div style={{ paddingBottom: "20px" }}>
        <PageHero
          trail={[{ label: "Contact" }]}
          eyebrow="Contact FARI"
          image="/assets/hero/hero-community.jpg"
          imageAlt="FARI team engaging with community members in Nigeria"
          title="Talk to our team"
          lead="Whether you want to volunteer, propose a strategic partnership, enquire about our programmes or raise a confidential concern, we want to hear from you."
        />
      </div>

      {/* ----------------------------- TILES ------------------------------- */}
      <section className="section section--tight section--paper">
        <div className="wrap">
          <div className="grid grid-4">
            <Reveal>
              <div className="contact-tile">
                <div className="contact-tile__top">
                  <span className="contact-tile__ic">
                    <MailIcon size={24} />
                  </span>
                  <span className="contact-tile__tag">Official Email</span>
                </div>
                <h4>Email Enquiries</h4>
                <p>
                  General: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                  <br />
                  Partnerships: <a href={`mailto:${site.contact.partnerships}`}>{site.contact.partnerships}</a>
                </p>
                <a href={`mailto:${site.contact.email}`} className="contact-tile__action">
                  Send email <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="contact-tile">
                <div className="contact-tile__top">
                  <span className="contact-tile__ic">
                    <PhoneIcon size={24} />
                  </span>
                  <span className="contact-tile__tag">Direct Line</span>
                </div>
                <h4>Telephone Support</h4>
                <p>
                  Office: <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
                  <br />
                  <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>
                    Monday – Friday, 9am – 5pm WAT
                  </span>
                </p>
                <a href={`tel:${site.contact.phoneHref}`} className="contact-tile__action">
                  Call office <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="contact-tile">
                <div className="contact-tile__top">
                  <span className="contact-tile__ic">
                    <PinIcon size={24} />
                  </span>
                  <span className="contact-tile__tag">Headquarters</span>
                </div>
                <h4>Registered Office</h4>
                <p>
                  {site.contact.address.line1}
                  <br />
                  {site.contact.address.line2}
                  <br />
                  {site.contact.address.country}
                </p>
                <span className="contact-tile__action" style={{ color: "var(--primary-700)" }}>
                  Federal Capital Territory
                </span>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="contact-tile">
                <div className="contact-tile__top">
                  <span className="contact-tile__ic">
                    <ClockIcon size={24} />
                  </span>
                  <span className="contact-tile__tag">Working Hours</span>
                </div>
                <h4>Operating Hours</h4>
                <p>
                  {site.contact.hours}
                  <br />
                  <span style={{ fontSize: "0.85rem", color: "var(--ink-500)" }}>
                    Closed on official public holidays
                  </span>
                </p>
                <span className="contact-tile__action" style={{ color: "var(--primary-700)" }}>
                  West Africa Time (WAT)
                </span>
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
              <div className="sticky-col">
                <span className="eyebrow">Send a message</span>
                <h2>Tell us what you have in mind</h2>
                <p className="lead mt-2">
                  Give us enough detail to respond helpfully. Whether you are offering voluntary time,
                  proposing an institutional grant, or seeking programme collaboration, we aim to review and reply within three working days.
                </p>

                <div className="card mt-4" style={{ background: "var(--canvas-alt)" }}>
                  <h4 style={{ marginBottom: "0.5rem", color: "var(--primary-900)" }}>
                    Safeguarding &amp; Confidential Reports
                  </h4>
                  <p className="muted" style={{ fontSize: "0.925rem", lineHeight: 1.6 }}>
                    If your message concerns the conduct of FARI personnel, volunteers, or partners,
                    select <strong>Safeguarding or complaint</strong> in the form. Such reports are treated with strict confidentiality and escalated directly to the board oversight committee.
                  </p>
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
            <SectionHead
              center
              eyebrow="Quick Answers"
              title="Frequently Asked Questions"
              lead="Common enquiries regarding our operations, governance, and partnerships."
            />
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
