import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Sales",
  description:
    "Talk to Qipa about Enterprise for large hospitality portfolios, multiple brands, and dedicated support.",
};

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const params = await searchParams;
  const raw = Array.isArray(params.intent) ? params.intent[0] : params.intent;
  if (raw !== "sales") {
    redirect("/get-started");
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="orb -left-10 top-20 h-72 w-72 bg-signal/20" />
      <div className="orb right-0 bottom-0 h-64 w-64 bg-wine/15" />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="label">Enterprise</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Talk to Qipa sales.
            <span className="mt-2 block text-quiet">
              For large portfolios, multiple brands, and operators who need a
              dedicated partner.
            </span>
          </h1>
          <p className="mt-6 text-[1.05rem] leading-8 text-quiet">
            Tell us how you operate today. We&apos;ll shape Enterprise around
            your brands, integrations, and security requirements.
          </p>
          <dl className="mt-10 space-y-5">
            <div>
              <dt className="label">Best for</dt>
              <dd className="mt-2 text-paper">51 or more active properties</dd>
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
          <ContactForm intent="sales" />
        </div>
      </div>
    </section>
  );
}
