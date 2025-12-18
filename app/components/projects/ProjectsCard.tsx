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
    <article className="group relative h-64 overflow-hidden rounded-2xl border border-border">
      {/* IMAGE */}
      <Image
        src={image}
        alt={`Aperçu du projet ${title}`}
        fill
        className="object-cover"
      />

      {/* MOBILE: footer centré */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:hidden">
        <div className="mx-auto w-full max-w-[420px] rounded-2xl border border-white/15 bg-black/55 p-4 text-white shadow-lg backdrop-blur-md">
          <h3 className="text-center text-base font-semibold leading-tight">
            {title}
          </h3>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <ButtonLink
              href={externalUrl ?? href}
              className="px-6 py-2 text-sm"
            >
              Voir le projet
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* DESKTOP: overlay hover */}
      <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center gap-3 bg-black/70 p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
