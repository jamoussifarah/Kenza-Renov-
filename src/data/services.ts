import type { LucideIcon } from "lucide-react";
import {
  Paintbrush,
  Zap,
  LayoutGrid,
  Hammer,
  Droplets,
  Home,
  Building2,
  Sofa,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const SERVICES: Service[] = [
  {
    title: "Peinture",
    description:
      "Finitions satinées ou mates, harmonies sur mesure, préparation des supports dans les règles de l'art.",
    icon: Paintbrush,
    image: "/images/realisations/maubeuge/15-volet-interieur-detail.jpg",
  },
  {
    title: "Électricité",
    description:
      "Mise aux normes, tableaux électriques, éclairage sur mesure et domotique pour un intérieur sûr et intelligent.",
    icon: Zap,
    image: "/images/realisations/faubourg-du-temple/03-cuisine-plan-cuisson.jpg",
  },
  {
    title: "Revêtements de sols",
    description:
      "Parquets massifs, pose sur lambourdes, carrelage grand format — chaque sol raconte une histoire.",
    icon: LayoutGrid,
    image: "/images/realisations/maubeuge/02-sejour-parquet-cheminee.jpg",
  },
  {
    title: "Petite maçonnerie",
    description:
      "Ouvertures de murs porteurs, création de trémies, reprises structurelles réalisées avec précision.",
    icon: Hammer,
    image: "/images/realisations/gabriel-peri/01-escalier-suspendu-vue-ensemble.jpg",
  },
  {
    title: "Plomberie",
    description:
      "Réseaux d'eau, remplacement de chaudières, salles d'eau repensées dans le moindre détail.",
    icon: Droplets,
    image: "/images/realisations/maubeuge/12-salle-de-bain-double-vasque-marbre.jpg",
  },
  {
    title: "Rénovation complète",
    description:
      "De la démolition aux finitions : un interlocuteur unique pour l'ensemble de votre projet.",
    icon: Home,
    image: "/images/realisations/gaite/02-cuisine-escalier-noir.jpg",
  },
  {
    title: "Bureaux",
    description:
      "Aménagement d'espaces de travail élégants et fonctionnels, pensés pour l'image de votre entreprise.",
    icon: Building2,
    image: "/images/realisations/gaite/04-couloir-escalier-bois-noir.jpg",
  },
  {
    title: "Aménagement intérieur",
    description:
      "Mobilier sur mesure, dressings, bibliothèques et rangements dessinés pour épouser vos espaces.",
    icon: Sofa,
    image: "/images/realisations/maubeuge/06-bibliotheque-sur-mesure.jpg",
  },
];
