import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | ART PLASTER",
  description: "Découvrez nos services d'enduits décoratifs, de plafonds ornementaux et de rénovation pour le résidentiel, l'hôtellerie et le patrimoine au Maroc.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
