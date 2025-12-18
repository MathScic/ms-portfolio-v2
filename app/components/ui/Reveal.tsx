"use client";

import { motion } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";

export default function Reveal({
  children,
  from = "up",
  className = "",
}: {
  children: React.ReactNode;
  from?: Direction;
  className?: string;
}) {
  const x = from === "left" ? -40 : from === "right" ? 40 : 0;
  const y = from === "up" ? 20 : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
