import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | ART PLASTER",
  description: "Notre histoire, notre mission et nos valeurs. Découvrez l'expertise de 18 ans d'ART PLASTER dans l'artisanat marocain.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
