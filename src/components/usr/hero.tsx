type HeroProps = {
	tag: string
	title: string
	description: string
}

/**
 * Renders a centered hero section with a tag label, prominent title, and descriptive text.
 *
 * @param tag - The label displayed above the title
 * @param title - The main heading text
 * @param description - The supporting descriptive text below the title
 * @returns A React element representing the hero section
 */
export default function Hero({ tag, title, description }: HeroProps) {
	return (
		<div className="text-center">
			<span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
				{tag}
			</span>
			<h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
			<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{description}</p>
		</div>
	)
}
