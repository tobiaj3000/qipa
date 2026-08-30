import type { Metadata } from "next";
import Link from "next/link";
import { ConnectedFlow } from "@/components/ConnectedFlow";
import { CreationHands } from "@/components/HybridPortrait";
import { CtaOperator } from "@/components/CtaOperator";
import { HeroProperty } from "@/components/HeroProperty";
import { IntegrationStrip } from "@/components/IntegrationStrip";
import { SpaceBackdrop } from "@/components/SpaceBackdrop";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: {
    absolute:
      "Qipa — AI Property Management Software for Hospitality Businesses",
  },
  description:
    "Qipa is the AI operating system for hospitality businesses. Manage properties, sync every booking channel, automate guest communication, optimize revenue, and run operations from one platform. Get started.",
  keywords: [
    "AI Property Management Software",
    "Property Management Software",
    "Property Management System",
    "Hospitality Management Software",
    "Vacation Rental Software",
    "Short-Term Rental Software",
    "Channel Manager",
    "Vacation Rental Management Software",
    "Hospitality Operating System",
    "AI Hospitality Software",
  ],
  openGraph: {
    title: "Qipa — The AI Operating System for Hospitality Businesses",
    description:
      "One intelligent platform for property management, channel management, guest messaging, revenue, operations, and owners.",
  },
  twitter: {
    title: "Qipa — The AI Operating System for Hospitality Businesses",
    description:
      "One intelligent platform for property management, channel management, guest messaging, revenue, operations, and owners.",
  },
};

const operations = [
  {
    title: "Property Management",
    body: "Manage every property, reservation, guest, and calendar from one unified dashboard.",
  },
  {
    title: "Channel Management",
    body: "Connect Guesty, Hostaway, or the channel manager you already use. Run Qipa on your live bookings first, then move fully when you're ready.",
  },
  {
    title: "AI Guest Messaging",
    body: "Let AI handle routine guest communication while your team focuses on conversations that matter.",
  },
  {
    title: "Revenue Management",
    body: "Optimize pricing, occupancy, and revenue with intelligent recommendations powered by your business data.",
  },
  {
    title: "Operations",
    body: "Coordinate cleaners, maintenance teams, inspections, and daily operations without spreadsheets or WhatsApp chaos.",
  },
  {
    title: "Owner Portal",
    body: "Give property owners real-time access to bookings, revenue, statements, and portfolio performance.",
  },
];

const intelligence = [
  "Every reservation.",
  "Every guest.",
  "Every message.",
  "Every decision.",
];

const agents = [
  {
    title: "AI Guest Concierge",
    body: "Responds to guests instantly using your brand voice.",
  },
  {
    title: "AI Revenue Manager",
    body: "Identifies pricing opportunities and occupancy gaps before they cost you bookings.",
  },
  {
    title: "AI Operations Manager",
    body: "Coordinates housekeeping, maintenance, and daily workflows automatically.",
  },
  {
    title: "AI Business Intelligence",
    body: "Turns your operational data into recommendations that help you grow faster.",
  },
];

const verticals = [
  { href: "/solutions#vacation-rentals", title: "Vacation Rentals" },
  { href: "/solutions#airbnb", title: "Airbnb Properties" },
  { href: "/solutions#serviced-apartments", title: "Serviced Apartments" },
  { href: "/solutions#corporate-housing", title: "Corporate Housing" },
];

