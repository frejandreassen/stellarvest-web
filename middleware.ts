import createMiddleware from "next-intl/middleware";
import { locales } from "./app/[locale]/layout";

export default createMiddleware({
  locales,
  defaultLocale: "pt",
  // Optionally, you can configure locale detection
  localeDetection: true // This will check browser preferences
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};