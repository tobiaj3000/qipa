"use client";

import { FormEvent, useState } from "react";
import { track } from "@/lib/track";

const fields = [
  { id: "name", label: "Full name", type: "text", autoComplete: "name" },
  {
    id: "business",
    label: "Business name",
    type: "text",
    autoComplete: "organization",
  },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "phone", label: "Phone number", type: "tel", autoComplete: "tel" },
  {
    id: "properties",
    label: "Number of properties",
    type: "number",
    autoComplete: "off",
  },
  {
    id: "pms",
    label: "Current PMS / channel manager",
    type: "text",
    autoComplete: "off",
  },
] as const;

export function EmailOnboardingForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track("onboarding_submit", { route: "email" });
    setSent(true);
  }

  if (sent) {
    return (
      <div className="panel p-8 sm:p-10">
        <p className="label">Request received</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-paper">
          We have it.
        </h2>
        <p className="mt-4 max-w-md text-[1.05rem] leading-7 text-quiet">
          We&apos;ll get you set up within 2–24 hours and write back with next
          steps.
        </p>
      </div>
    );
  }

  return (
    <form id="email" onSubmit={onSubmit} className="panel p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} className="block">
            <span className="mb-2 block text-sm text-quiet">{field.label}</span>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              required
              min={field.type === "number" ? 1 : undefined}
              className="h-12 w-full rounded-xl border border-line bg-navy/60 px-4 text-paper outline-none transition focus:border-signal/60"
            />
          </label>
        ))}
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-quiet">
          Optional message
        </span>
        <textarea
          name="note"
          rows={4}
          className="w-full resize-y rounded-xl border border-line bg-navy/60 px-4 py-3 text-paper outline-none transition focus:border-signal/60"
          placeholder="Anything we should know before we set you up."
        />
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary h-12 px-7 text-sm">
          Continue with Email
        </button>
        <p className="text-sm text-quiet">
          Or write directly to{" "}
          <a className="text-mist hover:text-paper" href="mailto:hello@qipa.ai">
            hello@qipa.ai
          </a>
        </p>
      </div>
    </form>
  );
}
