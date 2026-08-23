import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  label: string
  title?: string
  children: ReactNode
  className?: string
}

export function Section({ id, label, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className={cn('border-t border-border py-16 md:py-20', className)}
    >
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
        <h2
          id={`${id}-label`}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          {label}
        </h2>
      </div>

      {title ? (
        <p className="mt-6 max-w-xl text-balance text-xl font-medium leading-snug tracking-tight md:text-2xl">
          {title}
        </p>
      ) : null}

      <div className={title ? 'mt-10' : 'mt-8'}>{children}</div>
    </section>
  )
}
