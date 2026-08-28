function hash(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

const stars = Array.from({ length: 88 }, (_, i) => {
  const size = 1 + hash(i + 3) * 2.4;
  const color =
    hash(i + 9) > 0.82
      ? "#A5C9FF"
      : hash(i + 11) > 0.7
        ? "#4F7CFF"
        : hash(i + 13) > 0.55
          ? "#E8ECF4"
          : "#ffffff";
  return {
    left: `${hash(i) * 100}%`,
    top: `${hash(i + 17) * 100}%`,
    size,
    delay: `${hash(i + 23) * 6}s`,
    duration: `${2.4 + hash(i + 29) * 3.6}s`,
    color,
    glow: size > 2.2,
  };
});

export function SpaceBackdrop() {
  return (
    <div className="space-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="space-nebula space-nebula-a" />
      <div className="space-nebula space-nebula-b" />
      <div className="space-nebula space-nebula-c" />
      <div className="space-aurora" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <g className="space-orbit" stroke="#4F7CFF" fill="none">
          <ellipse cx="980" cy="120" rx="220" ry="90" strokeWidth="0.7" opacity="0.35" />
          <ellipse cx="980" cy="120" rx="160" ry="58" strokeWidth="0.6" opacity="0.25" strokeDasharray="4 10" />
        </g>
        <g className="space-orbit-rev" stroke="#7A3FA0" fill="none">
          <ellipse cx="140" cy="640" rx="260" ry="110" strokeWidth="0.7" opacity="0.28" />
        </g>
        <g stroke="#A5C9FF" strokeWidth="0.6" opacity="0.22">
          <path d="M180 140 L260 90 L340 160 L280 230 Z" fill="none" />
          <circle cx="180" cy="140" r="2.2" fill="#A5C9FF" />
          <circle cx="260" cy="90" r="1.8" fill="#4F7CFF" />
          <circle cx="340" cy="160" r="2" fill="#A5C9FF" />
          <circle cx="280" cy="230" r="1.6" fill="#7A3FA0" />
        </g>
      </svg>

      {stars.map((star, i) => (
        <span
          key={i}
          className={`space-star ${star.glow ? "space-star-glow" : ""}`}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: star.color,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      <span className="space-shoot" />
      <span className="space-shoot space-shoot-b" />
      <div className="space-vignette" />
    </div>
  );
}
