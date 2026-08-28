import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-32 sm:px-8">
      <p className="label">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em]">
        This corridor does not exist.
      </h1>
      <p className="mt-4 max-w-md text-quiet">
        The page you asked for is not on the property. Head back to the lobby.
      </p>
      <Link href="/" className="btn-primary mt-8 h-12 px-7 text-sm">
        Back to Qipa
      </Link>
    </section>
  );
}
