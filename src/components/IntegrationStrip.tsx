export const channelManagers = [
  "Guesty",
  "Hostaway",
  "Lodgify",
  "Hospitable",
  "Smoobu",
  "Hostfully",
  "Cloudbeds",
  "SiteMinder",
];

export const bookingChannels = [
  "Airbnb",
  "Booking.com",
  "Vrbo",
  "Expedia",
  "Google Vacation Rentals",
  "Direct bookings",
];

function NameGrid({ names }: { names: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {names.map((name) => (
        <li
          key={name}
          className="flex min-h-[4.25rem] items-center justify-center rounded-xl border border-line bg-navy-2/70 px-3 text-center font-display text-sm tracking-[-0.01em] text-paper sm:text-[0.95rem]"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export function IntegrationStrip() {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <p className="label">Channel managers</p>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-paper">
          Stay on Guesty or Hostaway while you test.
        </h3>
        <p className="mt-3 leading-7 text-quiet">
          Connect your current channel manager and run Qipa on live bookings.
          You feel how the app works before you commit to moving fully.
        </p>
      </div>
      <div className="lg:col-span-7">
        <NameGrid names={channelManagers} />
      </div>
      <div className="lg:col-span-5">
        <p className="label">Booking channels</p>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] text-paper">
          Every sales channel. One calendar.
        </h3>
        <p className="mt-3 leading-7 text-quiet">
          Your Airbnb, Booking.com, Vrbo, and direct bookings keep flowing
          through the channel manager you already trust. Qipa reads them while
          you trial.
        </p>
      </div>
      <div className="lg:col-span-7">
        <NameGrid names={bookingChannels} />
      </div>
    </div>
  );
}