const reasons = [
  {
    title: "AI-first",
    body: "Automation is built into every workflow, not bolted on later.",
  },
  {
    title: "Built for scale",
    body: "Manage one property or one thousand from the same platform.",
  },
  {
    title: "Modern design",
    body: "A clean, intuitive experience your team actually enjoys using.",
  },
  {
    title: "One source of truth",
    body: "Reservations, operations, guests, owners, revenue, and communication. All connected.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Qipa",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Property Management Software",
  operatingSystem: "Web",
  description:
    "The AI operating system for hospitality businesses. Property management, channel management, guest messaging, revenue, operations, and owner reporting in one platform.",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Hospitality businesses",
  },
  featureList: operations.map((item) => item.title),
  offers: {
    "@type": "Offer",
    url: "/get-started",
    availability: "https://schema.org/OnlineOnly",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />
        <div className="orb -left-24 top-0 h-[22rem] w-[22rem] bg-signal/15" />
        <div className="orb -right-10 top-28 h-[26rem] w-[26rem] bg-signal/12" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-20">
          <div className="lg:col-span-5">
            <p className="label rise">AI property management software</p>
            <h1
              className="rise mt-5 max-w-xl font-display text-[2.15rem] font-semibold leading-[1.12] tracking-[-0.045em] text-paper sm:text-[2.7rem]"
              style={{ animationDelay: "80ms" }}
            >
              The AI Operating System for{" "}
              <span className="text-white">Hospitality Businesses</span>
            </h1>
            <p
              className="rise mt-5 max-w-lg text-[1.05rem] leading-8 text-quiet"
              style={{ animationDelay: "180ms" }}
            >
              Manage properties, synchronize every booking channel, automate
              guest communication, optimize revenue, coordinate operations, and
              grow your hospitality business from one intelligent platform.
            </p>
            <div
              className="rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "280ms" }}
            >
              <TrackedLink
                href="/get-started"
                event="get_started_click"
                eventProps={{ source: "hero" }}
                className="btn-primary h-12 px-7 text-sm"
              >
                Get Started
              </TrackedLink>
              <Link href="/get-started" className="btn-ghost h-12 px-7 text-sm">
                Start Free
              </Link>
            </div>
            <p
              className="rise mt-6 text-sm text-quiet"
              style={{ animationDelay: "340ms" }}
            >
              Trusted by modern hospitality operators.{" "}
              <a href="#integrations" className="text-mist hover:text-paper">
                Try Qipa on Guesty, Hostaway, or Lodgify before you switch
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            <HeroProperty />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <p className="label">The problem</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">
              Hospitality shouldn&apos;t require 10 different tools.
            </h2>
          </div>
          <div className="space-y-6 text-[1.05rem] leading-8 text-quiet lg:col-span-6 lg:col-start-7">
            <p>
              Today&apos;s operators juggle disconnected software for
              reservations, guest messaging, pricing, housekeeping, owner
              reporting, analytics, and channel management.
            </p>
            <p className="text-paper">
              Qipa brings everything together into one AI-powered operating
              system, so your team spends less time managing software and more
              time growing the business.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Platform</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">
            One platform. Every operation.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {operations.map((item) => (
              <article key={item.title} className="panel p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-quiet">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="integrations"
        className="relative scroll-mt-24 overflow-hidden border-t border-line"
      >
        <SpaceBackdrop />
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Try before you switch</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">
            Test Qipa on the stack you already run.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-quiet">
            Connect Guesty, Hostaway, Lodgify, Hospitable, Smoobu, or another
            channel manager and run Qipa alongside it. You get a real feel for
            the product on your own bookings, without committing to a full move
            until you&apos;re ready.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect",
                body: "Plug in Guesty, Hostaway, or the channel manager you use today. Your live reservations come through.",
              },
              {
                step: "02",
                title: "Feel it",
                body: "Use Qipa on real data: messaging, operations, revenue, owners. Your current stack stays in place.",
              },
              {
                step: "03",
                title: "Move when ready",
                body: "Switch fully to Qipa only after the team has tried it. No rip-and-replace on day one.",
              },
            ].map((item) => (
              <li key={item.step} className="panel p-6">
                <p className="font-display text-sm text-signal">{item.step}</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-quiet">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <IntegrationStrip />
          </div>
          <p className="mt-8 text-sm text-quiet">
            Don&apos;t see yours?{" "}
            <Link href="/get-started" className="text-mist hover:text-paper">
              Start free
            </Link>{" "}
            and we&apos;ll connect it for the trial.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="label">Qipa Intelligence</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">
              Meet Qipa Intelligence
            </h2>
            <p className="mt-5 text-[1.05rem] leading-8 text-quiet">
              Qipa doesn&apos;t just organize your business.
            </p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-paper">
              It learns it.
            </p>
            <ul className="mt-8 space-y-3">
              {intelligence.map((line) => (
                <li
                  key={line}
                  className="border-l border-signal/50 pl-4 font-display text-lg text-paper"
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[1.05rem] leading-8 text-quiet">
              The more your team uses Qipa, the more it understands how your
              business operates. It helps automate repetitive work while keeping
              your team in control.
            </p>
          </div>
          <div className="lg:col-span-7">
            <CreationHands className="w-full" />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">AI team</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">
            AI that works like another team member.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {agents.map((item) => (
              <article key={item.title} className="panel p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-quiet">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line">
        <SpaceBackdrop />
        <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Connected operations</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">
            Everything connected.
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-quiet">
            One platform. No duplicated work. No switching between apps.
          </p>
          <div className="mt-10">
            <ConnectedFlow />
          </div>
          <p className="mt-8 text-[1.05rem] leading-8 text-paper">
            Every action updates across your business automatically.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Who it&apos;s for</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">
            Built for growing hospitality businesses.
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-8 text-quiet">
            Whether you manage vacation rentals, Airbnb properties, serviced
            apartments, or corporate housing. Qipa grows with your business.
          </p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {verticals.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="panel group flex items-center justify-between p-6 transition hover:border-mist/30"
              >
                <h3 className="font-display text-lg font-semibold tracking-[-0.03em] text-paper">
                  {item.title}
                </h3>
                <span className="text-mist group-hover:text-paper">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Why Qipa</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl">
            Why teams choose Qipa
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((item) => (
              <article key={item.title} className="panel p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-quiet">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line">
        <div className="orb -right-20 top-0 h-80 w-80 bg-signal/20" />
        <div className="orb bottom-0 left-10 h-64 w-64 bg-wine/15" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-5">
            <p className="label">Next</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.045em] text-paper sm:text-5xl">
              Stop managing software.
              <span className="block text-quiet">Start running your business.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-quiet">
              Create your Qipa account and we&apos;ll move your properties,
              bookings, and channels for you.{" "}
              <Link href="/pricing" className="text-mist hover:text-paper">
                See pricing
              </Link>
              .
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/get-started"
                event="get_started_click"
                eventProps={{ source: "close" }}
                className="btn-primary h-12 px-7 text-sm"
              >
                Get Started
              </TrackedLink>
              <Link href="/get-started" className="btn-ghost h-12 px-7 text-sm">
                Start Free
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <CtaOperator />
          </div>
        </div>
      </section>
    </>
  );
}
