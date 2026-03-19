// =====================
// SERVICES DATA
// =====================
export const services = [
  {
    id: "enduit-decoatif",
    slug: "enduit-decoratif",
    category: "Résidentiel",
    icon: "Layers",
    title: "Enduits Décoratifs",
    subtitle: "Finitions murales d'exception",
    description:
      "Nos enduits décoratifs alliant tradition artisanale et techniques modernes offrent des surfaces aux textures uniques, du béton ciré au tadelakt en passant par les stuccos vénitiens.",
    features: ["Tadelakt marocain", "Béton ciré", "Stucco vénitien", "Marmorino"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  },
  {
    id: "plafonds-decoratifs",
    slug: "plafonds-decoratifs",
    category: "Hôtelier",
    icon: "Crown",
    title: "Plafonds Décoratifs",
    subtitle: "Majesté architecturale au plafond",
    description:
      "De l'architecture andalouse aux motifs géométriques contemporains, nos plafonds en plâtre sculpté transforment chaque espace en œuvre d'art unique.",
    features: ["Plâtre sculpté", "Moucharabieh", "Rosaces & Corniches", "Faux plafonds"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: "renovation-patrimoine",
    slug: "renovation-patrimoine",
    category: "Patrimoine",
    icon: "Building2",
    title: "Rénovation Patrimoine",
    subtitle: "Restauration du passé pour l'avenir",
    description:
      "Spécialisés dans la restauration de bâtiments historiques et de riads ancestraux, nous préservons l'authenticité architecturale du patrimoine marocain.",
    features: ["Riads & Palais", "Sites classés", "Techniques ancestrales", "Matériaux traditionnels"],
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800",
  },
  {
    id: "construction-hoteliere",
    slug: "construction-hoteliere",
    category: "Hôtelier",
    icon: "Hotel",
    title: "Construction Hôtelière",
    subtitle: "Excellence pour l'industrie du luxe",
    description:
      "Partenaire de confiance des palaces et hôtels cinq étoiles, nous réalisons des espaces de réception, suites et restaurants aux finitions irréprochables.",
    features: ["Halls de réception", "Suites luxe", "Restaurants gastronomiques", "Spas & Hammams"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    id: "espaces-commerciaux",
    slug: "espaces-commerciaux",
    category: "Commercial",
    icon: "Store",
    title: "Espaces Commerciaux",
    subtitle: "Design qui convertit et inspire",
    description:
      "Boutiques, showrooms, centres commerciaux et bureaux de standing — nous créons des environnements commerciaux qui reflètent l'identité de marque de nos clients.",
    features: ["Boutiques de luxe", "Showrooms", "Bureaux premium", "Centres commerciaux"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
  },
  {
    id: "projets-residentiels",
    slug: "projets-residentiels",
    category: "Résidentiel",
    icon: "Home",
    title: "Résidences Privées",
    subtitle: "Votre maison, notre chef-d'œuvre",
    description:
      "Villas luxueuses, appartements de prestige — chaque résidence privée est traitée comme une commande personnalisée, avec une attention méticuleuse aux détails.",
    features: ["Villas de luxe", "Appartements prestige", "Demeures familiales", "Résidences secondaires"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
];

// =====================
// PROJECTS / PORTFOLIO
// =====================
export const projects = [
  {
    id: "1",
    slug: "palais-royal-marrakech",
    title: "Palais Royal — Marrakech",
    category: "Hôtelier",
    surface: "4 200 m²",
    duration: "14 mois",
    client: "Groupe Palaces du Maroc",
    location: "Marrakech, Maroc",
    year: "2023",
    description:
      "Rénovation complète des espaces de réception et des suites royales du Palais. Réalisation de plafonds en plâtre sculpté d'inspiration andalouse avec dorures à la feuille, tadelakt dans les hammams et stucs vénitiens dans les salons.",
    tags: ["Plafonds sculptés", "Tadelakt", "Dorures", "Hammam"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900",
    beforeImage: "https://images.unsplash.com/photo-1617783862702-bff65c9fa2fe?w=900",
    afterImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900",
    featured: true,
    testimonial: {
      quote:
        "ART PLASTER a transformé notre vision en réalité avec une précision et un savoir-faire qui dépassent les standards internationaux les plus élevés.",
      author: "Mohammed Al-Fassi",
      role: "Directeur Général, Palaces du Maroc",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
  },
  {
    id: "2",
    slug: "hotel-cinq-etoiles-rabat",
    title: "Grand Hôtel — Rabat",
    category: "Hôtelier",
    surface: "6 800 m²",
    duration: "22 mois",
    client: "Intercontinental Hotels Group",
    location: "Rabat, Maroc",
    year: "2023",
    description:
      "Partenaire principal pour la finition de ce palace cinq étoiles. Livraison de 180 chambres et suites, lobby monumental de 1 200 m², 3 restaurants et espaces de conférence.",
    tags: ["Béton ciré", "Enduits texturés", "Hall monumental"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900",
    beforeImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900",
    afterImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900",
    featured: true,
    testimonial: {
      quote:
        "Un niveau d'artisanat exceptionnel, une équipe professionnelle et un respect irréprochable des délais. ART PLASTER est notre partenaire privilégié.",
      author: "Sarah Mitchell",
      role: "Project Manager, IHG",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    },
  },
  {
    id: "3",
    slug: "villa-prestige-casablanca",
    title: "Villa Prestige — Casablanca",
    category: "Résidentiel",
    surface: "1 200 m²",
    duration: "8 mois",
    client: "Famille Benali",
    location: "Casablanca, Maroc",
    year: "2024",
    description:
      "Conception et réalisation complète des finitions d'une villa d'exception. Plafonds à caissons sculptés, murs en tadelakt de couleur, terrasses en béton ciré.",
    tags: ["Tadelakt", "Plafonds caissons", "Béton ciré"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900",
    beforeImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900",
    featured: false,
    testimonial: {
      quote:
        "Notre maison est devenue une véritable œuvre d'art. Chaque superficie, chaque détail respire le raffinement. Nous sommes comblés.",
      author: "Nadia Benali",
      role: "Propriétaire",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
  },
  {
    id: "4",
    slug: "riad-fes-restauration",
    title: "Riad Historique — Fès",
    category: "Patrimoine",
    surface: "850 m²",
    duration: "11 mois",
    client: "Fondation Culturelle du Maroc",
    location: "Fès el-Bali, Maroc",
    year: "2022",
    description:
      "Restauration d'un riad du XVIIIe siècle dans la médina de Fès. Reconstruction fidèle des zelliges, tadelakt des appartements et restauration des plâtres sculptés anciens.",
    tags: ["Restauration", "Zelliges", "Plâtres anciens", "Patrimoine"],
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=900",
    beforeImage: "https://images.unsplash.com/photo-1617783862702-bff65c9fa2fe?w=900",
    afterImage: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=900",
    featured: false,
    testimonial: null,
  },
  {
    id: "5",
    slug: "centre-commercial-agadir",
    title: "Centre Commercial — Agadir",
    category: "Commercial",
    surface: "12 000 m²",
    duration: "18 mois",
    client: "Label'Vie Group",
    location: "Agadir, Maroc",
    year: "2022",
    description:
      "Finitions complètes d'un centre commercial de standing. Enduits décoratifs dans les allées, revêtements en béton ciré dans les boutiques, plafonds architecturaux dans les espaces communs.",
    tags: ["Commercial", "Béton ciré", "Enduits décoratifs"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900",
    beforeImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900",
    afterImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900",
    featured: false,
    testimonial: null,
  },
  {
    id: "6",
    slug: "spa-wellness-tanger",
    title: "Spa & Wellness — Tanger",
    category: "Hôtelier",
    surface: "980 m²",
    duration: "5 mois",
    client: "Sofitel Tanger",
    location: "Tanger, Maroc",
    year: "2024",
    description:
      "Réalisation des espaces bien-être d'un hôtel de luxe. Hammams en tadelakt noir mat, piscines intérieures en béton ciré, salles de soins en enduits terre naturelle.",
    tags: ["Spa", "Hammam", "Tadelakt", "Béton ciré"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900",
    beforeImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900",
    afterImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900",
    featured: false,
    testimonial: null,
  },
];

// =====================
// STATS
// =====================
export const stats = [
  { label: "Projets Réalisés", value: 380, suffix: "+", icon: "Briefcase" },
  { label: "Hôtels de Luxe", value: 45, suffix: "+", icon: "Building2" },
  { label: "Années d'Expérience", value: 18, suffix: "", icon: "Award" },
  { label: "Clients Satisfaits", value: 260, suffix: "+", icon: "Users" },
];

// =====================
// TESTIMONIALS
// =====================
export const testimonials = [
  {
    id: "1",
    quote:
      "ART PLASTER a transformé notre vision en réalité avec une précision et un savoir-faire qui dépassent les standards internationaux. Leur équipe est d'un professionnalisme exemplaire.",
    author: "Mohammed Al-Fassi",
    role: "Directeur Général",
    company: "Palaces du Maroc",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    id: "2",
    quote:
      "Un niveau d'artisanat rare, des délais respectés à la lettre et une équipe à l'écoute permanente. ART PLASTER est notre partenaire de confiance depuis 5 ans pour tous nos projets hôteliers au Maroc.",
    author: "Sarah Mitchell",
    role: "Project Manager",
    company: "IHG Group",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    id: "3",
    quote:
      "La restauration de notre riad par ART PLASTER est un véritable chef-d'œuvre. Ils ont su préserver l'âme architecturale du bâtiment tout en apportant une finition digne des plus grands palais.",
    author: "Dr. Youssef Chakroun",
    role: "Directeur",
    company: "Fondation Culturelle du Maroc",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
];

// =====================
// PROCESS STEPS
// =====================
export const processSteps = [
  {
    number: "01",
    title: "Étude & Devis",
    description:
      "Analyse approfondie de votre projet, visite technique, relevés métrés et proposition commerciale détaillée sans engagement.",
    icon: "FileSearch",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Création des plans de détail, sélection des matériaux et finitions, maquettes 3D et validation avec votre architecte.",
    icon: "Palette",
  },
  {
    number: "03",
    title: "Réalisation",
    description:
      "Exécution par nos équipes certifiées, avec contrôle qualité rigoureux à chaque étape selon les normes internationales.",
    icon: "HardHat",
  },
  {
    number: "04",
    title: "Livraison",
    description:
      "Réception contradictoire, levée des réserves et garantie décennale sur toutes nos réalisations. Satisfaction garantie.",
    icon: "CheckCircle2",
  },
];

// =====================
// TEAM
// =====================
export const team = [
  {
    name: "Khalid Bennani",
    role: "Fondateur & Directeur Général",
    bio: "Artisan plasticien de formation, Khalid a fondé ART PLASTER en 2006 avec la vision de fusionner l'artisanat marocain traditionnel et les standards de l'architecture contemporaine.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "Fatima Zahra Idrissi",
    role: "Directrice Artistique",
    bio: "Architecte d'intérieur diplômée, Fatima dirige notre département créatif avec une expertise reconnue dans les finitions de luxe et la restauration du patrimoine.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "Ahmed Tazi",
    role: "Directeur Technique",
    bio: "Ingénieur civil avec 15 ans d'expérience, Ahmed supervise la qualité de toutes nos réalisations et gère les chantiers grands projets à travers le Maroc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    name: "Leila Mansouri",
    role: "Responsable Commerciale",
    bio: "Spécialiste du développement business dans l'industrie de la construction de luxe, Leila accompagne nos clients depuis le premier contact jusqu'à la livraison.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
];

// =====================
// JOBS / CAREERS
// =====================
export const jobs = [
  {
    id: "1",
    title: "Chef d'Équipe Enduits Décoratifs",
    type: "CDI",
    location: "Temara, Maroc",
    department: "Production",
    description:
      "Nous recherchons un chef d'équipe expérimenté pour superviser nos chantiers d'enduits décoratifs sur des projets hôteliers de prestige.",
    requirements: [
      "Minimum 5 ans d'expérience en enduits décoratifs",
      "Maîtrise du tadelakt, béton ciré et stucco vénitien",
      "Capacité à gérer une équipe de 5 à 10 personnes",
      "Permis B obligatoire",
    ],
    benefits: ["Salaire compétitif", "Formation continue", "Véhicule de service", "Mutuelle"],
  },
  {
    id: "2",
    title: "Architecte d'Intérieur Junior",
    type: "CDI",
    location: "Temara, Maroc",
    department: "Design",
    description:
      "Rejoignez notre département créatif pour concevoir des espaces d'exception en collaboration avec les plus grands architectes marocains et internationaux.",
    requirements: [
      "Diplôme en architecture d'intérieur ou design",
      "Maîtrise d'AutoCAD, SketchUp et Suite Adobe",
      "Sensibilité aux arts décoratifs marocains",
      "Niveau d'anglais professionnel",
    ],
    benefits: ["Projets stimulants", "Mentoring senior", "Congés généreux", "Formation internationale"],
  },
  {
    id: "3",
    title: "Commercial B2B — Secteur Hôtelier",
    type: "CDI",
    location: "Casablanca / National",
    department: "Commercial",
    description:
      "Développez notre portefeuille clients dans le secteur hôtelier de luxe. Vous serez l'ambassadeur d'ART PLASTER auprès des décideurs de l'industrie.",
    requirements: [
      "3 ans minimum en vente B2B dans la construction ou le luxe",
      "Réseau établi dans l'industrie hôtelière marocaine",
      "Excellentes capacités de négociation",
      "Disponibilité pour déplacements fréquents",
    ],
    benefits: ["Commission attractive", "Voiture de fonction", "Carte essence", "Remboursement frais"],
  },
];

// =====================
// COMPANY INFO
// =====================
export const companyInfo = {
  name: "ART PLASTER",
  tagline: "L'Art du Plâtre au Service de l'Excellence",
  description:
    "Fondée en 2006 à Temara, ART PLASTER est la référence marocaine en matière d'enduits décoratifs et de plafonds ornementaux pour les projets de prestige.",
  address: "Zone Industrielle Temara, Lot 47, Temara 12000, Maroc",
  city: "Temara, Maroc",
  phone: "+212 537 74 00 00",
  mobile: "+212 661 234 567",
  email: "contact@artplaster.ma",
  website: "www.artplaster.ma",
  hours: "Lun–Ven : 8h–18h | Sam : 8h–13h",
  socials: {
    instagram: "https://instagram.com/artplaster.ma",
    facebook: "https://facebook.com/artplaster.ma",
    linkedin: "https://linkedin.com/company/art-plaster-ma",
    youtube: "https://youtube.com/@artplaster",
  },
};

// =====================
// PARTNERS
// =====================
export const partners = [
  { name: "Marriott International", slug: "marriott" },
  { name: "Accor Hotels", slug: "accor" },
  { name: "Four Seasons", slug: "four-seasons" },
  { name: "Sofitel", slug: "sofitel" },
  { name: "Hyatt Hotels", slug: "hyatt" },
  { name: "Label'Vie", slug: "labelvie" },
  { name: "OCP Group", slug: "ocp" },
  { name: "CDG Immobilier", slug: "cdg" },
];

// =====================
// MARQUEE KEYWORDS
// =====================
export const marqueeItems = [
  "Enduits Décoratifs",
  "Plafonds Ornementaux",
  "Tadelakt Marocain",
  "Béton Ciré",
  "Stucco Vénitien",
  "Restauration Patrimoniale",
  "Projets Hôteliers",
  "Artisanat de Luxe",
  "Finitions d'Exception",
  "Marmorino",
  "Gypserie Traditionnelle",
  "Constructions de Prestige",
];

// =====================
// HISTORY TIMELINE
// =====================
export const historyTimeline = [
  {
    year: "2006",
    title: "Fondation d'ART PLASTER",
    description:
      "Khalid Bennani fonde ART PLASTER à Temara avec une équipe de cinq artisans spécialisés en enduits décoratifs traditionnels.",
  },
  {
    year: "2010",
    title: "Premier Grand Projet Hôtelier",
    description:
      "ART PLASTER réalise les finitions du Sofitel Rabat Jardin des Roses, marquant notre entrée dans le secteur hôtelier de luxe.",
  },
  {
    year: "2014",
    title: "Expansion Nationale",
    description:
      "Ouverture de dépôts régionaux à Casablanca, Marrakech et Agadir. L'équipe atteint 80 collaborateurs qualifiés.",
  },
  {
    year: "2018",
    title: "Certification ISO & Innovation",
    description:
      "Obtention de la certification ISO 9001 et lancement de notre laboratoire de recherche en matériaux décoratifs durables.",
  },
  {
    year: "2022",
    title: "Référence du Secteur",
    description:
      "ART PLASTER devient le partenaire officiel de l'Association Marocaine des Hôteliers. Plus de 300 projets livrés.",
  },
  {
    year: "2024",
    title: "Vision 2030",
    description:
      "Lancement de notre programme de formation next-gen et partenariats avec des institutions internationales de design.",
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
      "Chaque centimètre carré est traité avec la même rigueur et la même passion. Notre standard minimum est le chef-d'œuvre.",
  },
  {
    icon: "Shield",
    title: "Intégrité & Fiabilité",
    description:
      "Devis transparents, délais respectés, engagement tenu. La confiance de nos clients est notre actif le plus précieux.",
  },
  {
    icon: "Leaf",
    title: "Développement Durable",
    description:
      "Matériaux naturels, techniques écologiques, réduction de l'empreinte carbone — l'excellence doit être responsable.",
  },
  {
    icon: "Users",
    title: "Capital Humain",
    description:
      "Nos artisans sont notre fierté. Formation continue, conditions de travail exemplaires et partage de la valeur créée.",
  },
];

// =====================
// PERKS / BENEFITS
// =====================
export const perks = [
  { icon: "GraduationCap", title: "Formation Continue", description: "Programmes de formation interne et internationale chaque année" },
  { icon: "HeartHandshake", title: "Mutuelle Premium", description: "Couverture santé complète pour vous et votre famille" },
  { icon: "TrendingUp", title: "Évolution Rapide", description: "Parcours de carrière clair avec revalorisations annuelles" },
  { icon: "Sun", title: "Congés Généreux", description: "26 jours de congés payés + jours exceptionnels" },
  { icon: "Car", title: "Mobilité", description: "Véhicule ou indemnités kilométriques selon le poste" },
  { icon: "Award", title: "Primes de Performance", description: "Système de bonus trimestriel lié aux résultats d'équipe" },
];
