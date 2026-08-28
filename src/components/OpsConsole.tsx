const tasks = [
  { time: "07:10", text: "Hold 412–414 connecting — late inbound, family of four." },
  { time: "09:40", text: "Housekeeping resequence: 12 rooms pulled forward for 14:00 arrivals." },
  { time: "11:05", text: "Walk-in at 94% occupancy — sister property rate loaded." },
];

export function OpsConsole() {
  return (
    <div className="panel overflow-hidden shadow-[0_0_0_1px_rgba(165,201,255,0.06)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-signal" />
          <p className="font-display text-sm tracking-[-0.02em] text-paper">
            The Grand House · Tonight
          </p>
        </div>
        <p className="label !text-[0.62rem]">Live operating picture</p>
      </div>

      <div className="grid gap-0 lg:grid-cols-12">
        <div className="border-b border-line p-5 lg:col-span-4 lg:border-b-0 lg:border-r">
          <p className="label mb-4">House</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              ["186", "In-house"],
              ["42", "Arrivals"],
              ["38", "Departures"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-semibold tracking-tight text-paper">
                  {value}
                </p>
                <p className="mt-1 text-xs text-quiet">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs text-quiet">
              <span>Occupancy</span>
              <span className="text-mist">94%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-signal to-violet" />
            </div>
          </div>
        </div>

        <div className="border-b border-line p-5 lg:col-span-5 lg:border-b-0 lg:border-r">
          <p className="label mb-4">Copilot briefing</p>
          <p className="font-display text-[1.05rem] leading-7 tracking-[-0.02em] text-paper">
            Room 412 asked for a late checkout. Housekeeping has a 14:00 gap.
            Offer 16:00 and a lounge pass — predicted accept{" "}
            <span className="text-mist">78%</span>.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-line px-3 py-1 text-xs text-mist">
              House voice
            </span>
            <span className="rounded-full border border-line px-3 py-1 text-xs text-mist">
              PMS write-back
            </span>
          </div>
        </div>

        <div className="p-5 lg:col-span-3">
          <p className="label mb-4">Queue</p>
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li key={task.time} className="flex gap-3">
                <span className="font-display text-xs text-signal">{task.time}</span>
                <p className="text-xs leading-5 text-quiet">{task.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
