import { Section } from "@/components/section";
import { about } from "@/lib/content";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_11rem] sm:items-start sm:gap-10">
        <div className="flex max-w-xl flex-col gap-5 sm:order-first">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-pretty leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <figure className="order-first w-40 sm:order-none sm:w-44">
          <img
            src={about.photo.src || "/placeholder.svg"}
            alt={about.photo.alt}
            width={352}
            height={440}
            className="aspect-[4/5] w-full rounded-xl border border-border object-cover"
          />
        </figure>
      </div>

      <dl className="mt-12 grid gap-8 sm:grid-cols-2">
        {about.skills.map((group) => (
          <div key={group.group}>
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {group.group}
            </dt>
            <dd className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-card px-2 py-1 font-mono text-xs text-card-foreground"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
