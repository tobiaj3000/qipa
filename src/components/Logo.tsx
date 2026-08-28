import Link from "next/link";
import { QipaWordmark } from "./QipaWordmark";

export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="256"
        cy="256"
        r="180"
        stroke="#4F7CFF"
        strokeWidth="28"
      />
      <line
        x1="316"
        y1="296"
        x2="476"
        y2="446"
        stroke="#9B2848"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <circle cx="256" cy="256" r="24" fill="#4F7CFF" opacity="0.7" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center gap-2.5"
      aria-label="Qipa home"
    >
      <LogoIcon className="h-8 w-8 shrink-0" />
      <QipaWordmark
        id="nav-wordmark"
        decorative
        className="h-9 w-[78px] shrink-0"
      />
    </Link>
  );
}
