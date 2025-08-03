"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme/toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Menu, X } from "lucide-react"
import * as SheetPrimitive from "@radix-ui/react-dialog"

type NavItem = {
	label: string
	href: string
	external?: boolean
}

type ActionItem = {
	type: "button" | "link"
	label: string
	href: string
	variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
	size?: "default" | "sm" | "lg" | "icon"
	external?: boolean
}

type NavbarConfig = {
	logo?: { label: string; href: string }
	nav?: NavItem[]
	actions?: ActionItem[]
	showThemeToggle?: boolean
}

/**
 * Renders a responsive navigation bar with optional logo, navigation links, action items, and a theme toggle for a Next.js application.
 *
 * The navigation bar adapts its layout for different screen sizes, displaying a horizontal menu on larger screens and a slide-in sheet menu on mobile devices. Navigation and action items support external links, and the active navigation item is highlighted based on the current route.
 *
 * @param config - Configuration object specifying logo, navigation items, action items, and theme toggle visibility
 * @param className - Optional additional class names for the header element
 */
export default function Navbar({
	config,
	className,
}: {
	config: NavbarConfig
	className?: string
}) {
	const pathname = usePathname()
	const { logo, nav = [], actions = [], showThemeToggle = true } = config
	const getIsActive = (href: string) => {
		return href !== "/" && pathname?.startsWith(href) ? true : pathname === href
	}

	return (
		<header className={cn("w-full border-b bg-background", className)}>
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center gap-6">
					{logo ? (
						<Link href={logo.href} className="text-xl font-bold">
							{logo.label}
						</Link>
					) : (
						<span className="text-xl font-bold">App</span>
					)}

					<nav className="hidden items-center gap-1 md:flex">
						{nav.map((item) => {
							const isActive =
								item.href !== "/" && pathname?.startsWith(item.href)
									? true
									: pathname === item.href

							return (
								<Link
									key={item.href + item.label}
									href={item.href}
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noreferrer" : undefined}
									className={cn(
										"rounded-md px-3 py-2 text-sm transition-colors",
										isActive
											? "bg-muted text-foreground"
											: "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
									)}
								>
									{item.label}
								</Link>
							)
						})}
					</nav>
				</div>

				<div className="flex items-center gap-2">
					{showThemeToggle && <ThemeToggle />}

					<div className="hidden items-center gap-2 md:flex">
						{actions.map((action) =>
							action.type === "button" ? (
								<Button
									key={action.label + action.href}
									asChild
									variant={action.variant ?? "default"}
									size={action.size === "icon" ? "icon" : (action.size ?? "sm")}
								>
									<Link
										href={action.href}
										target={action.external ? "_blank" : undefined}
										rel={action.external ? "noreferrer" : undefined}
									>
										{action.label}
									</Link>
								</Button>
							) : (
								<Link
									key={action.label + action.href}
									href={action.href}
									target={action.external ? "_blank" : undefined}
									rel={action.external ? "noreferrer" : undefined}
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									{action.label}
								</Link>
							)
						)}
					</div>

					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="max-w-72">
							<SheetHeader>
								<SheetTitle className="text-lg">{logo?.label ?? "Menu"}</SheetTitle>
								<SheetPrimitive.Close asChild>
									<Button variant="ghost" size="icon">
										<X className="h-5 w-5" />
										<span className="sr-only">Close</span>
									</Button>
								</SheetPrimitive.Close>
							</SheetHeader>
							<div className="mt-4 flex flex-col gap-1">
								{nav.map((item) => {
									const isActive = getIsActive(item.href)

									return (
										<Link
											key={item.href + item.label}
											href={item.href}
											target={item.external ? "_blank" : undefined}
											rel={item.external ? "noreferrer" : undefined}
											className={cn(
												"rounded-md px-3 py-2 text-sm transition-colors",
												isActive
													? "bg-muted text-foreground"
													: "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
											)}
										>
											{item.label}
										</Link>
									)
								})}
							</div>
							{actions.length > 0 && (
								<>
									<Separator className="my-4" />
									<div className="flex flex-col gap-2">
										{actions.map((action) =>
											action.type === "button" ? (
												<Button
													key={action.label + action.href}
													asChild
													variant={action.variant ?? "default"}
													size={
														action.size === "icon"
															? "icon"
															: (action.size ?? "sm")
													}
													className="w-full"
												>
													<Link
														href={action.href}
														target={
															action.external ? "_blank" : undefined
														}
														rel={
															action.external
																? "noreferrer"
																: undefined
														}
													>
														{action.label}
													</Link>
												</Button>
											) : (
												<Link
													key={action.label + action.href}
													href={action.href}
													target={action.external ? "_blank" : undefined}
													rel={action.external ? "noreferrer" : undefined}
													className="text-sm text-muted-foreground hover:text-foreground"
												>
													{action.label}
												</Link>
											)
										)}
									</div>
								</>
							)}
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
