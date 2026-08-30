import type { Metadata } from "next";
import { GetStartedOnboarding } from "@/components/GetStartedOnboarding";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Create your Qipa account. We'll move your existing properties, bookings, and channels for you. No manual migration.",
};

export default function GetStartedPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="orb -left-10 top-20 h-72 w-72 bg-signal/20" />
      <div className="orb right-0 bottom-0 h-64 w-64 bg-wine/15" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="label">Get Started</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Let&apos;s get you set up.
          </h1>
          <p className="mt-6 text-[1.05rem] leading-8 text-quiet">
            We&apos;ll create your Qipa account and move your existing
            properties, bookings and channels for you. No manual migration. No
            rebuilding your portfolio.
          </p>
        </div>

        <div className="mt-12">
          <GetStartedOnboarding />
        </div>
      </div>
    </section>
  );
}
