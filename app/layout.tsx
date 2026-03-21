import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ART PLASTER — Artisanat Décoratif de Prestige | Temara, Maroc",
    template: "%s | ART PLASTER Maroc",
  },
  description:
    "ART PLASTER est la référence marocaine en enduits décoratifs, plafonds ornementaux et construction de prestige pour hôtels de luxe, résidences privées et bâtiments patrimoniaux. Basé à Temara, Maroc.",
  keywords: [
    "enduits décoratifs Maroc",
    "plafonds ornementaux",
    "tadelakt",
    "béton ciré",
    "stucco vénitien",
    "construction hôtelière Maroc",
    "artisanat plâtre Maroc",
    "ART PLASTER Temara",
    "rénovation riad",
    "luxe construction Maroc",
  ],
  authors: [{ name: "ART PLASTER" }],
  creator: "ART PLASTER",
  publisher: "ART PLASTER",
  metadataBase: new URL("https://www.artplaster.ma"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://www.artplaster.ma",
    siteName: "ART PLASTER",
    title: "ART PLASTER — L'Art du Plâtre au Service de l'Excellence",
    description:
      "Artisanat décoratif de prestige pour hôtels de luxe, résidences et patrimoine. Enduits, plafonds, tadelakt, béton ciré. Basé à Temara, Maroc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ART PLASTER — Artisanat Décoratif de Prestige",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ART PLASTER — Artisanat Décoratif de Prestige",
    description:
      "Enduits décoratifs, plafonds ornementaux et construction de prestige. Référence marocaine depuis 2006.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png?v=4",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <CustomCursor />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
