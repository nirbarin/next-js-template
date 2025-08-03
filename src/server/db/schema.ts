import { integer, text, sqliteTable, primaryKey } from "drizzle-orm/sqlite-core"
import type { AdapterAccountType } from "@auth/core/adapters"

// Users table (SQLite/D1)
export const users = sqliteTable("user", {
	id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
	name: text("name"),
	email: text("email").unique(),
	// D1/SQLite: store dates as text or integer (unix epoch). We'll store ISO string in text.
	emailVerified: text("emailVerified"),
	image: text("image"),
})

// Accounts table (SQLite/D1)
export const accounts = sqliteTable(
	"account",
	{
		userId: text("userId").notNull(),
		type: text("type").$type<AdapterAccountType>().notNull(),
		provider: text("provider").notNull(),
		providerAccountId: text("providerAccountId").notNull(),
		refresh_token: text("refresh_token"),
		access_token: text("access_token"),
		expires_at: integer("expires_at"),
		token_type: text("token_type"),
		scope: text("scope"),
		id_token: text("id_token"),
		session_state: text("session_state"),
	},
	(account) => ({
		compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }),
	})
)

// Sessions table (SQLite/D1)
export const sessions = sqliteTable("session", {
	sessionToken: text("sessionToken").primaryKey(),
	userId: text("userId").notNull(),
	// Store expires as ISO text for simplicity
	expires: text("expires").notNull(),
})

// Verification tokens table (SQLite/D1)
export const verificationTokens = sqliteTable(
	"verificationToken",
	{
		identifier: text("identifier").notNull(),
		token: text("token").notNull(),
		expires: text("expires").notNull(),
	},
	(verificationToken) => ({
		compositePk: primaryKey({ columns: [verificationToken.identifier, verificationToken.token] }),
	})
)

// Customers
export const customerTable = sqliteTable("customers", {
	customerId: integer("customerId").primaryKey(),
	companyName: text("companyName").notNull(),
	contactName: text("contactName").notNull(),
})
