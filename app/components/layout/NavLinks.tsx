import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/competences", label: "Compétences" },
  { href: "/parcours", label: "Parcours" },
  { href: "/architecture-securite", label: "Architecture & Sécurité" },
  { href: "/contact", label: "Contact" },
];

type Props = {
  onNavigate?: () => void;
};

export default function NavLinks({ onNavigate }: Props) {
  return (
    <nav aria-label="Navigation Principal">
      <ul className="flex flex-col gap-1 lg:flex-row lg:gap-6">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
