export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string; // Chemins dans /public
  externalUrl?: string; // Liens vers le site
};

export const PROJECTS: Project[] = [
  {
    id: "taskpilot",
    title: "TaskPilot",
    description: "Gestion de tâches avec focus sécurité et bonnes pratiques",
    tags: ["Next.js", "Supabase", "RLS"],
    image: "/images/TaskPilot.png",
    externalUrl: "https://taskpilot-secure.vercel.app/",
  },
  {
    id: "trails-des-vikings",
    title: "Trails des Vikings",
    description:
      "Site vitrine événementiel, contenu structuré, déploiement Vercel.",
    tags: ["Next.js", "SEO", "Vercel"],
    image: "/images/Trails-des-Vikings.png",
    externalUrl: " https://www.trail-des-vikings.fr",
  },
  {
    id: "inkspire-tatoo",
    title: "InkSpire Tatoo",
    description:
      "Site vitrine pour un studio de tatouage (projet perso), contenu structuré, déploiement Vercel.",
    tags: ["Next.js", "Vercel, Tailwind"],
    image: "/images/InkSpire-Tatoo.png",
    externalUrl: "https://inkspire-tatoo.vercel.app/",
  },
];
