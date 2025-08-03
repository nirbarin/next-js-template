export default function Feature({ title, desc }: { title: string; desc: string }) {
	return (
		<div className="rounded-lg border bg-card p-6">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-2 text-sm text-muted-foreground">{desc}</p>
		</div>
	)
}
