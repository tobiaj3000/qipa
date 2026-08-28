import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple Qipa pricing that grows with your hospitality business. Start free. Qipa Pro is £99/month with the first month free. No per-property fees.",
};

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
  "Free onboarding and migration",
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

const reasons = [
  "No setup fees",
  "Cancel anytime",
  "No long-term contracts",
  "First month free on Pro",
  "Free migration from your existing software",
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

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade" />
        <div className="orb -left-16 top-10 h-80 w-80 bg-signal/18" />
        <div className="orb right-0 top-32 h-72 w-72 bg-violet/20" />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-8 pt-16 sm:px-8 lg:pt-24">
          <p className="label">Pricing</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.045em] text-paper sm:text-5xl">
            Simple pricing that grows with your business.
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-quiet">
            Start free. Upgrade when you&apos;re ready. No hidden fees. No
            per-property pricing.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          <article className="panel flex flex-col p-7 sm:p-8">
            <p className="label">Qipa Free</p>
            <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-paper">
              £0
            </p>
            <p className="mt-3 text-[1.02rem] leading-7 text-quiet">
              Perfect for getting started. Run the core platform on your first
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
            <Link
              href="/contact?intent=start"
              className="btn-ghost mt-10 h-12 w-full px-7 text-sm"
            >
              Start Free
            </Link>
          </article>

          <article className="relative flex flex-col rounded-[1.25rem] border border-signal/45 bg-gradient-to-b from-navy-3/90 to-navy-2 p-7 shadow-[0_0_0_1px_rgba(79,124,255,0.18),0_24px_80px_-32px_rgba(79,124,255,0.55)] sm:p-8 lg:-translate-y-2">
            <p className="absolute right-6 top-6 rounded-full border border-signal/40 bg-signal/15 px-3 py-1 font-display text-[0.7rem] tracking-[0.14em] text-mist uppercase">
              First month free
            </p>
            <p className="label">Qipa Pro</p>
            <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-paper">
              £99
              <span className="text-lg font-medium text-quiet">/month</span>
            </p>
            <p className="mt-3 text-[1.02rem] leading-7 text-quiet">
              Built for growing hospitality businesses. Automate operations,
              manage your portfolio, and scale.
            </p>
            <div className="mt-8 rounded-xl border border-line bg-navy/40 p-4">
              <p className="font-display text-lg font-semibold tracking-[-0.03em] text-paper">
                Unlimited Growth
              </p>
              <p className="mt-1 text-sm leading-6 text-quiet">
                Add as many properties, reservations, team members, and guests
                as your business needs.
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
            <Link
              href="/contact?intent=trial"
              className="btn-primary mt-10 h-12 w-full px-7 text-sm"
            >
              Start Free Trial
            </Link>
          </article>

          <article className="panel flex flex-col p-7 sm:p-8">
            <p className="label">Enterprise</p>
            <p className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-paper">
              Custom
            </p>
            <p className="mt-3 text-[1.02rem] leading-7 text-quiet">
              For professional operators managing large portfolios, multiple
              brands, or enterprise hospitality businesses.
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
            <Link
              href="/contact?intent=sales"
              className="btn-ghost mt-10 h-12 w-full px-7 text-sm"
            >
              Contact Sales
            </Link>
          </article>
        </div>

        <div className="mt-16">
          <p className="label">Why Qipa</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-line bg-navy-2/50 px-4 py-4 text-sm leading-6 text-paper"
              >
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
