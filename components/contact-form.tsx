"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "./icons";

const enquiryTypes = [
  { value: "general", label: "General enquiry" },
  { value: "volunteer", label: "Volunteering" },
  { value: "partnership", label: "Partnership or collaboration" },
  { value: "donation", label: "Giving and donations" },
  { value: "careers", label: "Careers" },
  { value: "media", label: "Media and press" },
  { value: "safeguarding", label: "Safeguarding or complaint" },
];

/**
 * Enquiry form.
 *
 * Validates in the browser and shows a confirmation — it does not send anywhere
 * yet. Replace the marked block with a POST to your own route handler or form
 * service, then remove the note beneath the form on the contact page.
 */
export default function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("enquiry") ?? "general";
  const initial = enquiryTypes.some((t) => t.value === preset) ? preset : "general";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      // ---- Replace from here ----
      await new Promise((r) => setTimeout(r, 700));
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   body: new FormData(e.currentTarget),
      // });
      // if (!res.ok) throw new Error("Request failed");
      // ---- to here ----

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="donate-box">
        <p className="form-msg">Thank you — your message has been received.</p>
        <p className="mt-3 muted">
          A member of the FARI team will respond within three working days. If your enquiry is
          urgent, please call us on the number listed on this page.
        </p>
      </div>
    );
  }

  return (
    <form className="donate-box" onSubmit={onSubmit} noValidate={false}>
      <div className="form-grid form-grid--2">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>

        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>

        <div className="field">
          <label htmlFor="phone">
            Phone <span className="muted" style={{ fontWeight: 500 }}>(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>

        <div className="field">
          <label htmlFor="organisation">
            Organisation <span className="muted" style={{ fontWeight: 500 }}>(optional)</span>
          </label>
          <input id="organisation" name="organisation" type="text" autoComplete="organization" />
        </div>

        <div className="field field--full">
          <label htmlFor="enquiry">What is your enquiry about?</label>
          <select id="enquiry" name="enquiry" defaultValue={initial}>
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required minLength={10} />
        </div>
      </div>

      {status === "error" ? (
        <p className="form-msg form-msg--error mt-3">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
      ) : null}

      <div className="mt-4" style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowRight className="arrow" size={18} />
        </button>
        <p className="form-note" style={{ flex: 1, minWidth: 220 }}>
          We use your details only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}
