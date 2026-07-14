export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Diagnostic",
    description:
      "Visite sur site, écoute de vos besoins et analyse technique du bâti pour poser les bonnes bases.",
  },
  {
    index: "02",
    title: "Étude",
    description:
      "Plans, choix des matériaux et scénarios d'aménagement pensés avec vous, dans le respect de vos usages.",
  },
  {
    index: "03",
    title: "Devis",
    description:
      "Un chiffrage clair, détaillé et gratuit, sans surprise, avant tout engagement de votre part.",
  },
  {
    index: "04",
    title: "Réalisation",
    description:
      "Un chantier propre et coordonné, suivi par un interlocuteur unique du premier au dernier jour.",
  },
  {
    index: "05",
    title: "Livraison",
    description:
      "Réception des travaux, finitions soignées et accompagnement pour la prise en main de votre nouvel espace.",
  },
];

import type { LucideIcon } from "lucide-react";
import {
  Ruler,
  CalendarCheck,
  ShieldCheck,
  Users,
  MessageCircle,
  FileText,
  Zap as Reactivity,
  Award,
} from "lucide-react";

export type WhyUsItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const WHY_US: WhyUsItem[] = [
  {
    title: "Travail soigné",
    description: "Une exigence de finition constante, chantier après chantier.",
    icon: Ruler,
  },
  {
    title: "Respect des délais",
    description: "Un planning tenu, communiqué et suivi de bout en bout.",
    icon: CalendarCheck,
  },
  {
    title: "Respect des normes",
    description: "Des travaux conformes aux normes en vigueur, en toute sérénité.",
    icon: ShieldCheck,
  },
  {
    title: "Accompagnement personnalisé",
    description: "Un interlocuteur dédié qui vous suit du diagnostic à la livraison.",
    icon: Users,
  },
  {
    title: "Conseils",
    description: "Une expertise mise à votre service pour éclairer chaque choix.",
    icon: MessageCircle,
  },
  {
    title: "Devis gratuit",
    description: "Une étude chiffrée et détaillée, sans engagement.",
    icon: FileText,
  },
  {
    title: "Réactivité",
    description: "Des réponses rapides, à chaque étape de votre projet.",
    icon: Reactivity,
  },
  {
    title: "Qualité",
    description: "Des matériaux nobles et un savoir-faire artisanal reconnu.",
    icon: Award,
  },
];
