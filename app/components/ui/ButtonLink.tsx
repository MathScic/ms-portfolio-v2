import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-10 py-2 text-base sm:text-lg font-bold transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-black/10";

  const styles =
    variant === "primary"
      ? "bg-[#f97316] text-white hover:opacity-90"
      : "border border-border bg-background text-foreground hover:text-[#f97316] hover:border-[#f97316]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
