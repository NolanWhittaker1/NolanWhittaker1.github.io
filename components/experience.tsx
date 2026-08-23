import { Section } from "@/components/section";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="flex flex-col gap-10">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.title}`}
            className="grid gap-3 sm:grid-cols-[7rem_1fr]"
          >
            <p className="pt-0.5 font-mono text-xs text-muted-foreground">
              {role.period}
            </p>

            <div>
              <h3 className="font-medium tracking-tight">
                {role.title}
                <span className="text-muted-foreground"> · {role.company}</span>
              </h3>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                {role.location}
              </p>

              <ul className="mt-3 flex flex-col gap-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-border"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
