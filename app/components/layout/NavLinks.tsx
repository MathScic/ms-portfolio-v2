"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/competences", label: "Compétences" },
  { href: "/parcours", label: "Parcours" },
  { href: "/architecture-securite", label: "Architecture & Sécurité" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Navigation principale">
      <ul className="flex flex-col gap-2 lg:flex-row lg:gap-8">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="group relative inline-block px-1 py-1 text-sm font-medium text-gray-800 transition-colors duration-200 hover:text-[#f97316]"
            >
              {item.label}

              <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#f97316] transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
