"use client";

import { useEffect, useState } from "react";
import { EmailOnboardingForm } from "@/components/EmailOnboardingForm";
import { getWhatsAppHref } from "@/lib/whatsapp";
import { track } from "@/lib/track";

const switchSteps = [
  "Tell us what you currently use.",
  "We migrate your business.",
  "We verify everything.",
  "You approve the switch.",
  "Start using Qipa.",
];

export function GetStartedOnboarding() {
  const [showEmail, setShowEmail] = useState(false);
  const whatsapp = getWhatsAppHref();

  useEffect(() => {
    if (!showEmail) return;
    document.getElementById("email")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [showEmail]);

  function openWhatsApp() {
    track("onboarding_whatsapp");
  }

  function chooseEmail() {
    track("onboarding_email");
    setShowEmail(true);
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="relative flex flex-col rounded-[1.25rem] border border-signal/45 bg-gradient-to-b from-navy-3/90 to-navy-2 p-7 shadow-[0_0_0_1px_rgba(79,124,255,0.18),0_24px_80px_-32px_rgba(79,124,255,0.55)] sm:p-8">
          <p className="absolute right-6 top-6 rounded-full border border-signal/40 bg-signal/15 px-3 py-1 font-display text-[0.7rem] tracking-[0.14em] text-mist uppercase">
            Recommended
          </p>
          <p className="label">WhatsApp</p>
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-paper">
            Continue with WhatsApp
          </h2>
          <p className="mt-3 text-[1.02rem] leading-7 text-quiet">
            Create your Qipa account in as little as 5 minutes.
          </p>
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openWhatsApp}
              className="btn-primary mt-8 h-12 px-7 text-sm"
            >
              Continue with WhatsApp
            </a>
          ) : (
            <a
              href="#email"
              onClick={chooseEmail}
              className="btn-primary mt-8 h-12 px-7 text-sm"
            >
              Continue with WhatsApp
            </a>
          )}
        </article>

        <article className="panel flex flex-col p-7 sm:p-8">
          <p className="label">Email</p>
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-paper">
            Continue with Email
          </h2>
          <p className="mt-3 text-[1.02rem] leading-7 text-quiet">
            We&apos;ll get you set up within 2–24 hours.
          </p>
          <button
            type="button"
            onClick={chooseEmail}
            className="btn-ghost mt-8 h-12 px-7 text-sm"
          >
            Continue with Email
          </button>
        </article>
      </div>

      {showEmail && <EmailOnboardingForm />}

      <div className="panel p-7 sm:p-8">
        <p className="label">Qipa Switch</p>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-paper">
          Already using another property management system?
        </h2>
        <p className="mt-3 max-w-2xl text-[1.05rem] leading-8 text-quiet">
          No problem. Qipa Switch handles the migration for you.
        </p>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {switchSteps.map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-line bg-navy/40 px-4 py-4"
            >
              <p className="font-display text-sm text-signal">{index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-paper">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
