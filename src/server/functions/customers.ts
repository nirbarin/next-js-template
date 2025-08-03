import { customerTable } from "@/server/db/schema"
import { generateCrudFunctions } from "./utils/crud-generator"
import type { InferSelectModel } from "drizzle-orm"

export const runtime = "edge"

// Define the type for customers
type Customer = InferSelectModel<typeof customerTable>

// Generate CRUD functions for customers
export const {
	getAll: getCustomers,
	getById: getCustomerById,
	create: createCustomer,
	update: updateCustomer,
	remove: deleteCustomer,
} = generateCrudFunctions<Customer>(customerTable)

// Custom function that keeps your existing implementation
export const createCustomerWithCustomId = async (formData: FormData) => {
	"use server"

	const customerId = formData.get("customerId")

	try {
		await createCustomer({
			customerId: Number(customerId),
			companyName: "Alfreds Futterkiste",
			contactName: "Maria Anders",
		})

		console.log("Customer inserted successfully.")
	} catch (error) {
		console.error("Error inserting customer:", error)
	}
}
