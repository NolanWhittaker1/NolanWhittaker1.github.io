import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-20 md:pb-20 md:pt-28">
      {profile.available ? (
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          {profile.availableLabel}
        </p>
      ) : null}

      <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
        {profile.name}
        <span className="text-brand">.</span>
      </h1>

      <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted-foreground">
        <span className="text-foreground">{profile.role}</span>
        <span aria-hidden="true" className="text-border">
          /
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin aria-hidden="true" className="size-3.5" />
          {profile.location}
        </span>
      </p>

      <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        {profile.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group inline-flex items-center gap-1 border-b border-border pb-0.5 font-mono text-sm transition-colors hover:border-brand hover:text-brand"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
