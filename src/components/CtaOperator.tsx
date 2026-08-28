export function CtaOperator({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-[3/2] w-full bg-transparent ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/qipa-cta-operator.png?v=4"
        alt="A hospitality operator smiling at a holographic Qipa workspace"
        className="pointer-events-none absolute inset-0 h-full w-full bg-transparent object-contain object-center"
        style={{ mixBlendMode: "screen" }}
      />

      <svg
        viewBox="0 0 960 640"
        className="cta-overlay pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cta-stroke" x1="0" y1="0" x2="960" y2="640">
            <stop offset="0%" stopColor="#A5C9FF" />
            <stop offset="55%" stopColor="#4F7CFF" />
            <stop offset="100%" stopColor="#7A3FA0" />
          </linearGradient>
        </defs>

        <g
          className="cta-orbit"
          stroke="url(#cta-stroke)"
          strokeWidth="1.1"
          opacity="0.7"
        >
          <ellipse cx="560" cy="340" rx="210" ry="88" />
          <ellipse cx="560" cy="340" rx="168" ry="64" strokeDasharray="5 10" />
        </g>

        <g
          className="cta-orbit-rev"
          stroke="#A5C9FF"
          strokeWidth="0.9"
          opacity="0.45"
        >
          <ellipse cx="560" cy="340" rx="250" ry="120" strokeDasharray="2 12" />
        </g>

        <g stroke="url(#cta-stroke)" strokeWidth="1.2">
          <g className="cta-float-a">
            <rect x="118" y="168" width="86" height="64" rx="6" />
            <path d="M130 188 H192 M130 204 H176" opacity="0.7" />
          </g>
          <g className="cta-float-b">
            <rect x="210" y="248" width="72" height="54" rx="6" />
            <path d="M222 266 H266 M222 280 H254" opacity="0.7" />
          </g>
          <g className="cta-float-c">
            <rect x="780" y="132" width="78" height="58" rx="6" />
            <path d="M792 150 H842 M792 166 H828" opacity="0.7" />
          </g>
          <g className="cta-float-d">
            <rect x="808" y="248" width="64" height="48" rx="6" />
          </g>
        </g>

        <g className="cta-drift" fill="#4F7CFF">
          <circle cx="150" cy="320" r="3.2" className="cta-spark" />
          <circle cx="240" cy="390" r="2.4" className="cta-spark-delay" />
          <circle cx="320" cy="210" r="2.8" className="cta-spark" />
          <circle cx="720" cy="180" r="2.6" className="cta-spark-delay" />
          <circle cx="840" cy="360" r="3" className="cta-spark" />
          <circle cx="690" cy="470" r="2.2" className="cta-spark-delay" />
        </g>

        <g
          className="dash-flow"
          stroke="#4F7CFF"
          strokeWidth="0.9"
          opacity="0.55"
        >
          <path d="M200 200 C320 240, 420 300, 520 340" />
          <path d="M820 160 C740 220, 660 280, 580 340" />
          <path d="M180 360 C300 380, 430 360, 540 350" />
        </g>
      </svg>
    </div>
  );
}
