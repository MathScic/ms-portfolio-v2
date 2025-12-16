import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 hidden border-b bg-white lg:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">Mathieu</p>
          <p className="text-xs text-gray-600">
            Développeur Fullstack • Next.js
          </p>
        </div>

        <NavLinks />
      </div>
    </header>
  );
}
