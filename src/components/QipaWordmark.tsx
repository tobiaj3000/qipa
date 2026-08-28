const STEM = 44;
const RX = 96;
const RY = 84;
const IRX = 42;
const IRY = 30;
const CY = 140;
const BOWL_TOP = CY - RY;
const BOWL_BOT = CY + RY;
const DESC = 38;

const QX = 104;
const IX = QX + RX + 14;
const PX = IX + STEM + 12;
const P_CX = PX + RX;
const OVERLAP = 82;
const A_CX = P_CX + RX * 2 - OVERLAP;
const AX = A_CX + RX - STEM;

const VIEW_W = AX + STEM + 8;
const VIEW_H = BOWL_BOT + DESC + 4;

function ellipse(cx: number, cy: number, rx: number, ry: number, clockwise: boolean) {
  const sweep = clockwise ? 1 : 0;
  return `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 ${sweep} ${rx * 2} 0 a ${rx} ${ry} 0 1 ${sweep} ${-rx * 2} 0`;
}

function rect(x: number, y: number, w: number, h: number) {
  return `M ${x} ${y} h ${w} v ${h} h ${-w} z`;
}

function bowlWithStem(cx: number, stemX: number, stemY: number, stemH: number) {
  return [
    ellipse(cx, CY, RX, RY, true),
    rect(stemX, stemY, STEM, stemH),
    ellipse(cx, CY, IRX, IRY, false),
  ].join(" ");
}

const qPath = bowlWithStem(QX, QX - STEM / 2, BOWL_BOT - 22, DESC + 22);
const pPath = bowlWithStem(P_CX, PX, BOWL_TOP, BOWL_BOT - BOWL_TOP + DESC);
const aPath = bowlWithStem(A_CX, AX, BOWL_TOP, BOWL_BOT - BOWL_TOP);

type QipaWordmarkProps = {
  className?: string;
  id?: string;
  decorative?: boolean;
};

export function QipaWordmark({
  className = "h-9 w-[78px] shrink-0",
  id = "qipa-wordmark",
  decorative = false,
}: QipaWordmarkProps) {
  const grad = `${id}-grad`;
  const clipP = `${id}-clip-p`;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "qipa"}
      aria-hidden={decorative ? true : undefined}
    >
      <defs>
        <linearGradient
          id={grad}
          x1="0"
          y1="0"
          x2={VIEW_W}
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="22%" stopColor="#FFFFFF" />
          <stop offset="42%" stopColor="#A5C8FF" />
          <stop offset="68%" stopColor="#4D7CFF" />
          <stop offset="100%" stopColor="#8E44AD" />
        </linearGradient>
        <clipPath id={clipP}>
          <path d={pPath} />
        </clipPath>
      </defs>

      <path d={qPath} fill={`url(#${grad})`} />
      <rect x={IX} y={0} width={STEM} height={STEM} fill={`url(#${grad})`} />
      <rect
        x={IX}
        y={BOWL_TOP}
        width={STEM}
        height={BOWL_BOT - BOWL_TOP}
        fill={`url(#${grad})`}
      />
      <path d={pPath} fill={`url(#${grad})`} />
      <path d={aPath} fill={`url(#${grad})`} />
      <g clipPath={`url(#${clipP})`}>
        <path d={aPath} fill="#3A1860" fillOpacity="0.48" />
      </g>
    </svg>
  );
}
