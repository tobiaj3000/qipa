"use client";

import { FormEvent, useState } from "react";

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "role", label: "Role", type: "text", autoComplete: "organization-title" },
  {
    id: "property",
    label: "Business or portfolio",
    type: "text",
    autoComplete: "organization",
  },
  { id: "email", label: "Work email", type: "email", autoComplete: "email" },
];

export type ContactIntent = "demo" | "start" | "trial" | "sales";

const copy: Record<
  ContactIntent,
  { label: string; success: string; submit: string }
> = {
  demo: {
    label: "Demo requested",
    success:
      "A member of the Qipa team will write back within one working day to set a personalised demo around your operation.",
    submit: "Book a Demo",
  },
  start: {
    label: "Request received",
    success:
      "A member of the Qipa team will write back within one working day with next steps to connect your channel manager and start free.",
    submit: "Start Free",
  },
  trial: {
    label: "Trial requested",
    success:
      "A member of the Qipa team will write back within one working day to start your Pro trial. First month is free.",
    submit: "Start Free Trial",
  },
  sales: {
    label: "Sales request received",
    success:
      "A member of the Qipa team will write back within one working day to talk through Enterprise for your portfolio.",
    submit: "Contact Sales",
  },
};

export function ContactForm({
  intent = "demo",
}: {
  intent?: ContactIntent;
}) {
  const [sent, setSent] = useState(false);
  const text = copy[intent];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="panel p-8 sm:p-10">
        <p className="label">{text.label}</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-paper">
          We have it.
        </h2>
        <p className="mt-4 max-w-md text-[1.05rem] leading-7 text-quiet">
          {text.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel p-6 sm:p-8">
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
              className="h-12 w-full rounded-xl border border-line bg-navy/60 px-4 text-paper outline-none transition focus:border-signal/60"
            />
          </label>
        ))}
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-quiet">
          Tell us about your operation
        </span>
        <textarea
          name="note"
          rows={5}
          className="w-full resize-y rounded-xl border border-line bg-navy/60 px-4 py-3 text-paper outline-none transition focus:border-signal/60"
          placeholder="Which channel manager you use today (Guesty, Hostaway, Lodgify…), portfolio size, and what you want to try first."
        />
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary h-12 px-7 text-sm">
          {text.submit}
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
