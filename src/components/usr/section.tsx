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
					{bullets.map((b) => (
						<li key={b}>{b}</li>
					))}
				</ul>
			)}
		</div>
	)
}
