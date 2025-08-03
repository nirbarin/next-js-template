import { users } from "@/server/db/schema"
import { generateCrudFunctions } from "./utils/crud-generator"
import type { InferSelectModel } from "drizzle-orm"

export const runtime = "edge"

// Define the type for users
type User = InferSelectModel<typeof users>

// Generate CRUD functions for users
export const {
	getAll: getUsers,
	getById: getUserById,
	create: createUser,
	update: updateUser,
	remove: deleteUser,
} = generateCrudFunctions<User>(users)
