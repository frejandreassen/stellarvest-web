import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { LOCALES } from "@/config/i18n";

// You might want to export this type from i18n.config.ts instead
type Locale = (typeof LOCALES)[number];

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale }; // Changed from string to Locale
}) {
  if (!LOCALES.includes(locale)) notFound();
  
  const messages = await getMessages({ locale });
  
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}