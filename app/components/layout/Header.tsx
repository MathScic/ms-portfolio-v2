import Link from "next/link";
import NavLinks from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-border/60 bg-background/70 backdrop-blur lg:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Aller à l’accueil"
        >
          <span className="text-base font-semibold text-gray-900 group-hover:opacity-80">
            Mathieu
          </span>
          <span className="text-xs text-gray-500 group-hover:opacity-80">
            Développeur Fullstack • Next.js
          </span>
        </Link>

        <NavLinks />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gray-200/70" />
      </div>
    </header>
  );
}
