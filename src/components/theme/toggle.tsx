"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
	className?: string
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
	const { setTheme, theme } = useTheme()

	return (
		<Button
			variant="outline"
			size="icon"
			className={cn("rounded-full", className)}
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			suppressHydrationWarning
		>
			<Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
			<Moon className="hidden h-5 w-5 dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
