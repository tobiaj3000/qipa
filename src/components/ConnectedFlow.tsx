const steps = [
  "Reservations",
  "Calendar",
  "Guest Messaging",
  "Cleaning",
  "Maintenance",
  "Revenue",
  "Analytics",
  "Owners",
];

export function ConnectedFlow() {
  return (
    <ol className="panel grid gap-0 overflow-hidden p-2 sm:p-3 md:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step}
          className="relative flex min-h-[5.5rem] flex-col justify-center border-b border-line px-5 py-4 last:border-b-0 md:border-b-0 md:border-r md:[&:nth-child(4n)]:border-r-0 md:[&:nth-child(n+5)]:border-t"
        >
          <span className="font-display text-[0.7rem] tracking-[0.18em] text-signal">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-1 font-display text-lg font-semibold tracking-[-0.03em] text-paper">
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}
