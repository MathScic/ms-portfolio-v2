"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-background text-center">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f97316]/15 via-transparent to-transparent" />
      <div className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-3xl space-y-4 text-center"
        >
          <p className="text-2xl font-semibold text-gray-600 ">
            Développeur Fullstack • Next.js
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="whitespace-nowrap">
              Bienvenue sur mon portfolio,
            </span>

            <span
              className="mt-2 block min-h-[1.2em] text-[#f97316]"
              aria-live="polite"
            >
              <Typewriter
                options={{
                  loop: true,
                  delay: 65,
                  deleteSpeed: 35,
                  cursor: "|",
                }}
                onInit={(tw) => {
                  tw.typeString("Mathieu Scicluna")
                    .pauseFor(900)
                    .deleteAll()
                    .typeString("Développeur Fullstack")
                    .pauseFor(1100)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </h1>

          <p className="mx-auto max-w-2xl  text-gray-600 text-xl font-semibold">
            Projets concrets, code lisible, déploiement propre, et une attention
            particulière à l’expérience utilisateur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row 
"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-[#f97316] px-10 py-3 text-xl font-bold text-white transition hover:opacity-90 hover:scale-[1.03] transition-transform"
          >
            Projets
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-10 py-3 text-xl font-bold text-gray-900 transition hover:border-gray-400 hover:scale-[1.03] transition-transform"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
