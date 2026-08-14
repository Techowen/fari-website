"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

/**
 * Newsletter signup.
 *
 * This currently validates and confirms in the browser only — it does not send
 * anywhere. Replace the marked block with a request to your provider
 * (Mailchimp, Brevo, a Next.js route handler, …) when you have one.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);

    // ---- Replace from here ----
    await new Promise((r) => setTimeout(r, 500));
    // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });
    // ---- to here ----

    setBusy(false);
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className="form-msg" style={{ background: "rgba(255,255,255,.12)", color: "#fff", marginTop: "0.9rem" }}>
        Thank you — you are on the list.
      </p>
    );
  }

  return (
    <form className="newsletter" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" aria-label="Subscribe" disabled={busy}>
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
