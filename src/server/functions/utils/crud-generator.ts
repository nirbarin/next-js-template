import { revalidatePath } from "next/cache"
import { db } from "@/server/db"
import type { AnySQLiteTable } from "drizzle-orm/sqlite-core"
import { eq } from "drizzle-orm"

export const runtime = "edge"

export function generateCrudFunctions<T extends Record<string, any>>(
	table: AnySQLiteTable,
	revalidationPath: string = "/"
) {
	const getAll = async () => {
		const rows = await db.select().from(table)
		return rows.map((r: any) => ({ ...r }))
	}

	const getById = async (id: string | number) => {
		const idColumnEntry = Object.entries(table).find(
			([_, value]) => (value as any).primary === true
		)

		const idColumnKey = idColumnEntry?.[0] as keyof typeof table | undefined
		const idColumn = idColumnKey ? (table as any)[idColumnKey] : undefined

		if (!idColumn) {
			throw new Error("No primary key found in table")
		}

		const rows = await db.select().from(table).where(eq(idColumn, id as any)).limit(1)
		const row = rows[0]
		return row ? ({ ...row } as any) : null
	}

	const create = async (data: Partial<T>) => {
		try {
			const result = await (db as any).insert(table).values(data)
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
		const idColumnEntry = Object.entries(table).find(
			([_, value]) => (value as any).primary === true
		)
		const idColumnKey = idColumnEntry?.[0] as keyof typeof table | undefined
		const idColumn = idColumnKey ? (table as any)[idColumnKey] : undefined

		if (!idColumn) {
			throw new Error("No primary key found in table")
		}

		try {
			const result = await (db as any)
				.update(table)
				.set(data)
				.where(eq(idColumn, id as any))
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
		const idColumnEntry = Object.entries(table).find(
			([_, value]) => (value as any).primary === true
		)
		const idColumnKey = idColumnEntry?.[0] as keyof typeof table | undefined
		const idColumn = idColumnKey ? (table as any)[idColumnKey] : undefined

		if (!idColumn) {
			throw new Error("No primary key found in table")
		}

		try {
			const result = await (db as any).delete(table).where(eq(idColumn, id as any))
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
