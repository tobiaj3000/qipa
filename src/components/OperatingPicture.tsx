const nodes = [
  { label: "Front desk", x: 50, y: 14 },
  { label: "Guest", x: 84, y: 30 },
  { label: "F&B", x: 88, y: 58 },
  { label: "Revenue", x: 70, y: 82 },
  { label: "Housekeeping", x: 30, y: 82 },
  { label: "Labor", x: 12, y: 58 },
  { label: "Channels", x: 16, y: 30 },
];

export function OperatingPicture() {
  return (
    <div className="panel relative overflow-hidden px-4 py-10 sm:px-8 sm:py-14">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="orb -left-10 top-10 h-56 w-56 bg-signal/25" />
        <div className="orb right-0 bottom-0 h-48 w-48 bg-wine/20" />
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[560px]">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          {nodes.map((node, i) => (
            <line
              key={node.label}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke="#4F7CFF"
              strokeWidth="0.3"
              opacity="0.45"
              className="dash-flow"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
          <circle
            cx="50"
            cy="50"
            r="16"
            fill="none"
            stroke="#4F7CFF"
            strokeWidth="1.1"
          />
          <line
            x1="58"
            y1="56"
            x2="72"
            y2="70"
            stroke="#9B2848"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="50" cy="50" r="2.2" fill="#4F7CFF" />
          {nodes.map((node) => (
            <g key={node.label}>
              <circle cx={node.x} cy={node.y} r="2.4" fill="#4F7CFF" />
              <circle
                cx={node.x}
                cy={node.y}
                r="4.2"
                fill="#4F7CFF"
                opacity="0.12"
              />
            </g>
          ))}
        </svg>

        <div className="pointer-events-none absolute inset-0">
          {nodes.map((node) => (
            <span
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-navy-2/90 px-2.5 py-1 font-display text-[11px] tracking-wide text-mist sm:text-xs"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              {node.label}
            </span>
          ))}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-sm font-semibold tracking-[-0.04em] text-paper sm:text-base">
            qipa
          </span>
        </div>
      </div>
    </div>
  );
}
