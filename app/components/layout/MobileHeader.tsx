"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-4 py-3 lg:hidden">
        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          className="rounded-lg px-3 py-2 text-sm hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
          whileTap={{ scale: 0.96 }}
        >
          ☰
        </motion.button>

        <span className="text-sm font-semibold">Mathieu</span>
        <span className="w-10" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* Overlay fade */}
            <motion.button
              type="button"
              aria-label="Fermer le menu"
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{ duration: 0.15 }}
            />

            {/* Drawer slide */}
            <motion.aside
              className="absolute left-0 top-0 h-full w-80 bg-white p-4 shadow-xl"
              variants={{
                hidden: { x: -320 },
                show: { x: 0 },
              }}
              transition={{ type: "spring", stiffness: 420, damping: 36 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold">Menu</span>

                <motion.button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer"
                  className="rounded-lg px-3 py-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
                  whileTap={{ scale: 0.96 }}
                >
                  ✕
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                <NavLinks onNavigate={() => setOpen(false)} />
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
