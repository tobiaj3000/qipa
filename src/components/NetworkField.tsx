type NetworkFieldProps = {
  className?: string;
  labeled?: boolean;
};

const nodes = [
  { x: 256, y: 96, r: 10 },
  { x: 369.14, y: 142.86, r: 7 },
  { x: 416, y: 256, r: 10 },
  { x: 369.14, y: 369.14, r: 7 },
  { x: 256, y: 416, r: 10 },
  { x: 142.86, y: 369.14, r: 7 },
  { x: 96, y: 256, r: 10 },
  { x: 142.86, y: 142.86, r: 7 },
];

const ring = [
  [256, 96, 369.14, 142.86],
  [369.14, 142.86, 416, 256],
  [416, 256, 369.14, 369.14],
  [369.14, 369.14, 256, 416],
  [256, 416, 142.86, 369.14],
  [142.86, 369.14, 96, 256],
  [96, 256, 142.86, 142.86],
  [142.86, 142.86, 256, 96],
];

const spokes = [
  [256, 96, 256, 416],
  [369.14, 142.86, 142.86, 369.14],
  [416, 256, 96, 256],
  [369.14, 369.14, 142.86, 142.86],
];

export function NetworkField({ className = "", labeled = false }: NetworkFieldProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      role="img"
      aria-label={
        labeled
          ? "Qipa network mark connecting hospitality operations"
          : undefined
      }
      aria-hidden={labeled ? undefined : true}
    >
      {ring.map(([x1, y1, x2, y2], i) => (
        <line
          key={`r-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#4F7CFF"
          strokeWidth="2"
          opacity="0.38"
        />
      ))}
      {spokes.map(([x1, y1, x2, y2], i) => (
        <line
          key={`s-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className="dash-flow"
          stroke="#4F7CFF"
          strokeWidth="1.5"
          opacity="0.22"
        />
      ))}
      <path
        d="M 142.86 369.14 Q 456 396 486 466"
        stroke="#9B2848"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 10}
            fill="#4F7CFF"
            opacity="0.12"
            className={i % 2 === 0 ? "node-pulse" : "node-pulse-delay"}
          />
          <circle cx={n.x} cy={n.y} r={n.r} fill="#4F7CFF" />
        </g>
      ))}
      <circle cx="256" cy="256" r="22" fill="#4F7CFF" opacity="0.16" />
      <circle cx="256" cy="256" r="10" fill="#4F7CFF" />
    </svg>
  );
}

export function NetworkRings({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 206.5 206.5 A 70 70 0 1 1 206.5 305.5"
        stroke="#4F7CFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 164.08 164.08 A 130 130 0 1 1 164.08 347.92"
        stroke="#4F7CFF"
        strokeWidth="4"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M 121.65 121.65 A 190 190 0 1 1 121.65 390.35"
        stroke="#4F7CFF"
        strokeWidth="4"
        opacity="0.32"
        strokeLinecap="round"
      />
      <circle cx="206.5" cy="206.5" r="6" fill="#4F7CFF" />
      <circle cx="206.5" cy="305.5" r="6" fill="#4F7CFF" />
      <circle cx="164.08" cy="164.08" r="6" fill="#4F7CFF" />
      <circle cx="164.08" cy="347.92" r="6" fill="#4F7CFF" />
      <circle cx="121.65" cy="121.65" r="6" fill="#4F7CFF" />
      <circle cx="121.65" cy="390.35" r="6" fill="#4F7CFF" />
      <circle cx="256" cy="256" r="14" fill="#9B2848" />
    </svg>
  );
}
