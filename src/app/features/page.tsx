"use client"

import Link from "next/link"

export default function FeaturesPage() {
  return (
    <section className="relative">
      {/* Hero */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Features
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to move from idea to product
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A thoughtful toolkit of components, patterns, and defaults. Customize deeply, ship quickly,
            and keep your codebase tidy as you scale.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="App Router"
            desc="Modern routing, layouts, and server actions for fast builds and clean boundaries."
          />
          <Feature
            title="TypeScript First"
            desc="Types from top to bottom for confidence, autocomplete, and fewer runtime bugs."
          />
          <Feature
            title="shadcn/ui + Tailwind"
            desc="Accessible, themeable components with design tokens that match your brand."
          />
          <Feature
            title="Dark Mode"
            desc="System-aware theme toggle, consistent variables, and polished color contrast."
          />
          <Feature
            title="Edge-ready"
            desc="Great performance with edge runtimes and streaming where it makes sense."
          />
          <Feature
            title="Sensible Structure"
            desc="An opinionated folder layout that scales without getting in your way."
          />
        </div>
      </div>

      {/* Deep dives */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 grid gap-16 border-y">
          <Section
            kicker="UI/UX"
            title="Components you’ll actually enjoy using"
            body="Buttons, cards, tables, dialogs, forms, and more, built with accessibility and responsiveness in mind. Extend variants, tweak tokens, and keep your UI consistent across light and dark."
            bullets={[
              "Accessible by default (focus, roles, keyboard)",
              "Design tokens for spacing, color, radius, and typography",
              "Composable primitives you can remix freely",
            ]}
          />
          <Section
            kicker="Developer Experience"
            title="Fewer footguns, more shipping"
            body="Type-safe server actions, linting and formatting presets, and a clear mental model. Spend your time on features; not on wiring and boilerplate."
            bullets={[
              "TypeScript everywhere with strict settings",
              "ESLint/Prettier presets and recommended rules",
              "Clear separation of UI and server concerns",
            ]}
          />
          <Section
            kicker="Performance"
            title="Fast by default"
            body="Edge runtime support, optimized bundling, and layout patterns that keep your app snappy as it grows. Enable streaming and caching strategies where it counts."
            bullets={[
              "Edge runtime where applicable",
              "Incremental and selective data fetching",
              "Smart layout composition for perceived speed",
            ]}
          />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to get started?</h2>
          <p className="mt-3 text-muted-foreground">
            Use the template as-is or extend it with your stack like Prisma, tRPC, or your favorite API.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition"
            >
              Learn More
            </Link>
          </div>
        </div>
    </section>
  )
}

function Feature({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <div className="rounded-lg border p-6 bg-card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  )
}

function Section({
  kicker,
  title,
  body,
  bullets,
}: {
  kicker: string
  title: string
  body: string
  bullets?: string[]
}) {
  return (
    <div className="grid gap-4">
      <span className="text-xs font-medium uppercase tracking-wide text-primary">
        {kicker}
      </span>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{body}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )}