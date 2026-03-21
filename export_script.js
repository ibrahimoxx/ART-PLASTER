const fs = require('fs');

const tsCode = fs.readFileSync('lib/data.ts', 'utf8');
const jsCode = tsCode.replace(/export const /g, 'const ') + '\nmodule.exports = { services, projects, stats, testimonials, processSteps, team, jobs, companyInfo, partners, marqueeItems, historyTimeline, values, perks };';

fs.writeFileSync('lib/data.js', jsCode);

const data = require('./lib/data.js');

const site_info = {
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
};

const interfaces = {
  Project: "interface Project { id: string; slug: string; title: string; category: string; surface: string; duration: string; client: string; location: string; year: string; description: string; tags: string[]; image: string; beforeImage?: string; afterImage?: string; featured: boolean; testimonial?: Testimonial | null; }",
  Service: "interface Service { id: string; slug: string; category: string; icon: string; title: string; subtitle: string; description: string; features: string[]; image: string; }",
  Job: "interface Job { id: string; title: string; type: string; location: string; department: string; description: string; requirements: string[]; benefits: string[]; }",
  Testimonial: "interface Testimonial { id?: string; quote: string; author: string; role: string; company?: string; rating?: number; avatar: string; }",
  TeamMember: "interface TeamMember { name: string; role: string; bio: string; image: string; }",
  ProcessStep: "interface ProcessStep { number: string; title: string; description: string; icon: string; }"
};

const imageRegex = /https:\/\/images\.unsplash\.com\/[^"']+/g;
let matches;
const imagesSet = new Set(["/og-image.jpg", "/favicon.png"]);
while ((matches = imageRegex.exec(tsCode)) !== null) {
  imagesSet.add(matches[0]);
}

const exportData = {
  site_info: {
    company: data.companyInfo,
    global_texts: site_info.global_texts
  },
  data_structures: { interfaces },
  collections: {
    services: data.services,
    projects: data.projects,
    stats: data.stats,
    testimonials: data.testimonials,
    processSteps: data.processSteps,
    team: data.team,
    jobs: data.jobs,
    partners: data.partners,
    marqueeItems: data.marqueeItems,
    historyTimeline: data.historyTimeline,
    values: data.values,
    perks: data.perks
  },
  assets: {
    images: Array.from(imagesSet)
  }
};

fs.writeFileSync('art_plaster_export.json', JSON.stringify(exportData, null, 2));
console.log('Export successful');
