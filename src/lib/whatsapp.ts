const ONBOARDING_MESSAGE =
  "Hi Qipa, I want to get started and create my account.";

export function getWhatsAppHref() {
  const digits = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
    /\D/g,
    "",
  );
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(ONBOARDING_MESSAGE)}`;
}
