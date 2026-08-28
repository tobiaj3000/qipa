import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vacation Rental & Hospitality Software",
  description:
    "Qipa for vacation rentals, Airbnb properties, serviced apartments, and corporate housing. AI property management software that grows with your business.",
};

const solutions = [
  {
    id: "vacation-rentals",
    kicker: "Vacation rental software",
    title: "Vacation Rentals",
    lead: "Short-term rental software for operators who have outgrown a stack of apps.",
    points: [
      "One calendar across every listing and channel.",
      "Guest messaging that answers instantly, in your voice.",
      "Cleaning and maintenance sequenced from the reservation, not a group chat.",
      "Owners who can see performance without asking for a spreadsheet.",
    ],
  },
  {
    id: "airbnb",
    kicker: "Airbnb & OTAs",
    title: "Airbnb Properties",
    lead: "Channel management that keeps Airbnb, Booking.com, Vrbo, and direct bookings in the same source of truth.",
    points: [
      "Real-time sync so a booking on one channel cannot double-book another.",
      "Direct bookings that still update the same calendar and guest thread.",
      "Pricing recommendations before occupancy gaps cost you the weekend.",
      "Operations that move as soon as the reservation does.",
    ],
  },
  {
    id: "serviced-apartments",
    kicker: "Extended stay",
    title: "Serviced Apartments",
    lead: "Longer stays, quieter signals, the same operating system.",
    points: [
      "Guest preferences that compound over weeks, not a single night.",
      "Housekeeping and maintenance that do not collide with in-house guests.",
      "A channel of record for residents who never visit a desk.",
      "Owner and operator reporting on a living building, not a hotel night.",
    ],
  },
  {
    id: "corporate-housing",
    kicker: "Corporate housing",
    title: "Corporate Housing",
    lead: "Inventory, guests, and owners run as one portfolio.",
    points: [
      "Bookings from corporates, OTAs, and direct channels in the same system.",
      "Turnovers coordinated without a spreadsheet of keys and dates.",
      "Guest communication that stays consistent across every unit.",
      "Statements and occupancy reporting owners can trust.",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-fade" />
        <div className="orb left-10 top-10 h-72 w-72 bg-violet/20" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <p className="label">Solutions</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.045em] text-paper sm:text-5xl">
            Built for growing hospitality businesses.
            <span className="block text-quiet">Qipa grows with you.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-quiet">
            Vacation rentals, Airbnb properties, serviced apartments, and
            corporate housing. One AI operating system instead of a different
            tool for every job.
          </p>
        </div>
      </section>

      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`scroll-mt-24 ${index === 0 ? "" : "border-t border-line"}`}
        >
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-5">
              <p className="label">{solution.kicker}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {solution.title}
              </h2>
              <p className="mt-5 text-[1.05rem] leading-8 text-quiet">
                {solution.lead}
              </p>
            </div>
            <ul className="space-y-4 lg:col-span-6 lg:col-start-7">
              {solution.points.map((point) => (
                <li
                  key={point}
                  className="border-l border-signal/40 pl-5 leading-7 text-paper/90"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">
            Stop managing software. Start running your business.
          </h2>
          <Link href="/contact" className="btn-primary mt-8 h-12 px-7 text-sm">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
