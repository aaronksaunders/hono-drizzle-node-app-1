import { sql } from "drizzle-orm";
import { int, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

// create users table
export const usersTable = sqliteTable(
  "users_table",
  {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    age: int().notNull(),
    email: text().notNull().unique(),
    createdAt: text()
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text()
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  // create unique index on email column
  (table) => [uniqueIndex("email_idx").on(table.email)]
);

// export types for users table
export type User = typeof usersTable.$inferSelect;
export type InsertUser = typeof usersTable.$inferInsert;
