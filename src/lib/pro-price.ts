export type ProQuote =
  | { kind: "pro"; monthly: number }
  | { kind: "enterprise" };

export const PRO_MIN_PROPERTIES = 2;
export const PRO_MAX_PROPERTIES = 51;

export function proPrice(count: number): ProQuote {
  if (count >= 51) return { kind: "enterprise" };
  if (count >= 31) return { kind: "pro", monthly: 199 };
  if (count >= 16) return { kind: "pro", monthly: 149 };
  if (count >= 6) return { kind: "pro", monthly: 99 };
  return { kind: "pro", monthly: 49 };
}

export function formatPropertyCount(count: number) {
  return count >= 51 ? "51+" : String(count);
}
