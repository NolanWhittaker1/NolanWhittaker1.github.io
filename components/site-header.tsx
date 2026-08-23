import { profile } from '@/lib/content'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between gap-6 px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight transition-colors hover:text-brand"
        >
          {profile.name.split(' ')[0].toLowerCase()}
          <span className="text-brand">.</span>
        </a>

        <nav aria-label="Sections">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-1.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:px-2 sm:text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
