import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Golos_Text, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "raphaelch.me",
  description:
    "Concepteur d’expériences digitales alliant design, ergonomie et accessibilité, j’accompagne les projets à impact positif dans la tech, la RSE et la transition énergétique.",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛵️</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${sans.variable} ${mono.variable} relative antialiased`}
      >
        <main className="bg-background relative z-10 min-h-screen pb-24">
          {children}
        </main>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}
