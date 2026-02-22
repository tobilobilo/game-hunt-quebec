export const SUPPORTED_LOCALES = ["en", "fr"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const FALLBACK_LOCALE: SupportedLocale = "fr";
