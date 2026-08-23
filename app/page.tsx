import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-sm focus:text-brand-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main className="mx-auto max-w-2xl px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      <div className="mx-auto max-w-2xl px-6">
        <SiteFooter />
      </div>
    </>
  );
}
