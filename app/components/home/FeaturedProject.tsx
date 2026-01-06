"use client";

import { useState } from "react";
import ButtonLink from "../ui/ButtonLink";
import Container from "../ui/Container";
import Filters from "../ui/Filters";
import ProjectCard from "../projects/ProjectsCard";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  images: string;
  externalUrl?: string;
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "Next.js", label: "Next.js" },
  { id: "Vercel", label: "Vercel" },
  { id: "Supabase", label: "Supabase" },
];

const FEATURED: Project[] = [
  {
    title: "TaskPilot",
    description: "Gestion de tâches avec focus sécurité et bonnes pratiques",
    tags: ["Next.js", "Supabase", "RLS"],
    href: "/projects",
    externalUrl: "https://taskpilot-secure.vercel.app/",
    images: "/images/TaskPilot.png",
  },
  {
    title: "Trails des Vikings",
    description:
      "Site vitrine événementiel, contenu structuré, déploiement Vercel.",
    tags: ["Next.js", "SEO", "Vercel"],
    href: "/projects",
    externalUrl: "https://www.trail-des-vikings.fr",
    images: "/images/Trails-des-Vikings.png",
  },
  {
    title: "Inkspire Tatoo",
    description:
      "Site pour un tatoueur imagininaire avec NExt.js et deployer sur vercel",
    tags: ["Next.js", "Vercel"],
    href: "/projects",
    externalUrl: "https://inkspire-drab.vercel.app",
    images: "/images/Inkspire-tatoo.png",
  },
];

export default function FeaturedProject() {
  const [active, setActive] = useState("all");

  const filterred =
    active === "all"
      ? FEATURED
      : FEATURED.filter((p) => p.tags.includes(active));

  const getDesktopInitial = (idx: number) => {
    if (idx % 3 === 0) return { opacity: 0, x: -40, y: 0 };
    if (idx % 3 === 1) return { opacity: 0, x: 0, y: 24 };
    return { opacity: 0, x: 40, y: 0 };
  };

  const getMobileInitial = (idx: number) => ({
    opacity: 0,
    x: idx % 2 === 0 ? -40 : 40,
  });

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold">Projets</h2>
              <p className="mt-2 text-muted-foreground">
                Voici une sélection des projets récents
              </p>
            </div>

            <Filters filters={FILTERS} active={active} onChange={setActive} />
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {filterred.map((p, idx) => (
              <div key={p.title}>
                {/* Mobile */}
                <motion.div
                  className="md:hidden"
                  initial={getMobileInitial(idx)}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <ProjectCard
                    title={p.title}
                    description={p.description}
                    tags={p.tags}
                    href={p.href}
                    externalUrl={p.externalUrl}
                    image={p.images}
                  />
                </motion.div>

                {/* Desktop */}
                <motion.div
                  className="hidden md:block"
                  initial={getDesktopInitial(idx)}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <ProjectCard
                    title={p.title}
                    description={p.description}
                    tags={p.tags}
                    href={p.href}
                    externalUrl={p.externalUrl}
                    image={p.images}
                  />
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <ButtonLink href="/projects" variant="secondary" className="w-full">
              Voir tous les projets
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
