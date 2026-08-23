import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "@/components/section";
import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer>
      <Section id="contact" label="Contact">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
        >
          <Mail aria-hidden="true" className="size-4" />
          Get in touch
        </a>

        <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
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
      </Section>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border py-8 font-mono text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
