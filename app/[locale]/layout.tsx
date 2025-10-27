// app/[locale]/layout.tsx
import { getDictionary } from "@/hooks/use-translation";
import { Golos_Text, JetBrains_Mono, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import "../globals.css";

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
  params: { locale: string };
}) {
  const dict = await getDictionary(params.locale as "en" | "fr");

  return {
    title: params.locale === "fr" ? "raphaelch.me" : "raphaelch.me - EN",
    description: dict.home.title,
    alternates: {
      canonical: `https://raphaelch.me/${params.locale}`,
      languages: {
        fr: "https://raphaelch.me/fr",
        en: "https://raphaelch.me/en",
      },
    },
    openGraph: {
      locale: params.locale,
      alternateLocale: params.locale === "fr" ? "en" : "fr",
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

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} className="bg-black">
      <body
        className={`${sans.variable} ${mono.variable} ${serif.variable} relative antialiased`}
      >
        <main className="bg-background relative z-10 min-h-screen pb-24">
          {children}
        </main>
        <Footer locale={params.locale as "en" | "fr"} />
        <Analytics />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}