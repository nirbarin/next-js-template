/**
 * Displays a styled card featuring a title and description.
 *
 * @param title - The heading text to display
 * @param desc - The descriptive text shown below the title
 * @returns A React element rendering the feature card
 */
export default function Feature({ title, desc }: { title: string; desc: string }) {
	return (
		<div className="rounded-lg border bg-card p-6">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-2 text-sm text-muted-foreground">{desc}</p>
		</div>
	)
}
