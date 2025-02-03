import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/config/i18n";

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true
});

// Specify which paths should be internationalized
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};