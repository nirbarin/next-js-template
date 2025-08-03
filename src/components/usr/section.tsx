/**
 * Renders a styled section with a kicker, title, body text, and an optional list of bullet points.
 *
 * @param kicker - Short label or category displayed above the title
 * @param title - Main heading of the section
 * @param body - Descriptive text content for the section
 * @param bullets - Optional array of bullet point strings to display as a list
 * @returns A React element representing the formatted section
 */
export default function Section({
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
				<ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
					{bullets.map((b, index) => (
						<li key={index}>{b}</li>
					))}
				</ul>
			)}
		</div>
	)
}
