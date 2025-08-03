"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

/**
 * Provides theme context to its child components using the NextThemesProvider.
 *
 * Accepts all props supported by NextThemesProvider and passes them through, enabling theme management for the component subtree.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
