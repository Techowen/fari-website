"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";
import { donationTiers } from "@/lib/content";

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

/**
 * Donation amount picker.
 *
 * This collects an amount and frequency but does NOT take payment. To go live,
 * connect the submit handler to a Nigerian payment provider — Paystack and
 * Flutterwave both support cards, bank transfer and USSD. See the block marked
 * below.
 */
export default function DonateWidget() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selected, setSelected] = useState<number>(donationTiers[1].amount);
  const [custom, setCustom] = useState("");

  const amount = custom ? Number(custom.replace(/[^\d]/g, "")) : selected;
  const valid = amount > 0;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ---- Connect your payment provider here ----
    // Example (Paystack inline):
    //   const handler = window.PaystackPop.setup({
    //     key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
    //     email, amount: amount * 100, currency: "NGN",
    //     plan: frequency === "monthly" ? "YOUR_PLAN_CODE" : undefined,
    //   });
    //   handler.openIframe();
    // --------------------------------------------

    alert(
      `Payment is not connected yet.\n\nSelected: ${naira.format(amount)} ${
        frequency === "monthly" ? "per month" : "one-off"
      }\n\nConnect Paystack or Flutterwave in components/donate-widget.tsx to take real donations.`,
    );
  }

  return (
    <form className="donate-box" onSubmit={onSubmit}>
      <div className="toggle" role="group" aria-label="Donation frequency">
        <button
          type="button"
          aria-pressed={frequency === "once"}
          onClick={() => setFrequency("once")}
        >
          Give once
        </button>
        <button
          type="button"
          aria-pressed={frequency === "monthly"}
          onClick={() => setFrequency("monthly")}
        >
          Give monthly
        </button>
      </div>

      <fieldset style={{ border: 0 }}>
        <legend className="sr-only">Choose an amount</legend>
        <div className="amounts">
          {donationTiers.map((tier) => (
            <button
              key={tier.amount}
              type="button"
              className="amount"
              aria-pressed={!custom && selected === tier.amount}
              onClick={() => {
                setSelected(tier.amount);
                setCustom("");
              }}
            >
              {naira.format(tier.amount)}
              <small>{tier.label}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="field mt-3">
        <label htmlFor="custom-amount">Or enter your own amount (₦)</label>
        <input
          id="custom-amount"
          type="text"
          inputMode="numeric"
          placeholder="e.g. 25000"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />
      </div>

      <div className="field mt-3">
        <label htmlFor="donor-email">Email address (for your receipt)</label>
        <input id="donor-email" type="email" required autoComplete="email" />
      </div>

      <div className="mt-4">
        <button className="btn btn--block" type="submit" disabled={!valid}>
          {valid
            ? `Give ${naira.format(amount)}${frequency === "monthly" ? " a month" : ""}`
            : "Choose an amount"}
          <ArrowRight className="arrow" size={18} />
        </button>
      </div>

      <p className="form-note mt-3">
        Restricted giving to a particular focus area is welcome — get in touch and we will confirm
        what is currently being funded.
      </p>
    </form>
  );
}
