import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kenza-renov.fr"),
  title: "Kenza Renov — Rénovation intérieure d'exception à Villecresnes",
  description:
    "Kenza Renov accompagne particuliers et professionnels dans leurs projets de rénovation intérieure, du premier croquis jusqu'aux finitions. Peinture, électricité, plomberie, revêtements, aménagement sur mesure.",
  keywords: [
    "rénovation appartement",
    "rénovation intérieure",
    "second œuvre",
    "Villecresnes",
    "rénovation haut de gamme",
    "aménagement intérieur",
  ],
  openGraph: {
    title: "Kenza Renov — Transformons vos espaces en lieux d'exception",
    description:
      "Rénovation intérieure haut de gamme pour particuliers et professionnels. Du diagnostic à la livraison.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <SmoothScroll>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
