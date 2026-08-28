import type { Metadata } from "next";
import Link from "next/link";
import { ConnectedFlow } from "@/components/ConnectedFlow";
import { IntegrationStrip } from "@/components/IntegrationStrip";
import { NetworkRings } from "@/components/NetworkField";

export const metadata: Metadata = {
  title: "Hospitality Operating System",
  description:
    "Qipa is the AI hospitality operating system: property management software, channel manager, guest messaging, revenue, operations, and owner reporting in one platform.",
};

const modules = [
  {
    title: "Property Management",
    body: "Every property, reservation, guest, and calendar in one dashboard. Your property management system, not another login.",
  },
  {
    title: "Channel Manager",
    body: "Connect Guesty, Hostaway, or the channel manager you already use. Trial Qipa on live bookings, then move fully when you're ready.",
  },
  {
    title: "AI Guest Messaging",
    body: "Routine guest communication handled in your brand voice. Your team steps in when the conversation actually needs a person.",
  },
  {
    title: "Revenue Management",
    body: "Pricing, occupancy, and revenue recommendations from your own data, so gaps get closed before they cost you the night.",
  },
  {
    title: "Operations",
    body: "Cleaners, maintenance, inspections, and daily work in one place. Spreadsheets and WhatsApp groups stop being the operating system.",
  },
  {
    title: "Owner Portal",
    body: "Owners see bookings, revenue, statements, and portfolio performance without chasing your team for a report.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-fade" />
        <div className="orb right-0 top-0 h-80 w-80 bg-signal/15" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="label">Platform</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] text-paper sm:text-5xl">
              One operating system.
              <span className="block text-quiet">Every hospitality operation.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-quiet">
              Qipa is AI property management software built as a hospitality
              operating system, not a pile of modules. Reservations, channels,
              guests, operations, revenue, and owners stay in one source of
              truth.
            </p>
            <Link href="/contact" className="btn-primary mt-8 h-12 px-7 text-sm">
              Book a Demo
            </Link>
          </div>
          <div className="lg:col-span-5">
            <NetworkRings className="mx-auto w-full max-w-[380px]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
        <p className="label">How it sits</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Connect",
              body: "Connect Guesty, Hostaway, or the channel manager you already use. Your live bookings come into Qipa without a full migration.",
            },
            {
              step: "02",
              title: "Try",
              body: "Your team uses Qipa on real reservations, messaging, and operations while the current stack stays in place.",
            },
            {
              step: "03",
              title: "Switch",
              body: "Move fully to Qipa when the product has earned it. Not before.",
            },
          ].map((item) => (
            <article key={item.step} className="panel p-7">
              <p className="font-display text-sm text-signal">{item.step}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em]">
                {item.title}
              </h2>
              <p className="mt-3 leading-7 text-quiet">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Connected operations</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            No duplicated work. No switching between apps.
          </h2>
          <div className="mt-12">
            <ConnectedFlow />
          </div>
        </div>
      </section>

      <section id="modules" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Modules</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Six operations. One platform.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {modules.map((mod) => (
              <article key={mod.title} className="bg-navy-2 p-7 sm:p-8">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-paper">
                  {mod.title}
                </h3>
                <p className="mt-3 leading-7 text-quiet">{mod.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Try before you switch</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Test Qipa on the stack you already run.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-quiet">
            Connect Guesty, Hostaway, Lodgify, Hospitable, Smoobu, or another
            channel manager and use Qipa on your real reservations. You get a
            feel for the product first. You move fully only when you&apos;re
            ready to commit.
          </p>
          <div className="mt-12">
            <IntegrationStrip />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            See it against your stack.
          </h2>
          <Link href="/contact" className="btn-primary mt-8 h-12 px-7 text-sm">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
