export const LOCALES = ["en", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const locales = LOCALES;
export const defaultLocale = "pt";