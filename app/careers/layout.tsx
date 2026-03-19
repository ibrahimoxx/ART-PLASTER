import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrières | ART PLASTER",
  description: "Rejoignez l'équipe ART PLASTER. Nous recrutons des artisans passionnés, des chefs de chantier et des experts en finition décorative.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
