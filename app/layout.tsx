import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LOCALES } from "@/config/i18n";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: {
    locale: (typeof LOCALES)[number];
  };
}>;

export async function generateMetadata({ params: { locale } }: RootLayoutProps): Promise<Metadata> {
  return {
    title: "StellarVest",
    description: locale === "pt"
      ? "StellarVest Asset Management - Seus ativos, nossa expertise"
      : "StellarVest Asset Management - Your assets, our expertise"
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}