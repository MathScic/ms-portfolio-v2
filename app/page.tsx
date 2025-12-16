"use client";

import { motion } from "framer-motion";
import Hero from "./components/home/Hero";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <Hero />
    </section>
  );
}
