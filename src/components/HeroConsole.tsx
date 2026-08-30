export function HeroConsole({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/qipa-hero-console.png?v=3"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[62%_42%]"
      />
      <div className="absolute inset-y-0 left-0 w-[min(40rem,58%)] bg-gradient-to-r from-navy from-[18%] via-navy/88 via-[58%] to-transparent" />
    </div>
  );
}
