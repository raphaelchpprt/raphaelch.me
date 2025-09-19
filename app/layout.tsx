import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Golos_Text, JetBrains_Mono, DM_Serif_Display } from "next/font/google";
import { Footer } from "@/components/footer";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "raphaelch.me",
  description:
    "Concepteur d’expériences digitales alliant design, ergonomie et accessibilité, j’accompagne les projets à impact positif dans la tech, la RSE et la transition énergétique.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${sans.variable} ${mono.variable} ${serif.variable} relative antialiased`}
      >
        <main className="bg-background relative z-10 min-h-screen pb-24">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
