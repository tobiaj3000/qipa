import type { Metadata } from "next";
import { PricingPlans } from "@/components/PricingPlans";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing that grows with you. Your first property is on us. Qipa Pro starts from £49/month and scales with your portfolio.",
};

const reasons = [
  "No setup fees",
  "Cancel anytime",
  "No long-term contracts",
  "Your first property is on us",
  "Qipa Switch handles the migration",
];

function Check() {
  return (
    <span
      className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-signal/20 text-signal"
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
            Pricing that grows with you.
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-quiet">
            Your first property is on us. One price. Everything included. Your
            subscription simply scales with your portfolio.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-24">
        <PricingPlans />

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
