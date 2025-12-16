import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-medium text-gray-900">
              Mathieu <span className="text-gray-400">- Portfolio</span>
            </p>
            <p className="text-xs text-gray-500">
              Développeur Fullstack • Next.js
            </p>
          </div>

          <nav className="flex gap-6">
            <Link
              href="https://github.com/MathScic"
              target="_blank"
              className="transition hover:text-[#f97316]"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/mathieu-scicluna-8346482ba/"
              target="_blank"
              className="transition hover:text-[#f97316]"
            >
              Linkedin
            </Link>
            <Link href="/contact" className="transition hover:text-[#f97316]">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Mathieu. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
