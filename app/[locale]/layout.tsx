import { getDictionary } from "@/hooks/use-translation";
import { Golos_Text, JetBrains_Mono, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import "../globals.css";
import { LanguageSwitcher } from "@/components/language-switcher";

const sans = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "fr");

  return {
    title: locale === "fr" ? "raphaelch.me" : "raphaelch.me - EN",
    description: dict.home.title,
    alternates: {
      canonical: `https://raphaelch.me/${locale}`,
      languages: {
        fr: "https://raphaelch.me/fr",
        en: "https://raphaelch.me/en",
      },
    },
    openGraph: {
      locale: locale,
      alternateLocale: locale === "fr" ? "en" : "fr",
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className="bg-black">
      <body
        className={`${sans.variable} ${mono.variable} ${serif.variable} relative antialiased`}
      >
        <LanguageSwitcher />
        <main className="bg-background relative z-10 min-h-screen pb-24">
          {children}
        </main>
        <Footer locale={locale as "en" | "fr"} />
        <Analytics />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}