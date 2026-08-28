export function HeroProperty({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[3/2] w-full bg-transparent ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/qipa-hero-house.png?v=2"
          alt="A house assembling as a live drawing while a car parks beside it"
          className="hero-ink pointer-events-none absolute inset-0 h-full w-full bg-transparent object-contain object-center"
          style={{ mixBlendMode: "screen" }}
        />

        <svg
          viewBox="0 0 960 640"
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
        <defs>
          <linearGradient id="hero-stroke" x1="0" y1="0" x2="960" y2="0">
            <stop offset="0%" stopColor="#A5C9FF" />
            <stop offset="55%" stopColor="#4F7CFF" />
            <stop offset="100%" stopColor="#7A3FA0" />
          </linearGradient>
        </defs>

        <g
          className="hero-draw"
          stroke="url(#hero-stroke)"
          strokeWidth="1.35"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path pathLength="1" d="M220 520 H900" />
          <path pathLength="1" d="M120 520 V508 H840 V520" />
          <path
            pathLength="1"
            d="M430 518 V210 H860 V518 M430 210 H400 V248 H430"
          />
          <path pathLength="1" d="M430 318 H860 M430 418 H860" />
          <path
            pathLength="1"
            d="M470 248 H560 V300 H470 Z M590 248 H680 V300 H590 Z M710 248 H820 V300 H710 Z"
          />
          <path
            pathLength="1"
            d="M470 348 H560 V400 H470 Z M590 348 H680 V400 H590 Z M710 348 H820 V400 H710 Z"
          />
          <path
            pathLength="1"
            d="M470 448 H560 V500 H470 Z M590 448 H680 V500 H590 Z M710 448 H790 V500 H710 Z"
          />
          <path pathLength="1" d="M790 448 H832 V518" />
          <path pathLength="1" d="M400 210 H860 L840 188 H420 Z" />
        </g>

        <g
          className="hero-draw hero-draw-delay"
          stroke="#A5C9FF"
          strokeWidth="1.1"
          strokeDasharray="5 7"
        >
          <path pathLength="1" d="M280 250 H400" />
          <path pathLength="1" d="M250 340 H430" />
          <path pathLength="1" d="M210 430 H430" />
          <rect pathLength="1" x="168" y="198" width="112" height="72" rx="8" />
          <rect pathLength="1" x="138" y="292" width="112" height="72" rx="8" />
          <rect pathLength="1" x="108" y="386" width="112" height="72" rx="8" />
        </g>

        <g className="hero-park">
          <g
            className="hero-draw hero-draw-car"
            stroke="url(#hero-stroke)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <ellipse
              pathLength="1"
              cx="250"
              cy="528"
              rx="92"
              ry="18"
              opacity="0.7"
            />
            <ellipse
              pathLength="1"
              cx="250"
              cy="528"
              rx="62"
              ry="10"
              opacity="0.9"
            />
            <path
              pathLength="1"
              d="M168 508 C176 486, 198 474, 230 472 H292 C328 474, 348 488, 354 508 Z"
            />
            <path
              pathLength="1"
              d="M198 472 C210 454, 228 446, 252 446 C278 446, 298 454, 312 472"
            />
            <circle pathLength="1" cx="206" cy="508" r="14" />
            <circle pathLength="1" cx="322" cy="508" r="14" />
            <circle pathLength="1" cx="206" cy="508" r="5" />
            <circle pathLength="1" cx="322" cy="508" r="5" />
          </g>
        </g>
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[32%] bg-gradient-to-r from-navy from-15% via-navy/70 to-transparent" />
    </div>
  );
}
