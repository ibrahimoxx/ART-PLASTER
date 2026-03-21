// =====================
// TYPES
// =====================
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  surface: string;
  duration: string;
  client: string;
  location: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  gallery: string[];
  featured: boolean;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  } | null;
}

// =====================
// COMPANY INFO — DONNÉES OFFICIELLES
// =====================
export const companyInfo = {
  name: "ART PLASTER",
  legal: "ART PLASTER SARL — Capital social : 100.000,00 Dhs",
  director: "MABCHOUR MOHAMED",
  tagline: "L'Art du Plâtre au Service de l'Excellence",
  heroTagline: "L'Art du Plâtre au Service de l'Excellence",
  description: `Fondée par Mr MABCHOUR MOHAMED qui en assure la présidence, la société ART PLASTER est aujourd'hui un leader national en travaux de Plâtre. Forte de son expérience, ART PLASTER se caractérise par une démarche globale qui implique la connaissance de toutes les composantes des métiers de Plâtre, incluant l'anticipation des besoins pour aboutir à répondre à toutes les problématiques posées à chaque étape de la réalisation. Cultivant le souci de la perfection au sein d'une équipe de près de 45 personnes hautement qualifiées. ART PLASTER a signé quelques-unes des réalisations les plus marquantes de ces dernières décennies. Elle compte, parmi sa clientèle, des enseignes prestigieuses des secteurs de la finance, des assurances, de l'hôtellerie ou de la grande distribution.`,
  address: "Avenue Ali Bnou Abi Taleb, Sect C, Imm 15 (GH/5), Magasin N°6, Hay Rahma, Salé, Maroc",
  city: "Salé, Maroc",
  phone: "06.62.37.40.34",
  mobile: "06.64.01.90.87",
  email: "mabchour.med5@gmail.com",
  website: "www.artplaster.ma",
  hours: "Lun–Ven : 8h–18h | Sam : 8h–13h",
  rc: "38987",
  tp: "28402521",
  if_number: "60241200",
  cnss: "5338821",
  ice: "003442139000081",
  socials: {
    instagram: "https://instagram.com/artplaster.ma",
    facebook: "https://facebook.com/artplaster.ma",
    linkedin: "https://linkedin.com/company/art-plaster-ma",
    youtube: "https://youtube.com/@artplaster",
  },
};

// =====================
// STATS — DONNÉES RÉELLES
// =====================
export const stats = [
  { label: "Projets Réalisés",     value: 300, suffix: "+", icon: "Briefcase" },
  { label: "Personnes Qualifiées", value: 45,  suffix: "",  icon: "Users"     },
  { label: "Secteurs d'Activité",  value: 6,   suffix: "",  icon: "Building2" },
  { label: "Années d'Expérience",  value: 15,  suffix: "+", icon: "Award"     },
];

// =====================
// CATEGORIES
// =====================
export const categories = [
  "Tous",
  "Hôtellerie",
  "Santé",
  "Office",
  "Éducation",
  "Commercial",
  "Résidentiel",
  "Industriel",
];

// =====================
// MARQUEE KEYWORDS
// =====================
export const marqueeItems = [
  "Travaux de Plâtre",
  "Faux Plafonds",
  "Plafonds Décoratifs",
  "Isolation Thermique",
  "Isolation Acoustique",
  "Protection au Feu",
  "Construction Neuve",
  "Rénovation & Restauration",
  "Hôtellerie de Luxe",
  "Secteur Bancaire",
  "Projets de Santé",
  "Plâtrerie Technique",
  "Finitions Premium",
  "Leader National",
];

