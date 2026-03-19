import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | ART PLASTER",
  description: "Explorez nos réalisations: Hôtels de luxe, résidences de prestige, et restauration du patrimoine à travers le Maroc.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
