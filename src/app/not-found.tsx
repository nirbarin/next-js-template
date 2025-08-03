"use client"

import Link from "next/link"

export default function NotFound() {
	return (
		<section className="relative">
			<div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
				<div className="text-center">
					<span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
						404
					</span>
					<h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
						Page not found
					</h1>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
						The page you’re looking for doesn’t exist or has moved. Try heading back
						home, or explore our features.
					</p>

					<div className="mt-8 flex items-center justify-center gap-3">
						<Link
							href="/"
							className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90"
						>
							Go Home
						</Link>
						<Link
							href="/features"
							className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-accent"
						>
							Explore Features
						</Link>
					</div>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<CardLink
						title="About"
						desc="Learn more about this template’s philosophy."
						href="/about"
					/>
					<CardLink
						title="Sign In"
						desc="Access your account and continue where you left off."
						href="/signin"
					/>
					<CardLink
						title="Get Started"
						desc="Create an account and start building today."
						href="/signup"
					/>
				</div>
			</div>
		</section>
	)
}

function CardLink({ title, desc, href }: { title: string; desc: string; href: string }) {
	return (
		<Link href={href} className="bg-color rounded-lg border-2 p-6">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-2 text-sm text-muted-foreground">{desc}</p>
		</Link>
	)
}
