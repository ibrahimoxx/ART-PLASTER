import { NextResponse } from 'next/server';
import {
  services,
  projects,
  stats,
  testimonials,
  processSteps,
  team,
  jobs,
  companyInfo,
  partners,
  marqueeItems,
  historyTimeline,
  values,
  perks
} from '@/lib/data';

export async function GET() {
  const exportData = {
    site_info: {
      company: companyInfo,
      global_texts: {
        homepage_hero: {
          surtitle: "Artisanat d'Excellence",
          title: "L'Art du Plâtre Marocain",
          subtitle: "Signature d'Exception",
          description: "Nous sculptons l'élégance et façonnons le prestige à travers des créations en plâtre uniques pour des espaces résidentiels, hôteliers et commerciaux d'exception."
        },
        cta_banner: {
          title: "Prêt à sublimer votre espace ?",
          description: "Discutons de votre projet d'aménagement et donnons vie à votre vision architecturale avec l'expertise d'ART PLASTER.",
          button: "Demander un devis"
        }
      }
    },
    data_structures: {
      interfaces: {
        Project: "interface Project { id: string; slug: string; title: string; category: string; surface: string; duration: string; client: string; location: string; year: string; description: string; tags: string[]; image: string; beforeImage?: string; afterImage?: string; featured: boolean; testimonial?: Testimonial | null; }",
        Service: "interface Service { id: string; slug: string; category: string; icon: string; title: string; subtitle: string; description: string; features: string[]; image: string; }",
        Job: "interface Job { id: string; title: string; type: string; location: string; department: string; description: string; requirements: string[]; benefits: string[]; }",
        Testimonial: "interface Testimonial { id?: string; quote: string; author: string; role: string; company?: string; rating?: number; avatar: string; }",
        TeamMember: "interface TeamMember { name: string; role: string; bio: string; image: string; }",
        ProcessStep: "interface ProcessStep { number: string; title: string; description: string; icon: string; }"
      }
    },
    collections: {
      services,
      projects,
      stats,
      testimonials,
      processSteps,
      team,
      jobs,
      partners,
      marqueeItems,
      historyTimeline,
      values,
      perks
    },
    assets: {
      images: [
        "/og-image.jpg",
        "/favicon.png",
        "app/icon.png",
        ...projects.flatMap(p => [p.image, p.beforeImage, p.afterImage]).filter(Boolean),
        ...services.map(s => s.image),
        ...team.map(t => t.image),
        ...testimonials.map(t => t.avatar)
      ]
    }
  };

  return NextResponse.json(exportData, {
    headers: {
      'Content-Disposition': 'attachment; filename="art_plaster_export.json"'
    }
  });
}
