import Link from "next/link"
import Feature from "@/components/usr/feature"
import Section from "@/components/usr/section"
import Hero from "@/components/usr/hero"

/**
 * Renders the About page with an overview of the template's features, philosophy, included technologies, and calls to action.
 *
 * Displays a hero section, a grid of feature highlights, informational sections about the template's approach and contents, and a call-to-action area with navigation links.
 */
export default function AboutPage() {
	return (
		<section className="relative">
			<div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
				<Hero
					tag="About"
					title="A modern starter to build, ship, and scale faster"
					description="This Next.js template brings together best-in-class tooling like TypeScript, shadcn/ui, and a thoughtful DX, so you can focus on product, not plumbing."
				/>

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

			<div className="mx-auto grid max-w-5xl gap-16 border-y px-4 py-16 sm:px-6 lg:px-8">
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

			<div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
				<h2 className="text-2xl font-semibold sm:text-3xl">
					Ready to build something great?
				</h2>
				<p className="mt-3 text-muted-foreground">
					Start with the template, add your data layer, and deploy in minutes.
				</p>
				<div className="mt-6 flex items-center justify-center gap-3">
					<Link
						href="/signup"
						className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90"
					>
						Get Started
					</Link>
					<Link
						href="/features"
						className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-accent"
					>
						Explore Features
					</Link>
				</div>
			</div>
		</section>
	)
}
