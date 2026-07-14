export type Category =
  | "Appartement"
  | "Maison"
  | "Cuisine"
  | "Salle de bain"
  | "Escalier"
  | "Parquet"
  | "Peinture"
  | "Mobilier sur mesure";

export type RealisationImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Realisation = {
  slug: string;
  title: string;
  location: string;
  surface: string;
  excerpt: string;
  categories: Category[];
  prestations: string[];
  materiaux: string[];
  cover: RealisationImage;
  gallery: RealisationImage[];
};

export const REALISATIONS: Realisation[] = [
  {
    slug: "faubourg-du-temple",
    title: "Faubourg du Temple",
    location: "Rue du Faubourg du Temple, Paris 11",
    surface: "70 m²",
    excerpt:
      "Rénovation et reconfiguration complète d'un appartement parisien : cuisine déplacée, mobilier sur mesure et menuiseries neuves.",
    categories: ["Appartement", "Cuisine", "Mobilier sur mesure", "Peinture"],
    prestations: [
      "Démolitions de conduits",
      "Remplacement de menuiseries extérieures",
      "Déplacement de la cuisine",
      "Mobilier sur mesure sur base IKEA",
      "Peintures",
      "Électricité",
      "Plomberie",
      "Remplacement de la chaudière",
      "Pose de la cuisine",
    ],
    materiaux: [
      "Façades laquées mat sur mesure",
      "Caissons chêne massif vernis mat incolore",
      "Habillages médium laqué",
      "Crédence peinture satinée bleu nuit",
    ],
    cover: {
      src: "/images/realisations/faubourg-du-temple/01-cuisine-vue-ensemble.jpg",
      width: 4400,
      height: 3264,
      alt: "Cuisine sur mesure blanche avec crédence bleu nuit, appartement Faubourg du Temple",
    },
    gallery: [
      { src: "/images/realisations/faubourg-du-temple/01-cuisine-vue-ensemble.jpg", width: 4400, height: 3264, alt: "Vue d'ensemble de la cuisine blanche et bleu nuit" },
      { src: "/images/realisations/faubourg-du-temple/02-cuisine-plan-evier.jpg", width: 4384, height: 3257, alt: "Plan de travail et évier, détail de la crédence bleu nuit" },
      { src: "/images/realisations/faubourg-du-temple/03-cuisine-plan-cuisson.jpg", width: 4395, height: 3263, alt: "Zone de cuisson intégrée sous éclairage LED" },
      { src: "/images/realisations/faubourg-du-temple/04-cuisine-angle-large.jpg", width: 4896, height: 3264, alt: "Vue large de la cuisine en L avec parquet ancien" },
      { src: "/images/realisations/faubourg-du-temple/05-chambre-vue-fenetres.jpg", width: 4392, height: 3262, alt: "Chambre avec fenêtres à petits carreaux et balcon parisien" },
      { src: "/images/realisations/faubourg-du-temple/06-rangement-niche-terracotta.jpg", width: 4400, height: 3264, alt: "Rangement sur mesure avec niche terracotta" },
      { src: "/images/realisations/faubourg-du-temple/07-rangement-facade-complete.jpg", width: 4896, height: 3264, alt: "Façade complète du dressing sur mesure blanc et terracotta" },
      { src: "/images/realisations/faubourg-du-temple/08-rangement-detail-niche.jpg", width: 4390, height: 3264, alt: "Détail de la niche terracotta et des poignées cuir" },
      { src: "/images/realisations/faubourg-du-temple/09-rangement-vue-fenetre.jpg", width: 4392, height: 3260, alt: "Rangement sur mesure avec vue sur fenêtre parisienne" },
    ],
  },
  {
    slug: "gabriel-peri",
    title: "Gabriel Péri",
    location: "Avenue Gabriel Péri, Malakoff",
    surface: "90 m²",
    excerpt:
      "Création d'un duplex par ouverture de plancher et fabrication sur mesure d'un escalier suspendu en acier et chêne massif.",
    categories: ["Appartement", "Escalier", "Salle de bain"],
    prestations: [
      "Ouverture de trémie dans un plancher bois",
      "Reprise structurelle acier, création trémie et chevêtre",
      "Fabrication sur mesure et soudure sur place de l'escalier",
      "Fabrication du socle en acier thermolaqué en atelier",
      "Peintures",
      "Électricité",
      "Plomberie",
      "Réfection d'une salle de bain",
    ],
    materiaux: [
      "Structure acier thermolaqué blanc mat",
      "Marches en chêne massif",
      "Socle acier sur vérins réglables",
    ],
    cover: {
      src: "/images/realisations/gabriel-peri/01-escalier-suspendu-vue-ensemble.jpg",
      width: 3235,
      height: 4356,
      alt: "Escalier suspendu en acier blanc et chêne massif, duplex Gabriel Péri",
    },
    gallery: [
      { src: "/images/realisations/gabriel-peri/01-escalier-suspendu-vue-ensemble.jpg", width: 3235, height: 4356, alt: "Vue d'ensemble de l'escalier suspendu" },
      { src: "/images/realisations/gabriel-peri/02-escalier-vue-laterale.jpg", width: 3069, height: 4136, alt: "Vue latérale de l'escalier et de son socle" },
      { src: "/images/realisations/gabriel-peri/03-escalier-socle-detail.jpg", width: 3089, height: 4159, alt: "Détail du socle en acier thermolaqué" },
      { src: "/images/realisations/gabriel-peri/04-escalier-marches-chene.jpg", width: 3233, height: 4356, alt: "Marches en chêne massif suspendues" },
      { src: "/images/realisations/gabriel-peri/05-escalier-structure-acier.jpg", width: 3157, height: 4250, alt: "Structure acier fine soudée sur place" },
      { src: "/images/realisations/gabriel-peri/06-escalier-vue-plongeante.jpg", width: 3233, height: 4356, alt: "Vue plongeante sur les marches et le parquet" },
      { src: "/images/realisations/gabriel-peri/07-escalier-detail-marche.jpg", width: 1336, height: 991, alt: "Détail d'assemblage d'une marche" },
    ],
  },
  {
    slug: "gaite",
    title: "Gaîté",
    location: "Immeuble des années 60",
    surface: "—",
    excerpt:
      "Réfection totale d'un appartement dans un immeuble des années 60 : ouverture de porteur béton, menuiserie sur mesure et escalier acier.",
    categories: ["Appartement", "Cuisine", "Salle de bain", "Escalier"],
    prestations: [
      "Ouverture de porteur béton armé",
      "Création d'un plancher",
      "Modification des implantations des pièces humides",
      "Menuiserie et placards sur mesure (Oberflex)",
      "Électricité",
      "Plomberie",
      "Cuisine avec plan de travail granit",
      "Escalier sur mesure en acier thermolaqué",
    ],
    materiaux: [
      "Placage bois Oberflex",
      "Plan de travail granit",
      "Structure escalier acier noir thermolaqué",
      "Carrelage grand format",
    ],
    cover: {
      src: "/images/realisations/gaite/02-cuisine-escalier-noir.jpg",
      width: 4536,
      height: 3032,
      alt: "Cuisine et escalier acier noir sur mesure, appartement Gaîté",
    },
    gallery: [
      { src: "/images/realisations/gaite/01-entree-placards-bois.jpg", width: 4759, height: 3173, alt: "Entrée avec placards en placage bois sur mesure" },
      { src: "/images/realisations/gaite/02-cuisine-escalier-noir.jpg", width: 4536, height: 3032, alt: "Cuisine ouverte avec escalier en acier noir" },
      { src: "/images/realisations/gaite/03-cuisine-ilot-central.jpg", width: 4658, height: 3105, alt: "Îlot central noir de la cuisine" },
      { src: "/images/realisations/gaite/04-couloir-escalier-bois-noir.jpg", width: 4946, height: 3299, alt: "Couloir menant à l'escalier bois et acier noir" },
      { src: "/images/realisations/gaite/05-couloir-placards-miroir.jpg", width: 4946, height: 3298, alt: "Couloir avec placards miroir sur mesure" },
      { src: "/images/realisations/gaite/06-salle-de-bain-double-vasque.jpg", width: 3241, height: 2748, alt: "Salle de bain avec double vasque et miroir sur mesure" },
    ],
  },
  {
    slug: "maubeuge",
    title: "Maubeuge",
    location: "Rue Maubeuge, Paris 09",
    surface: "120 m²",
    excerpt:
      "Rénovation d'un appartement haussmannien : ouverture de mur porteur, verrière métallique sur mesure et réfection complète du parquet.",
    categories: ["Appartement", "Cuisine", "Parquet", "Salle de bain", "Mobilier sur mesure"],
    prestations: [
      "Démolitions de conduits",
      "Ouverture de mur porteur (ossature métal dans pan de bois existant)",
      "Déplacement de la cuisine",
      "Mobilier sur mesure sur base IKEA",
      "Verrière métallique sur mesure",
      "Peintures",
      "Électricité",
      "Plomberie",
      "Remplacement de la chaudière avec déplacement",
      "Pose de la cuisine",
      "Réfection de parquet sur lambourdes",
    ],
    materiaux: [
      "Verrière acier noir sur mesure",
      "Parquet chevron chêne massif",
      "Plan de travail quartz",
      "Moulures et cheminée d'origine restaurées",
    ],
    cover: {
      src: "/images/realisations/maubeuge/02-sejour-parquet-cheminee.jpg",
      width: 4896,
      height: 3264,
      alt: "Séjour haussmannien avec parquet chevron et cheminée d'origine",
    },
    gallery: [
      { src: "/images/realisations/maubeuge/01-bureau-niche-sur-mesure.jpg", width: 3264, height: 4394, alt: "Bureau intégré dans une niche sur mesure" },
      { src: "/images/realisations/maubeuge/02-sejour-parquet-cheminee.jpg", width: 4896, height: 3264, alt: "Séjour avec parquet chevron et cheminée d'époque" },
      { src: "/images/realisations/maubeuge/03-cuisine-verriere-vue-sejour.jpg", width: 3264, height: 4397, alt: "Verrière métallique entre cuisine et séjour" },
      { src: "/images/realisations/maubeuge/04-cuisine-plan-vasque.jpg", width: 3158, height: 4251, alt: "Plan de travail et vasque doré de la cuisine" },
      { src: "/images/realisations/maubeuge/05-verriere-metallique-detail.jpg", width: 4896, height: 3264, alt: "Détail de la verrière métallique noire sur mesure" },
      { src: "/images/realisations/maubeuge/06-bibliotheque-sur-mesure.jpg", width: 3264, height: 4394, alt: "Bibliothèque et rangements sur mesure" },
      { src: "/images/realisations/maubeuge/07-poignees-bois-detail.jpg", width: 3264, height: 4398, alt: "Détail des poignées bois sur mesure" },
      { src: "/images/realisations/maubeuge/08-cheminee-bibliotheque-vitree.jpg", width: 3264, height: 4398, alt: "Cheminée d'origine et bibliothèque vitrée" },
      { src: "/images/realisations/maubeuge/09-etageres-tv-sur-mesure.jpg", width: 3259, height: 4394, alt: "Étagères et meuble TV sur mesure" },
      { src: "/images/realisations/maubeuge/10-couloir-placards-laques.jpg", width: 3264, height: 4394, alt: "Couloir avec placards laqués sur mesure" },
      { src: "/images/realisations/maubeuge/11-poignee-bois-detail.jpg", width: 3264, height: 4398, alt: "Détail poignée bois sculptée" },
      { src: "/images/realisations/maubeuge/12-salle-de-bain-double-vasque-marbre.jpg", width: 3264, height: 4892, alt: "Salle de bain double vasque en marbre" },
      { src: "/images/realisations/maubeuge/13-salle-de-bain-douche-detail.jpg", width: 3264, height: 4008, alt: "Détail de la douche à l'italienne" },
      { src: "/images/realisations/maubeuge/14-dressing-sur-mesure.jpg", width: 3264, height: 4398, alt: "Dressing sur mesure avec poignées laiton" },
      { src: "/images/realisations/maubeuge/15-volet-interieur-detail.jpg", width: 3264, height: 4394, alt: "Volet intérieur peint sur mesure" },
    ],
  },
];

export const CATEGORIES: Category[] = [
  "Appartement",
  "Maison",
  "Cuisine",
  "Salle de bain",
  "Escalier",
  "Parquet",
  "Peinture",
  "Mobilier sur mesure",
];
