import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema.js";
import "dotenv/config";

// get database url from env, get database
const sqlite = new Database(process.env.DATABASE_URL ?? "sqlite.db");

// export db instance from drizzle
export const db = drizzle(sqlite, { schema });