// =====================
// PROJECTS / PORTFOLIO — VRAIS PROJETS
// =====================
export const projects: Project[] = [

  // ═══════════════════════════════════════
  // HÔTELLERIE — 4 projets
  // ═══════════════════════════════════════
  {
    id: "hotel-barcelo-tanger",
    slug: "hotel-barcelo-tanger",
    title: "Hôtel Barceló Tanger",
    category: "Hôtellerie",
    surface: "À définir",
    duration: "À définir",
    client: "Barceló Hotels & Resorts",
    location: "Tanger, Maroc",
    year: "2023",
    description: "Réalisation complète des travaux de plâtre et finitions décoratives pour cet hôtel de luxe international. Plafonds ornementaux, cloisons, enduits de finition dans les chambres, couloirs et espaces communs.",
    tags: ["Hôtellerie", "Plafonds décoratifs", "Finitions luxe"],
    image: "/images/projects/Hotellerie__hotel_barcelo_tanger__001.jpg",
    gallery: [
      "/images/projects/Hotellerie__hotel_barcelo_tanger__001.jpg",
      "/images/projects/Hotellerie__hotel_barcelo_tanger__002.jpg",
      "/images/projects/Hotellerie__hotel_barcelo_tanger__003.jpg",
      "/images/projects/Hotellerie__hotel_barcelo_tanger__004.jpg",
    ],
    featured: true,
    testimonial: null,
  },
  {
    id: "hotel-ibis-rabat-agdal",
    slug: "hotel-ibis-rabat-agdal",
    title: "Hôtel Ibis Rabat Agdal",
    category: "Hôtellerie",
    surface: "À définir",
    duration: "À définir",
    client: "Accor Hotels",
    location: "Rabat, Maroc",
    year: "2023",
    description: "Travaux complets de plâtrerie et faux plafonds pour l'Hôtel Ibis Rabat Agdal. Réalisation des cloisons, enduits et finitions dans l'ensemble des espaces de l'hôtel.",
    tags: ["Hôtellerie", "Faux plafonds", "Plâtrerie"],
    image: "/images/projects/Hotellerie__hotel_ibis_rabat_agdal__001.jpg",
    gallery: [
      "/images/projects/Hotellerie__hotel_ibis_rabat_agdal__001.jpg",
    ],
    featured: true,
    testimonial: null,
  },
  {
    id: "hotel-ibis-agadir",
    slug: "hotel-ibis-agadir",
    title: "Hôtel Ibis Agadir",
    category: "Hôtellerie",
    surface: "À définir",
    duration: "À définir",
    client: "Accor Hotels",
    location: "Agadir, Maroc",
    year: "2023",
    description: "Réalisation des travaux de plâtre pour l'Hôtel Ibis Agadir. Plafonds, cloisons et enduits dans tous les espaces de l'établissement.",
    tags: ["Hôtellerie", "Plâtrerie", "Enduits"],
    image: "/images/projects/Hotellerie__hotel_ibis_agadir__001.jpg",
    gallery: [
      "/images/projects/Hotellerie__hotel_ibis_agadir__001.jpg",
      "/images/projects/Hotellerie__hotel_ibis_agadir__002.jpg",
      "/images/projects/Hotellerie__hotel_ibis_agadir__003.jpg",
      "/images/projects/Hotellerie__hotel_ibis_agadir__004.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "hotel-marriott-casa-sheraton",
    slug: "hotel-marriott-casa-sheraton",
    title: "Hôtel Marriott Casa — Sheraton",
    category: "Hôtellerie",
    surface: "À définir",
    duration: "À définir",
    client: "Marriott International",
    location: "Casablanca, Maroc",
    year: "2022",
    description: "Travaux de plâtrerie de prestige pour le Sheraton Casablanca. Plafonds ornementaux, moulures décoratives et enduits de finition haute gamme pour l'un des hôtels les plus emblématiques de Casablanca.",
    tags: ["Hôtellerie", "Luxe", "Plafonds ornementaux", "Marriott"],
    image: "/images/projects/Hotellerie__hotel_marriott_casa_sheraton__001.jpg",
    gallery: [
      "/images/projects/Hotellerie__hotel_marriott_casa_sheraton__001.jpg",
      "/images/projects/Hotellerie__hotel_marriott_casa_sheraton__002.jpg",
      "/images/projects/Hotellerie__hotel_marriott_casa_sheraton__003.jpg",
      "/images/projects/Hotellerie__hotel_marriott_casa_sheraton__004.jpg",
      "/images/projects/Hotellerie__hotel_marriott_casa_sheraton__005.jpg",
      "/images/projects/Hotellerie__hotel_marriott_casa_sheraton__006.jpg",
    ],
    featured: true,
    testimonial: null,
  },

  // ═══════════════════════════════════════
  // SANTÉ — 6 projets
  // ═══════════════════════════════════════
  {
    id: "hopital-prive-el-jadida",
    slug: "hopital-prive-el-jadida",
    title: "Hôpital Privé El Jadida",
    category: "Santé",
    surface: "À définir",
    duration: "À définir",
    client: "Groupe Santé Privé",
    location: "El Jadida, Maroc",
    year: "2022",
    description: "Réalisation des travaux de plâtrerie et faux plafonds pour cet établissement de santé. Finitions spéciales pour environnement médical : étanchéité, isolation acoustique et thermique.",
    tags: ["Santé", "Faux plafonds", "Isolation", "Médical"],
    image: "/images/projects/Sante__hopital_prive_el_jadida__001.jpg",
    gallery: [
      "/images/projects/Sante__hopital_prive_el_jadida__001.jpg",
      "/images/projects/Sante__hopital_prive_el_jadida__002.jpg",
      "/images/projects/Sante__hopital_prive_el_jadida__003.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "idfs-marrakech",
    slug: "idfs-marrakech",
    title: "IDFS Marrakech",
    category: "Santé",
    surface: "À définir",
    duration: "À définir",
    client: "IDFS",
    location: "Marrakech, Maroc",
    year: "2022",
    description: "Travaux de plâtre et finitions pour établissement de santé à Marrakech. Plafonds techniques, cloisons et enduits conformes aux normes sanitaires internationales.",
    tags: ["Santé", "Plâtrerie technique", "Normes sanitaires"],
    image: "/images/projects/Sante__idfs_marrakech__001.jpg",
    gallery: [
      "/images/projects/Sante__idfs_marrakech__001.jpg",
      "/images/projects/Sante__idfs_marrakech__002.jpg",
      "/images/projects/Sante__idfs_marrakech__003.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "idfs-casablanca",
    slug: "idfs-casablanca",
    title: "IDFS Casablanca",
    category: "Santé",
    surface: "À définir",
    duration: "À définir",
    client: "IDFS",
    location: "Casablanca, Maroc",
    year: "2022",
    description: "Réalisation complète des travaux de plâtrerie pour établissement médical à Casablanca. Plafonds techniques, cloisons et enduits haute performance.",
    tags: ["Santé", "Plâtrerie", "Construction médicale"],
    image: "/images/projects/Sante__idfs_casablanca__001.jpg",
    gallery: [
      "/images/projects/Sante__idfs_casablanca__001.jpg",
      "/images/projects/Sante__idfs_casablanca__002.jpg",
      "/images/projects/Sante__idfs_casablanca__003.jpg",
      "/images/projects/Sante__idfs_casablanca__004.jpg",
      "/images/projects/Sante__idfs_casablanca__005.jpg",
      "/images/projects/Sante__idfs_casablanca__006.jpg",
      "/images/projects/Sante__idfs_casablanca__007.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "fondation-lalla-salma-chop-fes",
    slug: "fondation-lalla-salma-chop-fes",
    title: "Fondation Lalla Salma — CHOP Fès",
    category: "Santé",
    surface: "À définir",
    duration: "À définir",
    client: "Fondation Lalla Salma",
    location: "Fès, Maroc",
    year: "2021",
    description: "Travaux de plâtrerie pour le Centre d'Hématologie et d'Oncologie Pédiatrique de Fès. Plafonds techniques, cloisons et finitions dans les services médicaux de cette fondation royale.",
    tags: ["Santé", "Fondation royale", "Plâtrerie technique", "CHOP"],
    image: "/images/projects/Sante__fondation_lalla_salma_fes__001.jpg",
    gallery: [
      "/images/projects/Sante__fondation_lalla_salma_fes__001.jpg",
      "/images/projects/Sante__fondation_lalla_salma_fes__002.jpg",
      "/images/projects/Sante__fondation_lalla_salma_fes__003.jpg",
      "/images/projects/Sante__fondation_lalla_salma_fes__004.jpg",
    ],
    featured: true,
    testimonial: null,
  },
  {
    id: "centre-oncologie-laayoune",
    slug: "centre-oncologie-laayoune",
    title: "Centre Régional d'Oncologie de Laâyoune",
    category: "Santé",
    surface: "À définir",
    duration: "À définir",
    client: "Ministère de la Santé",
    location: "Laâyoune, Maroc",
    year: "2021",
    description: "Réalisation des plafonds et finitions plâtre pour le Centre Régional d'Oncologie de Laâyoune. Projet public de grande envergure pour le secteur de la santé.",
    tags: ["Santé", "Secteur public", "Plâtrerie", "Oncologie"],
    image: "/images/projects/Sante__centre_oncologie_laayoune__001.jpg",
    gallery: [
      "/images/projects/Sante__centre_oncologie_laayoune__001.jpg",
      "/images/projects/Sante__centre_oncologie_laayoune__002.jpg",
      "/images/projects/Sante__centre_oncologie_laayoune__003.jpg",
      "/images/projects/Sante__centre_oncologie_laayoune__004.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "clinique-anti-age",
    slug: "clinique-anti-age",
    title: "Clinique Anti-Âge",
    category: "Santé",
    surface: "À définir",
    duration: "À définir",
    client: "Clinique Privée",
    location: "Maroc",
    year: "2023",
    description: "Finitions haut de gamme pour clinique esthétique. Plafonds design, enduits de finition luxe et cloisons techniques adaptés à un environnement médical premium.",
    tags: ["Santé", "Luxe", "Finitions premium", "Esthétique"],
    image: "/images/projects/Sante__clinique_anti_age__001.jpg",
    gallery: ["/images/projects/Sante__clinique_anti_age__001.jpg"],
    featured: false,
    testimonial: null,
  },

  // ═══════════════════════════════════════
  // OFFICE / BANQUES — 8 projets
  // ═══════════════════════════════════════
  {
    id: "societe-generale-siege-social",
    slug: "societe-generale-siege-social",
    title: "Société Générale — Siège Social",
    category: "Office",
    surface: "À définir",
    duration: "À définir",
    client: "Société Générale Maroc",
    location: "Maroc",
    year: "2022",
    description: "Travaux de plâtrerie et finitions pour le siège social de Société Générale Maroc. Plafonds décoratifs, cloisons et enduits de prestige dans les espaces de direction et d'accueil.",
    tags: ["Office", "Banque", "Prestige", "Siège social"],
    image: "/images/projects/Office__societe_generale_siege_social__001.jpg",
    gallery: [
      "/images/projects/Office__societe_generale_siege_social__001.jpg",
      "/images/projects/Office__societe_generale_siege_social__002.jpg",
      "/images/projects/Office__societe_generale_siege_social__003.jpg",
      "/images/projects/Office__societe_generale_siege_social__004.jpg",
      "/images/projects/Office__societe_generale_siege_social__005.jpg",
      "/images/projects/Office__societe_generale_siege_social__006.jpg",
    ],
    featured: true,
    testimonial: null,
  },
  {
    id: "agence-agadir-hassan-ii",
    slug: "agence-agadir-hassan-ii",
    title: "Agence Agadir Hassan II",
    category: "Office",
    surface: "À définir",
    duration: "À définir",
    client: "Banque Marocaine",
    location: "Agadir, Maroc",
    year: "2023",
    description: "Réalisation des finitions plâtre pour agence bancaire à Agadir. Plafonds, cloisons et enduits selon les standards premium du secteur financier.",
    tags: ["Office", "Agence bancaire", "Finitions"],
    image: "/images/projects/Office__agence_agadir_hassan_ii__001.jpg",
    gallery: [
      "/images/projects/Office__agence_agadir_hassan_ii__001.jpg",
      "/images/projects/Office__agence_agadir_hassan_ii__002.jpg",
      "/images/projects/Office__agence_agadir_hassan_ii__003.jpg",
      "/images/projects/Office__agence_agadir_hassan_ii__004.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "agence-el-jadida",
    slug: "agence-el-jadida",
    title: "Agence El Jadida",
    category: "Office",
    surface: "À définir",
    duration: "À définir",
    client: "Banque Marocaine",
    location: "El Jadida, Maroc",
    year: "2023",
    description: "Travaux de plâtrerie complète pour agence bancaire à El Jadida. Faux plafonds, cloisons légères et enduits de finition.",
    tags: ["Office", "Agence bancaire", "Plâtrerie"],
    image: "/images/projects/Office__agence_el_jadida__001.jpg",
    gallery: [
      "/images/projects/Office__agence_el_jadida__001.jpg",
      "/images/projects/Office__agence_el_jadida__002.jpg",
      "/images/projects/Office__agence_el_jadida__003.jpg",
      "/images/projects/Office__agence_el_jadida__004.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "agence-meknes-baladiya",
    slug: "agence-meknes-baladiya",
    title: "Agence Meknès Baladiya",
    category: "Office",
    surface: "À définir",
    duration: "À définir",
    client: "Banque Marocaine",
    location: "Meknès, Maroc",
    year: "2022",
    description: "Réalisation des faux plafonds et cloisons pour agence bancaire à Meknès. Finitions soignées pour espace de réception clientèle.",
    tags: ["Office", "Agence bancaire", "Faux plafonds"],
    image: "/images/projects/Office__agence_meknes_baladiya__001.jpg",
    gallery: [
      "/images/projects/Office__agence_meknes_baladiya__001.jpg",
      "/images/projects/Office__agence_meknes_baladiya__002.jpg",
      "/images/projects/Office__agence_meknes_baladiya__003.jpg",
      "/images/projects/Office__agence_meknes_baladiya__004.jpg",
      "/images/projects/Office__agence_meknes_baladiya__005.jpg",
      "/images/projects/Office__agence_meknes_baladiya__006.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "agence-ouarzazate",
    slug: "agence-ouarzazate",
    title: "Agence Ouarzazate",
    category: "Office",
    surface: "À définir",
    duration: "À définir",
    client: "Banque Marocaine",
    location: "Ouarzazate, Maroc",
    year: "2022",
    description: "Travaux de plâtrerie et faux plafonds pour agence bancaire à Ouarzazate. Réalisation complète des cloisons et enduits intérieurs.",
    tags: ["Office", "Agence bancaire", "Plâtrerie"],
    image: "/images/projects/Office__agence_ouarzazate__001.jpg",
    gallery: [
      "/images/projects/Office__agence_ouarzazate__001.jpg",
      "/images/projects/Office__agence_ouarzazate__002.jpg",
      "/images/projects/Office__agence_ouarzazate__003.jpg",
      "/images/projects/Office__agence_ouarzazate__004.jpg",
      "/images/projects/Office__agence_ouarzazate__005.jpg",
      "/images/projects/Office__agence_ouarzazate__006.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "agence-sale-el-jadida",
    slug: "agence-sale-el-jadida",
    title: "Agence Salé El Jadida",
    category: "Office",
    surface: "À définir",
    duration: "À définir",
    client: "Banque Marocaine",
    location: "Salé, Maroc",
    year: "2022",
    description: "Travaux de finitions plâtre pour agence bancaire à Salé. Plafonds et enduits de qualité premium.",
    tags: ["Office", "Agence bancaire"],
    image: "/images/projects/Office__agence_sale_el_jadida__001.jpg",
    gallery: [
      "/images/projects/Office__agence_sale_el_jadida__001.jpg",
      "/images/projects/Office__agence_sale_el_jadida__002.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "agence-souk-agadir",
    slug: "agence-souk-agadir",
    title: "Agence Souk Agadir",
    category: "Office",
    surface: "À définir",
    duration: "À définir",
    client: "Banque Marocaine",
    location: "Agadir, Maroc",
    year: "2022",
    description: "Réalisation des travaux de plâtre pour agence bancaire au Souk d'Agadir.",
    tags: ["Office", "Agence bancaire"],
    image: "/images/projects/Office__agence_souk_agadir__001.jpg",
    gallery: [
      "/images/projects/Office__agence_souk_agadir__001.jpg",
      "/images/projects/Office__agence_souk_agadir__002.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "cat-assurance-transport",
    slug: "cat-assurance-transport",
    title: "CAT — Compagnie d'Assurance Transport",
    category: "Office",
    surface: "À définir",
    duration: "À définir",
    client: "CAT Assurance",
    location: "Maroc",
    year: "2022",
    description: "Réalisation des travaux de plâtre pour les locaux de la Compagnie d'Assurance Transport. Faux plafonds, cloisons et enduits de finition dans les espaces de bureaux et réception.",
    tags: ["Office", "Assurance", "Plâtrerie", "Bureaux"],
    image: "/images/projects/Office__cat_assurance_transport__001.jpg",
    gallery: [
      "/images/projects/Office__cat_assurance_transport__001.jpg",
      "/images/projects/Office__cat_assurance_transport__002.jpg",
      "/images/projects/Office__cat_assurance_transport__003.jpg",
      "/images/projects/Office__cat_assurance_transport__004.jpg",
      "/images/projects/Office__cat_assurance_transport__005.jpg",
      "/images/projects/Office__cat_assurance_transport__006.jpg",
      "/images/projects/Office__cat_assurance_transport__007.jpg",
      "/images/projects/Office__cat_assurance_transport__008.jpg",
      "/images/projects/Office__cat_assurance_transport__009.jpg",
      "/images/projects/Office__cat_assurance_transport__010.jpg",
      "/images/projects/Office__cat_assurance_transport__011.jpg",
      "/images/projects/Office__cat_assurance_transport__012.jpg",
      "/images/projects/Office__cat_assurance_transport__013.jpg",
      "/images/projects/Office__cat_assurance_transport__014.jpg",
    ],
    featured: false,
    testimonial: null,
  },

  // ═══════════════════════════════════════
  // ÉDUCATION / CULTURE — 2 projets
  // ═══════════════════════════════════════
  {
    id: "fondation-mohamed-vi-rabat",
    slug: "fondation-mohamed-vi-rabat",
    title: "Fondation Mohamed VI Rabat",
    category: "Éducation",
    surface: "À définir",
    duration: "À définir",
    client: "Fondation Mohamed VI",
    location: "Rabat, Maroc",
    year: "2021",
    description: "Travaux de plâtrerie pour la Fondation Mohamed VI. Plafonds ornementaux, finitions décoratives et enduits de prestige dans ce bâtiment institutionnel de référence nationale.",
    tags: ["Éducation", "Fondation royale", "Prestige", "Institutionnel"],
    image: "/images/projects/Education__fondation_mohamed_vi_rabat__001.jpg",
    gallery: [
      "/images/projects/Education__fondation_mohamed_vi_rabat__001.jpg",
      "/images/projects/Education__fondation_mohamed_vi_rabat__002.jpg",
      "/images/projects/Education__fondation_mohamed_vi_rabat__003.jpg",
      "/images/projects/Education__fondation_mohamed_vi_rabat__004.jpg",
      "/images/projects/Education__fondation_mohamed_vi_rabat__005.jpg",
      "/images/projects/Education__fondation_mohamed_vi_rabat__006.jpg",
    ],
    featured: true,
    testimonial: null,
  },
  {
    id: "musee-mohammed-vi-arts-contemporains",
    slug: "musee-mohammed-vi-arts-contemporains",
    title: "Musée Mohammed VI des Arts Contemporains",
    category: "Éducation",
    surface: "À définir",
    duration: "À définir",
    client: "Fondation Nationale des Musées",
    location: "Maroc",
    year: "2023",
    description: "Réalisation des finitions plâtre pour ce musée de référence nationale. Plafonds techniques muséographiques, cloisons et enduits adaptés aux exigences de conservation et d'exposition des œuvres d'art.",
    tags: ["Culture", "Musée", "Plâtrerie technique", "Art contemporain"],
    image: "/images/projects/Education__musee_mohammed_vi__001.jpg",
    gallery: [
      "/images/projects/Education__musee_mohammed_vi__001.jpg",
      "/images/projects/Education__musee_mohammed_vi__002.jpg",
      "/images/projects/Education__musee_mohammed_vi__003.jpg",
      "/images/projects/Education__musee_mohammed_vi__004.jpg",
      "/images/projects/Education__musee_mohammed_vi__005.jpg",
      "/images/projects/Education__musee_mohammed_vi__006.jpg",
      "/images/projects/Education__musee_mohammed_vi__007.jpg",
      "/images/projects/Education__musee_mohammed_vi__008.jpg",
      "/images/projects/Education__musee_mohammed_vi__009.jpg",
      "/images/projects/Education__musee_mohammed_vi__010.jpg",
    ],
    featured: true,
    testimonial: null,
  },

  // ═══════════════════════════════════════
  // COMMERCIAL — 3 projets
  // ═══════════════════════════════════════
  {
    id: "renault-maroc",
    slug: "renault-maroc",
    title: "Renault Maroc",
    category: "Commercial",
    surface: "À définir",
    duration: "À définir",
    client: "Renault Maroc",
    location: "Maroc",
    year: "2023",
    description: "Travaux de plâtrerie et finitions pour les espaces commerciaux de Renault Maroc. Showroom, espaces d'accueil et bureaux conformes aux standards visuels internationaux de la marque.",
    tags: ["Commercial", "Showroom", "Automobile", "Renault"],
    image: "/images/projects/Commercial__renault_maroc__001.jpg",
    gallery: ["/images/projects/Commercial__renault_maroc__001.jpg"],
    featured: false,
    testimonial: null,
  },
  {
    id: "showroom-audi",
    slug: "showroom-audi",
    title: "Showroom Audi",
    category: "Commercial",
    surface: "À définir",
    duration: "À définir",
    client: "Audi Maroc",
    location: "Maroc",
    year: "2023",
    description: "Réalisation des finitions haut de gamme pour showroom Audi. Plafonds design, enduits de finition luxe conformes à l'identité premium de la marque Audi.",
    tags: ["Commercial", "Showroom", "Luxe", "Automobile", "Audi"],
    image: "/images/projects/Commercial__showroom_audi__001.jpg",
    gallery: [
      "/images/projects/Commercial__showroom_audi__001.jpg",
      "/images/projects/Commercial__showroom_audi__002.jpg",
      "/images/projects/Commercial__showroom_audi__003.jpg",
      "/images/projects/Commercial__showroom_audi__004.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "boutique-marionnaud",
    slug: "boutique-marionnaud",
    title: "Boutique Marionnaud",
    category: "Commercial",
    surface: "À définir",
    duration: "À définir",
    client: "Marionnaud",
    location: "Maroc",
    year: "2022",
    description: "Finitions plâtre pour boutique Marionnaud. Plafonds design et enduits de finition adaptés à l'univers cosmétique luxe de l'enseigne.",
    tags: ["Commercial", "Retail", "Luxe", "Cosmétique"],
    image: "/images/projects/Commercial__boutique_marionnaud__001.jpg",
    gallery: [
      "/images/projects/Commercial__boutique_marionnaud__001.jpg",
      "/images/projects/Commercial__boutique_marionnaud__002.jpg",
      "/images/projects/Commercial__boutique_marionnaud__003.jpg",
    ],
    featured: false,
    testimonial: null,
  },

  // ═══════════════════════════════════════
  // RÉSIDENTIEL — 2 projets
  // ═══════════════════════════════════════
  {
    id: "residentiel-prestige",
    slug: "residentiel-prestige",
    title: "Projets Résidentiels de Prestige",
    category: "Résidentiel",
    surface: "Variable",
    duration: "Variable",
    client: "Clients Privés",
    location: "Maroc",
    year: "2023",
    description: "ART PLASTER réalise des travaux de plâtrerie de haute qualité pour villas et résidences de prestige. Plafonds décoratifs, corniches, rosaces et enduits de finition sur-mesure.",
    tags: ["Résidentiel", "Villa", "Prestige", "Sur-mesure"],
    image: "/images/projects/Residentiel__residentiel_divers__001.jpg",
    gallery: [
      "/images/projects/Residentiel__residentiel_divers__001.jpg",
      "/images/projects/Residentiel__residentiel_divers__002.jpg",
      "/images/projects/Residentiel__residentiel_divers__003.jpg",
      "/images/projects/Residentiel__residentiel_divers__004.jpg",
      "/images/projects/Residentiel__residentiel_divers__005.jpg",
      "/images/projects/Residentiel__residentiel_divers__006.jpg",
      "/images/projects/Residentiel__residentiel_divers__010.jpg",
      "/images/projects/Residentiel__residentiel_divers__015.jpg",
      "/images/projects/Residentiel__residentiel_divers__020.jpg",
    ],
    featured: false,
    testimonial: null,
  },
  {
    id: "reception-societe-riche-bois",
    slug: "reception-societe-riche-bois",
    title: "Réception Société Riche Bois",
    category: "Résidentiel",
    surface: "À définir",
    duration: "À définir",
    client: "Société Riche Bois",
    location: "Maroc",
    year: "2022",
    description: "Réalisation des travaux de plâtrerie et finitions décoratives pour l'espace de réception de Société Riche Bois. Plafonds ornementaux, corniches et enduits de prestige.",
    tags: ["Résidentiel", "Réception", "Décoration", "Prestige"],
    image: "/images/projects/Residentiel__reception_societe_riche_bois__001.jpg",
    gallery: [
      "/images/projects/Residentiel__reception_societe_riche_bois__001.jpg",
      "/images/projects/Residentiel__reception_societe_riche_bois__002.jpg",
      "/images/projects/Residentiel__reception_societe_riche_bois__003.jpg",
      "/images/projects/Residentiel__reception_societe_riche_bois__004.jpg",
      "/images/projects/Residentiel__reception_societe_riche_bois__005.jpg",
    ],
    featured: false,
    testimonial: null,
  },
];

// =====================
// SERVICES DATA
// =====================
export const services = [
  {
    id: "faux-plafonds",
    slug: "faux-plafonds",
    category: "Plâtrerie",
    icon: "Crown",
    title: "Faux Plafonds",
    subtitle: "Majesté architecturale au plafond",
    description:
      "Plafonds décoratifs en plâtre, plafonds techniques et plafonds suspendus réalisés avec précision. Corniches, rosaces et moulures sur-mesure pour hôtels, bureaux et résidences.",
    features: ["Plâtre sculpté", "Corniches & Rosaces", "Faux plafonds suspendus", "Plafonds ornementaux"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: "enduits-decoratifs",
    slug: "enduits-decoratifs",
    category: "Finitions",
    icon: "Layers",
    title: "Enduits Décoratifs",
    subtitle: "Finitions murales d'exception",
    description:
      "Enduits de finition intérieure et extérieure, enduits de protection et enduits décoratifs premium pour tous types de projets. Qualité irréprochable et durabilité garantie.",
    features: ["Enduits de finition", "Enduits de protection", "Enduits texturés", "Finitions lisses"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    id: "cloisons-legeres",
    slug: "cloisons-legeres",
    category: "Construction",
    icon: "Building2",
    title: "Cloisons Légères",
    subtitle: "Partitionnement technique et esthétique",
    description:
      "Cloisons en placo-plâtre et cloisons mixtes pour tous types d'espaces. Solutions techniques adaptées aux normes acoustiques et thermiques des projets médicaux, hôteliers et tertiaires.",
    features: ["Cloisons placo-plâtre", "Isolation acoustique", "Isolation thermique", "Cloisons mixtes"],
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800",
  },
  {
    id: "isolation",
    slug: "isolation",
    category: "Technique",
    icon: "Shield",
    title: "Isolation",
    subtitle: "Protection thermique, acoustique & feu",
    description:
      "Isolation thermique et acoustique haute performance. Solutions certifiées de protection contre le feu pour tout type de bâtiment : hôtels, hôpitaux, établissements scolaires.",
    features: ["Isolation thermique", "Isolation acoustique", "Protection au feu", "Systèmes brevetés"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    id: "construction-renovation",
    slug: "construction-renovation",
    category: "Travaux",
    icon: "HardHat",
    title: "Construction & Rénovation",
    subtitle: "Neuf ou rénovation, même excellence",
    description:
      "Travaux de plâtrerie pour construction neuve et rénovation de bâtiments existants. Restauration de bâtiments anciens avec respect des techniques et matériaux d'origine.",
    features: ["Construction neuve", "Rénovation", "Restauration", "Travaux tous corps d'état"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
  {
    id: "grands-projets",
    slug: "grands-projets",
    category: "Premium",
    icon: "Hotel",
    title: "Grands Projets",
    subtitle: "Hôtellerie, santé, tertiaire de prestige",
    description:
      "Partenaire de confiance des plus grands maîtres d'ouvrage marocains et internationaux. Gestion complète de chantiers de grande envergure avec des équipes de 10 à 50 personnes certifiées.",
    features: ["Hôtellerie de luxe", "Bâtiments médicaux", "Projets institutionnels", "Espaces tertiaires"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
  },
];

// =====================
// PROCESS STEPS — DONNÉES RÉELLES
// =====================
export const processSteps = [
  {
    number: "01",
    title: "Étude & Devis",
    description:
      "Analyse approfondie de votre projet, visite technique sur site, relevés métrés et proposition commerciale détaillée sans engagement sous 48h.",
    icon: "FileSearch",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Création des plans de détail, sélection des matériaux et finitions, maquettes et validation avec votre architecte ou maître d'ouvrage.",
    icon: "Palette",
  },
  {
    number: "03",
    title: "Réalisation",
    description:
      "Exécution par nos équipes certifiées de 10 à 50 personnes, avec contrôle qualité rigoureux à chaque étape selon les normes en vigueur.",
    icon: "HardHat",
  },
  {
    number: "04",
    title: "Livraison",
    description:
      "Réception contradictoire, levée des réserves et garantie sur toutes nos réalisations. Satisfaction client garantie à 100%.",
    icon: "CheckCircle2",
  },
];

// =====================
// PARTNERS — VRAIS CLIENTS
// =====================
export const partners = [
  { name: "Société Générale",      slug: "societe-generale"      },
  { name: "Accor Hotels",          slug: "accor"                  },
  { name: "Barceló Hotels",        slug: "barcelo"                },
  { name: "Marriott Sheraton",     slug: "marriott"               },
  { name: "Fondation Lalla Salma", slug: "fondation-lalla-salma"  },
  { name: "Fondation Mohamed VI",  slug: "fondation-med-vi"       },
  { name: "Renault Maroc",         slug: "renault"                },
  { name: "Audi Maroc",            slug: "audi"                   },
];

// =====================
// TESTIMONIALS
// =====================
export const testimonials = [
  {
    id: "1",
    quote:
      "ART PLASTER a réalisé les travaux de plâtrerie de notre hôtel avec une qualité et un professionnalisme remarquables. Leur équipe maîtrise parfaitement les exigences des projets hôteliers de luxe.",
    author: "Direction Technique",
    role: "Barceló Tanger",
    company: "Barceló Hotels & Resorts",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    id: "2",
    quote:
      "Partenaire fiable sur plusieurs de nos agences au Maroc. ART PLASTER respecte les délais, les budgets et livre des travaux de qualité irréprochable.",
    author: "Service Immobilier",
    role: "Société Générale Maroc",
    company: "Société Générale",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    id: "3",
    quote:
      "Les équipes d'ART PLASTER ont parfaitement maîtrisé les contraintes techniques des espaces médicaux. Un savoir-faire reconnu dans notre secteur.",
    author: "Direction des Travaux",
    role: "IDFS Marrakech",
    company: "IDFS",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
];

// =====================
// TEAM
// =====================
export const team = [
  {
    name: "MABCHOUR MOHAMED",
    role: "Président & Directeur Général",
    bio: "Fondateur d'ART PLASTER, Mr MABCHOUR MOHAMED dirige l'entreprise avec une vision claire : faire d'ART PLASTER le leader national incontesté des travaux de plâtre au Maroc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "Direction Technique",
    role: "Directeur Technique",
    bio: "Notre directeur technique supervise la qualité de toutes nos réalisations et gère les chantiers grands projets à travers le Maroc avec rigueur et expertise.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    name: "Direction Commerciale",
    role: "Responsable Commerciale",
    bio: "Notre équipe commerciale accompagne nos clients depuis le premier contact jusqu'à la livraison, garantissant un suivi personnalisé sur chaque projet.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    name: "Équipe Chantier",
    role: "Chefs d'Équipe Certifiés",
    bio: "45 artisans et techniciens hautement qualifiés, formés aux dernières normes de plâtrerie et capables de gérer des chantiers de grande envergure.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
];

// =====================
// HISTORY TIMELINE
// =====================
export const historyTimeline = [
  {
    year: "2008",
    title: "Fondation d'ART PLASTER",
    description:
      "Mr MABCHOUR MOHAMED fonde ART PLASTER SARL à Salé avec une équipe d'artisans spécialisés en travaux de plâtre et finitions.",
  },
  {
    year: "2012",
    title: "Premiers Grands Projets Hôteliers",
    description:
      "ART PLASTER réalise ses premiers projets hôteliers de grande envergure, établissant sa réputation dans le secteur hôtelier marocain.",
  },
  {
    year: "2015",
    title: "Développement du Secteur Bancaire",
    description:
      "Début du partenariat avec les grandes banques marocaines pour la réalisation de leurs agences et sièges sociaux à travers le Maroc.",
  },
  {
    year: "2018",
    title: "Expansion Nationale",
    description:
      "ART PLASTER intervient désormais sur tout le territoire marocain, de Laâyoune à Tanger, avec des équipes déployables rapidement.",
  },
  {
    year: "2021",
    title: "Projets Institutionnels de Prestige",
    description:
      "Réalisation des travaux pour la Fondation Mohamed VI et la Fondation Lalla Salma — CHOP Fès, consacrant le statut de partenaire de référence.",
  },
  {
    year: "2023",
    title: "Leader National Confirmé",
    description:
      "Plus de 300 projets livrés, 45 personnes qualifiées, 6 secteurs d'activité. ART PLASTER est la référence nationale en travaux de plâtre.",
  },
];

// =====================
// VALUES
// =====================
export const values = [
  {
    icon: "Star",
    title: "Excellence Artisanale",
    description:
      "Chaque centimètre carré est traité avec la même rigueur et la même passion. Notre standard minimum est la perfection.",
  },
  {
    icon: "Shield",
    title: "Intégrité & Fiabilité",
    description:
      "Devis transparents, délais respectés, engagement tenu. La confiance de nos clients est notre actif le plus précieux.",
  },
  {
    icon: "Users",
    title: "Capital Humain",
    description:
      "Nos 45 artisans sont notre fierté. Formation continue, conditions de travail exemplaires et partage de la valeur créée.",
  },
  {
    icon: "Building2",
    title: "Expertise Sectorielle",
    description:
      "Finance, hôtellerie, santé, éducation, commerce et résidentiel — ART PLASTER maîtrise les exigences techniques de chaque secteur.",
  },
];

// =====================
// JOBS / CAREERS
// =====================
export const jobs = [
  {
    id: "1",
    title: "Chef d'Équipe Plâtrerie",
    type: "CDI",
    location: "Salé / National",
    department: "Production",
    description:
      "Nous recherchons un chef d'équipe expérimenté pour superviser nos chantiers de plâtrerie sur des projets hôteliers, médicaux et tertiaires de prestige.",
    requirements: [
      "Minimum 5 ans d'expérience en travaux de plâtre",
      "Maîtrise des faux plafonds, cloisons et enduits",
      "Capacité à gérer une équipe de 5 à 15 personnes",
      "Permis B obligatoire",
    ],
    benefits: ["Salaire compétitif", "Formation continue", "Véhicule de service", "Mutuelle"],
  },
  {
    id: "2",
    title: "Technicien Plâtrerie Senior",
    type: "CDI",
    location: "Salé / National",
    department: "Production",
    description:
      "Rejoignez notre équipe technique pour intervenir sur des chantiers d'envergure nationale. Expertise en plâtrerie technique requise.",
    requirements: [
      "Diplôme en bâtiment ou formation équivalente",
      "Maîtrise des techniques de plâtrerie moderne",
      "Expérience dans les projets médicaux ou hôteliers appréciée",
      "Disponibilité pour déplacements",
    ],
    benefits: ["Projets stimulants", "Évolution rapide", "Congés généreux", "Primes de chantier"],
  },
  {
    id: "3",
    title: "Commercial B2B — BTP & Tertiaire",
    type: "CDI",
    location: "Salé / Casablanca / National",
    department: "Commercial",
    description:
      "Développez notre portefeuille clients dans les secteurs hôtelier, bancaire et médical. Vous serez l'ambassadeur d'ART PLASTER auprès des décideurs.",
    requirements: [
      "3 ans minimum en vente B2B dans la construction",
      "Réseau établi dans l'industrie du bâtiment marocaine",
      "Excellentes capacités de négociation",
      "Disponibilité pour déplacements fréquents",
    ],
    benefits: ["Commission attractive", "Voiture de fonction", "Carte essence", "Remboursement frais"],
  },
];

// =====================
// PERKS / BENEFITS
// =====================
export const perks = [
  { icon: "GraduationCap", title: "Formation Continue", description: "Programmes de formation interne chaque année" },
  { icon: "HeartHandshake", title: "Mutuelle", description: "Couverture santé pour nos collaborateurs" },
  { icon: "TrendingUp", title: "Évolution Rapide", description: "Parcours de carrière clair avec revalorisations annuelles" },
  { icon: "Sun", title: "Congés Généreux", description: "Congés payés annuels selon ancienneté" },
  { icon: "Car", title: "Mobilité", description: "Véhicule ou indemnités kilométriques selon le poste" },
  { icon: "Award", title: "Primes de Performance", description: "Système de bonus lié aux résultats de chantier" },
];
