"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-3"
      >
        <p className="text-sm text-gray-600">
          Développeur Fullstack • Next.js • UI propre
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Je construis des interfaces modernes, rapides et maintenable
        </h1>

        <p className="max-w-2xl text-base text-gray-600">
          Projets concrets, code lisible, déploiement propre, et une attention
          particulière à l’expérience utilisateur.
        </p>
      </motion.div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Projets
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
