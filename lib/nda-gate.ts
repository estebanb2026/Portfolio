/**
 * Client-side soft gate; not a substitute for true access control.
 * Set NEXT_PUBLIC_NDA_PORTFOLIO_PASSWORD to a non-empty value to use a custom password;
 * if unset, defaults accept both common spellings of the shared phrase.
 */
const FROM_ENV = (process.env.NEXT_PUBLIC_NDA_PORTFOLIO_PASSWORD || "").trim();

const DEFAULTS = new Set(["hiresteban", "hireesteban"].map((s) => s.toLowerCase()));

export function isNdaPasswordValid(input: string): boolean {
  const n = input.trim().toLowerCase();
  if (n.length === 0) return false;
  if (FROM_ENV.length > 0) {
    return n === FROM_ENV.toLowerCase();
  }
  return DEFAULTS.has(n);
}
