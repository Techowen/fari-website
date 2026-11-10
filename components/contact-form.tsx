"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Check } from "./icons";

const enquiryTypes = [
  { value: "general", label: "General enquiry" },
  { value: "volunteer", label: "Volunteering" },
  { value: "partnership", label: "Partnership or collaboration" },
  { value: "donation", label: "Giving and donations" },
  { value: "careers", label: "Careers" },
  { value: "media", label: "Media and press" },
  { value: "safeguarding", label: "Safeguarding or complaint" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  enquiry: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("enquiry") ?? "general";
  const initial = enquiryTypes.some((t) => t.value === preset) ? preset : "general";

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    enquiry: initial,
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (values: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      errs.name = "Please enter your full name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!emailRegex.test(values.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. name@example.com).";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      errs.message = "Please write a message with at least 10 characters.";
    }
    if (!values.consent) {
      errs.consent = "Please confirm that you agree to be contacted regarding this enquiry.";
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(data));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      organisation: true,
      enquiry: true,
      message: true,
      consent: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("sending");

    // Simulate reliable API submission with smooth transition
    await new Promise((r) => setTimeout(r, 650));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="donate-box" style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "var(--primary-100)",
            color: "var(--primary-800)",
            display: "grid",
            placeItems: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <Check size={32} />
        </div>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "var(--ink-900)" }}>
          Message Received Successfully
        </h3>
        <p className="lead" style={{ fontSize: "1.05rem", maxWidth: "420px", margin: "0 auto" }}>
          Thank you, <strong>{data.name}</strong>. Your enquiry regarding{" "}
          <strong>{enquiryTypes.find((t) => t.value === data.enquiry)?.label}</strong> has been logged.
        </p>
        <p className="muted mt-3" style={{ fontSize: "0.925rem" }}>
          A designated member of our team will review your message and reply to <strong>{data.email}</strong> within 3 working days.
        </p>
        <div className="mt-4">
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => {
              setData({
                name: "",
                email: "",
                phone: "",
                organisation: "",
                enquiry: "general",
                message: "",
                consent: false,
              });
              setTouched({});
              setErrors({});
              setStatus("idle");
            }}
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="donate-box" onSubmit={onSubmit} noValidate>
      <div className="form-grid form-grid--2">
        <div className="field">
          <label htmlFor="name">
            Full name <span style={{ color: "var(--accent-500)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Amina Bello"
            value={data.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            style={touched.name && errors.name ? { borderColor: "var(--accent-600)" } : {}}
          />
          {touched.name && errors.name ? (
            <span style={{ color: "var(--accent-600)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
              {errors.name}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="email">
            Email address <span style={{ color: "var(--accent-500)" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="e.g. amina@example.com"
            value={data.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            style={touched.email && errors.email ? { borderColor: "var(--accent-600)" } : {}}
          />
          {touched.email && errors.email ? (
            <span style={{ color: "var(--accent-600)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
              {errors.email}
            </span>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="phone">
            Phone number <span className="muted" style={{ fontWeight: 500 }}>(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. +234 800 000 0000"
            value={data.phone}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="organisation">
            Organisation <span className="muted" style={{ fontWeight: 500 }}>(optional)</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Community CBO or Foundation"
            value={data.organisation}
            onChange={handleChange}
          />
        </div>

        <div className="field field--full">
          <label htmlFor="enquiry">What is your enquiry about?</label>
          <select id="enquiry" name="enquiry" value={data.enquiry} onChange={handleChange}>
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="message">
            Your message <span style={{ color: "var(--accent-500)" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Please give us enough detail to respond helpfully..."
            value={data.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
            style={touched.message && errors.message ? { borderColor: "var(--accent-600)" } : {}}
          />
          {touched.message && errors.message ? (
            <span style={{ color: "var(--accent-600)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
              {errors.message}
            </span>
          ) : null}
        </div>

        <div className="field field--full">
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.625rem",
              fontWeight: 400,
              fontSize: "0.875rem",
              color: "var(--ink-700)",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              name="consent"
              checked={data.consent}
              onChange={handleChange}
              style={{ width: "18px", height: "18px", marginTop: "2px", flexShrink: 0 }}
            />
            <span>
              I agree to FARI processing this information to respond to my enquiry in accordance with data protection standards.
            </span>
          </label>
          {touched.consent && errors.consent ? (
            <span style={{ color: "var(--accent-600)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
              {errors.consent}
            </span>
          ) : null}
        </div>
      </div>

      <div style={{ marginTop: "1.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <button
          type="submit"
          className="btn"
          disabled={status === "sending"}
          style={{ opacity: status === "sending" ? 0.75 : 1 }}
        >
          {status === "sending" ? "Sending message..." : "Send Message"}
          <ArrowRight size={17} />
        </button>
        <span className="muted" style={{ fontSize: "0.825rem" }}>
          We respond within 3 working days
        </span>
      </div>
    </form>
  );
}
