import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/platform", label: "Operating system" },
      { href: "/platform#modules", label: "Modules" },
      { href: "/platform#integrations", label: "Integrations" },
      { href: "/#integrations", label: "Channel managers" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions#vacation-rentals", label: "Vacation rentals" },
      { href: "/solutions#airbnb", label: "Airbnb properties" },
      { href: "/solutions#serviced-apartments", label: "Serviced apartments" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/get-started", label: "Get Started" },
      { href: "mailto:hello@qipa.ai", label: "hello@qipa.ai" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-quiet">
            The AI Operating System for Hospitality Businesses.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <p className="label mb-4">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-quiet transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-6 text-sm text-quiet sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Qipa. All rights reserved.</p>
          <p>One platform. Every operation.</p>
        </div>
      </div>
    </footer>
  );
}
