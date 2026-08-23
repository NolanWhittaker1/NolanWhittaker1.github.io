import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { education, projects } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects" label="Selected projects">
      <ul className="-mx-4 flex flex-col">
        {projects.map((project) => (
          <li key={project.title}>
            <a
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              className="group block rounded-lg px-4 py-5 transition-colors hover:bg-accent/60 focus-visible:bg-accent/60 focus-visible:outline-none"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="flex items-center gap-1.5 font-medium tracking-tight">
                  {project.title}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <p className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
                {project.stack.map((tech, i) => (
                  <span key={tech} className="flex items-center gap-2">
                    {i > 0 ? (
                      <span aria-hidden="true" className="text-border">
                        ·
                      </span>
                    ) : null}
                    {tech}
                  </span>
                ))}
              </p>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-12 border-t border-dashed border-border pt-8">
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Education
        </h3>
        <ul className="mt-5 flex flex-col gap-4">
          {education.map((item) => (
            <li
              key={item.school}
              className="grid gap-1 sm:grid-cols-[7rem_1fr]"
            >
              <p className="font-mono text-xs text-muted-foreground">
                {item.period}
              </p>
              <div>
                <p className="text-sm font-medium tracking-tight">
                  {item.school}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {item.credential}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
