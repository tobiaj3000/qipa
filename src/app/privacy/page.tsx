import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ocupai collects, uses, and shares information in the iOS app and the account service.",
};

export default function PrivacyPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="orb -left-10 top-16 h-72 w-72 bg-signal/15" />

      <article className="relative mx-auto max-w-[760px] px-5 py-16 sm:px-8 lg:py-24">
        <p className="label">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-quiet">Last updated: 26 September 2026</p>
        <p className="mt-8 text-[1.05rem] leading-8 text-quiet">
          Ocupai is a property-management app for hosts and hospitality teams.
          This policy explains what the app and the service at api.qipa.co
          collect, why, and the choices you have. It applies to the Ocupai iOS
          app and the related account service.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          Who we are
        </h2>
        <p className="mt-4 leading-8 text-quiet">
          Ocupai (“we”) provides the app. Privacy questions go to{" "}
          <a className="text-mist hover:text-paper" href="mailto:hello@qipa.ai">
            hello@qipa.ai
          </a>
          .
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          Information you give us
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-quiet">
          <li>
            <span className="text-paper">Account.</span> First name, last name,
            email address, password, and organization name when you register.
            Phone number if you add one to a profile.
          </li>
          <li>
            <span className="text-paper">Portfolio.</span> Property names,
            addresses, photos, rates, availability, calendars, tasks, owner
            records, and notes you or your team enter.
          </li>
          <li>
            <span className="text-paper">Guests and bookings.</span> Guest
            names, contact details, stay dates, and messages that arrive from
            the booking channels you connect, or that you enter yourself.
          </li>
          <li>
            <span className="text-paper">Payments.</span> Records of charges
            and payouts for real stays. Card numbers are collected by Stripe on
            Stripe’s pages. Ocupai does not store full card numbers.
          </li>
          <li>
            <span className="text-paper">Ask Ocupai.</span> The questions you
            type to the assistant, and the drafts the assistant prepares for
            your review.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          Information collected automatically
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-quiet">
          <li>
            <span className="text-paper">Sign-in session.</span> A token stored
            on your device so you stay signed in.
          </li>
          <li>
            <span className="text-paper">Push token.</span> If you allow
            notifications, a device token so we can send booking, message, and
            task alerts. You can turn notifications off in iOS Settings.
          </li>
          <li>
            <span className="text-paper">Face ID.</span> If you turn on Face ID
            sign-in, the check happens on your device. We do not receive your
            face data. The app may keep your email and password in the device
            keychain so Face ID can sign you in.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          How we use it
        </h2>
        <p className="mt-4 leading-8 text-quiet">
          We use this information to run the app: sign you in, show your
          portfolio, sync calendars and channels, deliver guest messages, send
          the alerts you asked for, and answer questions you send to Ask
          Ocupai. We do not sell personal information. We do not use it for
          third-party advertising, and the app does not track you across other
          companies’ apps or websites.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          Who we share it with
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-quiet">
          <li>
            <span className="text-paper">Your organization.</span> People you
            invite to the same Ocupai account can see the portfolio, bookings,
            and messages for that organization.
          </li>
          <li>
            Channel managers and booking sites you choose to connect, so
            availability, rates, and reservations stay in sync.
          </li>
          <li>
            Stripe, when you connect payouts. Stripe’s own privacy policy
            covers card data on their pages.
          </li>
          <li>
            Infrastructure providers that host the service, only so the app can
            function.
          </li>
        </ul>
        <p className="mt-4 leading-8 text-quiet">
          We may also share information if the law requires it, or to protect
          the service and its users.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          How long we keep it
        </h2>
        <p className="mt-4 leading-8 text-quiet">
          We keep account and portfolio information while your organization has
          an account. You can ask us to delete the account and the personal
          information tied to it by emailing{" "}
          <a className="text-mist hover:text-paper" href="mailto:hello@qipa.ai">
            hello@qipa.ai
          </a>
          .
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          Your choices
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-quiet">
          <li>
            You can decline camera, photo, notification, and Face ID access.
            The related feature will not work until you allow it.
          </li>
          <li>You can sign out from More in the app.</li>
          <li>
            You can email us to access, correct, or delete your account
            information.
          </li>
        </ul>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          Children
        </h2>
        <p className="mt-4 leading-8 text-quiet">
          Ocupai is a business tool. It is not directed at children under 16,
          and we do not knowingly create accounts for them.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-[-0.03em]">
          Changes
        </h2>
        <p className="mt-4 leading-8 text-quiet">
          If this policy changes, we will update the date at the top and post
          the new version on this page.
        </p>
      </article>
    </section>
  );
}
