import type { Metadata } from "next";
import { ContactForm, type ContactIntent } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a personalised Qipa demo and see how the AI operating system for hospitality businesses can automate your operation.",
};

const intents: Record<
  ContactIntent,
  { kicker: string; title: string; sub: string; body: string }
> = {
  demo: {
    kicker: "Book a demo",
    title: "See Qipa on your operation.",
    sub: "A personalised demo, not a generic walkthrough.",
    body: "We'll look at the tools you already run, the channels you sell on, and where work is still duplicated. Then we'll show Qipa against that picture.",
  },
  start: {
    kicker: "Start free",
    title: "Start running your business on Qipa.",
    sub: "Connect Guesty, Hostaway, or the channel manager you already use. Feel Qipa on live bookings before you commit.",
    body: "Start by connecting the stack you already run. You trial Qipa on your real reservations. You move fully only when you're ready.",
  },
  trial: {
    kicker: "Qipa Pro",
    title: "Start your Pro trial.",
    sub: "First month free. No per-property pricing.",
    body: "We'll get you onto Pro with your live bookings, so you can feel unlimited growth before you pay.",
  },
  sales: {
    kicker: "Enterprise",
    title: "Talk to Qipa sales.",
    sub: "For large portfolios, multiple brands, and operators who need a dedicated partner.",
    body: "Tell us how you operate today. We'll shape Enterprise around your brands, integrations, and security requirements.",
  },
};

function resolveIntent(value: string | string[] | undefined): ContactIntent {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw === "start" || raw === "trial" || raw === "sales") return raw;
  return "demo";
}

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const params = await searchParams;
  const intent = resolveIntent(params.intent);
  const text = intents[intent];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="orb -left-10 top-20 h-72 w-72 bg-signal/20" />
      <div className="orb right-0 bottom-0 h-64 w-64 bg-wine/15" />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="label">{text.kicker}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            {text.title}
            <span className="mt-2 block text-quiet">{text.sub}</span>
          </h1>
          <p className="mt-6 text-[1.05rem] leading-8 text-quiet">{text.body}</p>
          <dl className="mt-10 space-y-5">
            <div>
              <dt className="label">Time</dt>
              <dd className="mt-2 text-paper">30 minutes, remote</dd>
            </div>
            <div>
              <dt className="label">Who should join</dt>
              <dd className="mt-2 text-paper">
                Owner, operator, or whoever owns reservations, operations, and
                guest experience
              </dd>
            </div>
            <div>
              <dt className="label">Direct</dt>
              <dd className="mt-2">
                <a className="text-mist hover:text-paper" href="mailto:hello@qipa.ai">
                  hello@qipa.ai
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-7">
          <ContactForm intent={intent} />
        </div>
      </div>
    </section>
  );
}
