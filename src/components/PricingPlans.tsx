"use client";

import { useEffect, useState } from "react";
import { TrackedLink } from "@/components/TrackedLink";
import {
  formatPropertyCount,
  PRO_MAX_PROPERTIES,
  PRO_MIN_PROPERTIES,
  proPrice,
} from "@/lib/pro-price";
import { track } from "@/lib/track";

const freeIncludes = [
  "Manage your first property for free",
  "Unlimited reservations",
  "Unlimited guests",
  "Calendar management",
  "Channel management",
  "AI Guest Concierge",
  "Guest messaging",
  "Basic automations",
  "Basic analytics",
  "Mobile access",
  "Community support",
];

const proIncludes = [
  "AI Operations Manager",
  "AI Revenue Intelligence",
  "Advanced automations",
  "Owner Portal",
  "Direct booking website",
  "Advanced analytics and reporting",
  "Team permissions",
  "API access",
  "Priority support",
  "Qipa Switch migration",
];

const enterpriseIncludes = [
  "Unlimited AI usage",
  "Dedicated customer success manager",
  "Multi-brand management",
  "Custom integrations",
  "Enterprise API",
  "Advanced security and SSO",
  "SLA and priority infrastructure",
  "Tailored onboarding",
  "Custom AI workflows",
  "White-label options",
];

function Check({ muted = false }: { muted?: boolean }) {
  return (
    <span
      className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
        muted ? "bg-mist/15 text-mist" : "bg-signal/20 text-signal"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
        <path
          d="M2.2 6.2 L4.6 8.6 L9.8 3.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function PricingPlans() {
  const [count, setCount] = useState(4);
  const quote = proPrice(count);

  useEffect(() => {
    track("pricing_view");
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      track("pricing_property_count", { properties: count });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [count]);

  function updateCount(value: number) {
    const next = Math.min(
      PRO_MAX_PROPERTIES,
      Math.max(PRO_MIN_PROPERTIES, Math.round(value) || PRO_MIN_PROPERTIES),
    );
    setCount(next);
  }

  return (
    <div className="grid items-stretch gap-4 lg:grid-cols-3">
      <article className="panel flex flex-col p-7 sm:p-8">
        <p className="label">Qipa Free</p>
        <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-paper">
          £0
          <span className="text-lg font-medium text-quiet">/month</span>
        </p>
        <p className="mt-3 text-[1.02rem] leading-7 text-quiet">
          Your first property is on us. Run the core platform on one active
          property.
        </p>
        <ul className="mt-8 space-y-3">
          {freeIncludes.map((item) => (
            <li key={item} className="flex gap-3 text-[0.95rem] leading-6 text-paper/90">
              <Check />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <TrackedLink
          href="/get-started"
          event="plan_start_free"
          className="btn-ghost mt-10 h-12 w-full px-7 text-sm"
        >
          Start Free
        </TrackedLink>
      </article>

      <article className="relative flex flex-col rounded-[1.25rem] border border-signal/45 bg-gradient-to-b from-navy-3/90 to-navy-2 p-7 shadow-[0_0_0_1px_rgba(79,124,255,0.18),0_24px_80px_-32px_rgba(79,124,255,0.55)] sm:p-8 lg:-translate-y-2">
        <p className="label">Qipa Pro</p>
        {quote.kind === "pro" ? (
          <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-paper">
            £{quote.monthly}
            <span className="text-lg font-medium text-quiet">/month</span>
          </p>
        ) : (
          <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-paper">
            Custom
          </p>
        )}
        <p className="mt-3 text-[1.02rem] leading-7 text-quiet">
          From £49/month. One price. Everything included. Your subscription
          simply scales with your portfolio.
        </p>
        <div className="mt-8 rounded-xl border border-line bg-navy/40 p-4">
          <div className="flex items-end justify-between gap-3">
            <label htmlFor="property-count" className="font-display text-sm text-paper">
              Active properties
            </label>
            <input
              id="property-count"
              type="number"
              min={PRO_MIN_PROPERTIES}
              max={PRO_MAX_PROPERTIES}
              value={count}
              onChange={(e) => updateCount(Number(e.target.value))}
              className="h-10 w-20 rounded-lg border border-line bg-navy/60 px-2 text-center font-display text-paper outline-none focus:border-signal/60"
            />
          </div>
          <input
            type="range"
            min={PRO_MIN_PROPERTIES}
            max={PRO_MAX_PROPERTIES}
            value={count}
            onChange={(e) => updateCount(Number(e.target.value))}
            className="price-slider mt-4"
            aria-label="Active properties"
          />
          <p className="mt-3 text-sm leading-6 text-quiet">
            {formatPropertyCount(count)} active{" "}
            {count === 1 ? "property" : "properties"}
          </p>
        </div>
        <p className="mt-6 text-sm text-mist">Everything in Free, plus</p>
        <ul className="mt-4 space-y-3">
          {proIncludes.map((item) => (
            <li key={item} className="flex gap-3 text-[0.95rem] leading-6 text-paper/90">
              <Check />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {quote.kind === "pro" ? (
          <TrackedLink
            href="/get-started"
            event="plan_start_pro"
            eventProps={{ properties: count, monthly: quote.monthly }}
            className="btn-primary mt-10 h-12 w-full px-7 text-sm"
          >
            Get Started
          </TrackedLink>
        ) : (
          <TrackedLink
            href="/contact?intent=sales"
            event="plan_contact_enterprise"
            eventProps={{ properties: count }}
            className="btn-primary mt-10 h-12 w-full px-7 text-sm"
          >
            Contact Sales
          </TrackedLink>
        )}
      </article>

      <article className="panel flex flex-col p-7 sm:p-8">
        <p className="label">Enterprise</p>
        <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-paper">
          Custom
        </p>
        <p className="mt-3 text-[1.02rem] leading-7 text-quiet">
          For operators with 51 or more properties, multiple brands, or
          enterprise hospitality businesses.
        </p>
        <p className="mt-8 text-sm text-mist">Everything in Pro, plus</p>
        <ul className="mt-4 space-y-3">
          {enterpriseIncludes.map((item) => (
            <li key={item} className="flex gap-3 text-[0.95rem] leading-6 text-paper/90">
              <Check muted />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <TrackedLink
          href="/contact?intent=sales"
          event="plan_contact_enterprise"
          className="btn-ghost mt-10 h-12 w-full px-7 text-sm"
        >
          Contact Sales
        </TrackedLink>
      </article>
    </div>
  );
}
