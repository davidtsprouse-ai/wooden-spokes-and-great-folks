"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const vehicle = String(data.get("vehicle") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Project inquiry from ${name || "website visitor"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Vehicle / Project: ${vehicle}`,
        "",
        message,
      ].join("\n")
    );

    setStatus("ready");
    window.location.href = `mailto:hello@woodenspokes.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-sm border border-wood-light/50 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="focus-ring mt-1.5 w-full rounded-sm border border-sand bg-cream px-3 py-2.5 text-ink placeholder:text-ink-muted/50"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="focus-ring mt-1.5 w-full rounded-sm border border-sand bg-cream px-3 py-2.5 text-ink placeholder:text-ink-muted/50"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="focus-ring mt-1.5 w-full rounded-sm border border-sand bg-cream px-3 py-2.5 text-ink placeholder:text-ink-muted/50"
            placeholder="(optional)"
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Vehicle / Project
          <input
            name="vehicle"
            type="text"
            className="focus-ring mt-1.5 w-full rounded-sm border border-sand bg-cream px-3 py-2.5 text-ink placeholder:text-ink-muted/50"
            placeholder="e.g. Concord coach, farm wagon…"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        Tell us about your project
        <textarea
          name="message"
          required
          rows={5}
          className="focus-ring mt-1.5 w-full rounded-sm border border-sand bg-cream px-3 py-2.5 text-ink placeholder:text-ink-muted/50"
          placeholder="Condition, goals, timeline, or questions…"
        />
      </label>
      <button
        type="submit"
        className="focus-ring w-full rounded-sm bg-burgundy px-5 py-3 text-sm font-semibold text-white transition hover:bg-burgundy-dark sm:w-auto"
      >
        Send Inquiry
      </button>
      {status === "ready" && (
        <p className="text-sm text-forest" role="status">
          Opening your email app… If nothing happens, write us at{" "}
          <a
            className="underline underline-offset-2"
            href="mailto:hello@woodenspokes.com"
          >
            hello@woodenspokes.com
          </a>
          .
        </p>
      )}
      <p className="text-xs text-ink-muted">
        This form opens your email client with a pre-filled message. No data is
        stored on our servers yet.
      </p>
    </form>
  );
}
