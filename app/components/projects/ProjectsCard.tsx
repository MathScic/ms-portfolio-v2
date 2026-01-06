import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  externalUrl?: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  externalUrl,
  image,
}: ProjectCardProps) {
  return (
    <article
      className="
    group relative
    aspect-[4/3]
    w-full
    overflow-hidden rounded-2xl
    border border-border
    transition-all duration-300
    md:hover:-translate-y-0.5 md:hover:shadow-xl
  "
    >
      {/* IMAGE */}
      <Image
        src={image}
        alt={`Aperçu du projet ${title}`}
        fill
        className="
  object-cover
  transition-transform duration-500
  md:group-hover:scale-[1.04]
"
      />

      {/* MOBILE: footer UI moderne */}
      <div className="absolute inset-0 md:hidden">
        {/* léger dégradé pour lisibilité */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="mx-auto max-w-[420px] rounded-xl bg-black/40 p-3 text-white backdrop-blur-sm">
            {/* Titre */}
            <h3 className="text-sm font-semibold leading-tight">{title}</h3>

            {/* Tags */}
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-2 py-0.5 text-[11px]"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA discret */}
            <div className="mt-3">
              <ButtonLink
                href={externalUrl ?? href}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs"
              >
                Voir le projet →
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP: overlay hover */}
      <div
        className="absolute inset-0 hidden md:flex
  flex-col items-center justify-center gap-3
  bg-black/60 p-6 text-center text-white
  opacity-0 transition-opacity duration-300
  group-hover:opacity-100"
      >
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-white/90">{description}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/30 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <ButtonLink
          href={externalUrl ?? href}
          className="mt-2 px-5 py-2 text-sm"
        >
          Voir le projet
        </ButtonLink>
      </div>
    </article>
  );
}
