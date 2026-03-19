import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ART PLASTER",
  description: "Contactez ART PLASTER pour votre projet de décoration, rénovation ou construction luxueuse. Demandez un devis complet personnalisé.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
