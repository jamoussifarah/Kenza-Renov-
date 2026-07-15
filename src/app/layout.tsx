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

const SITE_URL = "https://kenzarenov.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kenza Renov — Rénovation intérieure d'exception à Villecresnes",
    template: "%s | Kenza Renov",
  },
  description:
    "Kenza Renov accompagne particuliers et professionnels dans leurs projets de rénovation intérieure, du premier croquis jusqu'aux finitions. Peinture, électricité, plomberie, revêtements, aménagement sur mesure à Villecresnes et en Île-de-France.",
  keywords: [
    "Kenza Renov",
    "rénovation appartement",
    "rénovation intérieure",
    "second œuvre",
    "Villecresnes",
    "rénovation haut de gamme",
    "aménagement intérieur",
    "entreprise de rénovation Île-de-France",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Kenza Renov — Transformons vos espaces en lieux d'exception",
    description:
      "Rénovation intérieure haut de gamme pour particuliers et professionnels. Du diagnostic à la livraison, à Villecresnes et en Île-de-France.",
    url: SITE_URL,
    siteName: "Kenza Renov",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenza Renov — Transformons vos espaces en lieux d'exception",
    description:
      "Rénovation intérieure haut de gamme pour particuliers et professionnels, à Villecresnes et en Île-de-France.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Kenza Renov",
  description:
    "Rénovation intérieure et second œuvre pour particuliers et professionnels : peinture, électricité, plomberie, revêtements de sols, aménagement sur mesure.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  telephone: "+33642593078",
  email: "kenza.renov@gmail.com",
  priceRange: "€€",
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Rue de la Vallée",
    postalCode: "94440",
    addressLocality: "Villecresnes",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "State",
    name: "Île-de-France",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "12:30",
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
