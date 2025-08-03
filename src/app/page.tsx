import Link from "next/link"
import { createCustomerWithCustomId, getCustomers } from "@/server/functions/customers"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Feature from "@/components/usr/feature"
import Hero from "@/components/usr/hero"

export const runtime = "edge"

export default async function Home() {
	"use server"
	const customers = await getCustomers()

	return (
		<section className="relative">
			<div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
				<Hero
					tag="Welcome"
					title="Build, iterate, and launch with confidence"
					description="A clean Next.js foundation with shadcn/ui and thoughtful defaults; designed to help you move fast without sacrificing quality."
				/>

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

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Feature
						title="Zero friction"
						desc=" sensible defaults, clear structure, and production-ready patterns."
					/>
					<Feature
						title="Themeable components"
						desc="Built with shadcn/ui + Tailwind for accessible, consistent UI in light and dark."
					/>
					<Feature
						title="Edge-ready"
						desc="Modern Next.js features with fast rendering and scalable performance."
					/>
				</div>
			</div>

			<div className="mx-auto max-w-5xl border-y px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid gap-6">
					<div className="text-center">
						<span className="text-xs font-medium uppercase tracking-wide text-primary">
							Live Demo
						</span>
						<h2 className="mt-2 text-2xl font-semibold">Customer Management</h2>
						<p className="mt-2 text-muted-foreground">
							A minimal flow showcasing server actions, data fetching, and UI
							composition.
						</p>
					</div>

					<Card>
						<CardHeader>
							<CardTitle>Customer IDs</CardTitle>
							<CardDescription>View and manage your customer IDs</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableCaption>A list of your customers</TableCaption>
								<TableHeader>
									<TableRow>
										<TableHead>Customer ID</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{customers.length > 0 ? (
										customers.map((customer) => (
											<TableRow key={customer.customerId}>
												<TableCell className="font-mono text-sm">
													{customer.customerId}
												</TableCell>
											</TableRow>
										))
									) : (
										<TableRow>
											<TableCell className="text-muted-foreground">
												No customers yet
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</CardContent>
						<CardFooter>
							<form action={createCustomerWithCustomId} className="flex w-full gap-2">
								<Input
									type="text"
									name="customerId"
									placeholder="Add a new customer ID"
									className="grow"
								/>
								<Button type="submit">Add Customer</Button>
							</form>
						</CardFooter>
					</Card>
				</div>
			</div>

			<div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
				<h2 className="text-2xl font-semibold sm:text-3xl">Ready to dive in?</h2>
				<p className="mt-3 text-muted-foreground">
					Start with the template, bring your data, and ship your first feature today.
				</p>
				<div className="mt-6 flex items-center justify-center gap-3">
					<Link
						href="/signup"
						className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90"
					>
						Get Started
					</Link>
					<Link
						href="/about"
						className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-accent"
					>
						Learn More
					</Link>
				</div>
			</div>
		</section>
	)
}
