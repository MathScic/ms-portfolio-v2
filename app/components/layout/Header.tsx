import Link from "next/link";
import NavLinks from "./NavLinks";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-border/60 bg-background/70 backdrop-blur lg:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Aller à l’accueil"
        >
          <div className="flex items-center gap-2">
            <img
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              className="h-8 w-auto"
            />

            <span className="text-sm text-gray-500">{siteConfig.title}</span>
          </div>
        </Link>

        <NavLinks />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gray-200/70" />
      </div>
    </header>
  );
}
