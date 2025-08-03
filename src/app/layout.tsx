import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/nav/bar"
import { ThemeProvider } from "@/components/theme/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Next.js Template",
	description: "A modern Next.js template with shadcn/ui",
}

const navbarConfig = {
	logo: { label: "Next.js Template", href: "/" },
	nav: [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Features", href: "/features" },
	],
	actions: [
		{ type: "button" as const, label: "Sign In", variant: "outline" as const, href: "/signin" },
		{
			type: "button" as const,
			label: "Get Started",
			variant: "default" as const,
			href: "/signup",
		},
	],
	showThemeToggle: true,
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					rel="shortcut icon"
					href="https://nirbar.in/favicon.png"
					type="image/x-icon"
				/>
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-[100dvh] flex-col">
						<Navbar config={navbarConfig} />
						<main className="grow">{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
