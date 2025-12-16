"use client";

import { useState } from "react";
import NavLinks from "./NavLinks";

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-4 py-3 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          className="rounded-lg px-3 py-2 text-sm hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
        >
          ☰
        </button>

        <span className="text-sm font-semibold">Mathieu</span>
        <span className="w-10" />
      </header>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          />
          <aside className="aboslute left-0 top-0h-full w-80 bg-white p-4 shaddow-xl">
            <div className="mb-4 flex justify-between">
              <span className="text-sm font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="rounded-lg px-3 py-2 hover-bg-gray-100"
              >
                ✕
              </button>
            </div>

            <NavLinks onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}
    </>
  );
}
