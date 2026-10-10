import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | ART PLASTER",
  // HIDDEN original: "Notre histoire, notre mission et nos valeurs. Découvrez l'expertise de 18 ans d'ART PLASTER dans l'artisanat marocain."
  description: "Notre histoire, notre mission et nos valeurs. Découvrez ART PLASTER, société fondée en février 2023 à Salé.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
