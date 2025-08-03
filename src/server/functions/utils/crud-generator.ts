import { revalidatePath } from "next/cache"
import { db } from "@/server/db"
import type { PgTable } from "drizzle-orm/pg-core"

export const runtime = "edge"

export function generateCrudFunctions<T extends Record<string, any>>(
	table: PgTable,
	revalidationPath: string = "/"
) {
	const getAll = async () => {
		"use server"
		return await db.select().from(table)
	}

	const getById = async (id: string | number) => {
		"use server"
		const idColumn = Object.entries(table).find(
			([_, value]) => value.primary === true
		)?.[0] as keyof typeof table

		if (!idColumn) {
			throw new Error("No primary key found in table")
		}

		// @ts-ignore - This is a dynamic query
		return await db.select().from(table).where(table[idColumn].eq(id)).limit(1)
	}

	const create = async (data: Partial<T>) => {
		"use server"

		try {
			// @ts-ignore - This is a dynamic insert
			const result = await db.insert(table).values(data)
			console.log(`Record inserted successfully.`)
			return result
		} catch (error) {
			console.error(`Error inserting record:`, error)
			throw error
		} finally {
			revalidatePath(revalidationPath)
		}
	}

	const update = async (id: string | number, data: Partial<T>) => {
		"use server"

		const idColumn = Object.entries(table).find(
			([_, value]) => value.primary === true
		)?.[0] as keyof typeof table

		if (!idColumn) {
			throw new Error("No primary key found in table")
		}

		try {
			// @ts-ignore - This is a dynamic update
			const result = await db.update(table).set(data).where(table[idColumn].eq(id))
			console.log(`Record updated successfully.`)
			return result
		} catch (error) {
			console.error(`Error updating record:`, error)
			throw error
		} finally {
			revalidatePath(revalidationPath)
		}
	}

	const remove = async (id: string | number) => {
		"use server"

		const idColumn = Object.entries(table).find(
			([_, value]) => value.primary === true
		)?.[0] as keyof typeof table

		if (!idColumn) {
			throw new Error("No primary key found in table")
		}

		try {
			// @ts-ignore - This is a dynamic delete
			const result = await db.delete(table).where(table[idColumn].eq(id))
			console.log(`Record deleted successfully.`)
			return result
		} catch (error) {
			console.error(`Error deleting record:`, error)
			throw error
		} finally {
			revalidatePath(revalidationPath)
		}
	}

	return {
		getAll,
		getById,
		create,
		update,
		remove,
	}
}
