"use client"

import Link from "next/link"
export default function AboutPage() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            About
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            A modern starter to build, ship, and scale faster
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            This Next.js template brings together best-in-class tooling like TypeScript,
            shadcn/ui, and a thoughtful DX, so you can focus on product, not plumbing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Developer Experience"
            desc="Preconfigured linting, formatting, and sensible defaults. Less setup, more shipping."
          />
          <Feature
            title="Composable UI"
            desc="Built with shadcn/ui + Tailwind CSS for accessible, themeable components."
          />
          <Feature
            title="Production Ready"
            desc="Routing, theming, and a scalable structure that grows with your app."
          />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 grid gap-16 border-y">
        <Section
          kicker="Philosophy"
          title="Ship fast, keep it clean"
          body="We believe great products come from a tight feedback loop. This template removes the friction, giving you guardrails for quality and flexibility to customize. Opinionated where it matters, unopinionated where it counts."
        />
        <Section
          kicker="What’s Inside"
          title="Everything you need to get going"
          body="Next.js App Router, TypeScript, Tailwind, shadcn/ui, dark mode, and a sensible folder structure. Add your data layer, deploy anywhere, and start iterating."
          bullets={[
            "App Router with accessible navigation",
            "Theme toggle (system-aware) and design tokens",
            "Reusable components and utilities",
            "Production-ready linting and formatting",
          ]}
        />
        <Section
          kicker="Open & Extensible"
          title="Bring your own stack"
          body="Integrate Prisma, tRPC, TanStack Query, or any API of your choice. Swap styling tokens and component variants to match your brand without fighting the framework."
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Ready to build something great?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Start with the template, add your data layer, and deploy in minutes.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition"
          >
            Explore Features
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
  )
}

