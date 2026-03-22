import { Metadata } from "next";
import { projects } from "@/lib/data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Projet Introuvable | ART PLASTER",
    };
  }

  return {
    title: `${project.title} | ART PLASTER`,
    description: project.description.substring(0, 160) + "...",
    openGraph: {
      images: [project.image],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
