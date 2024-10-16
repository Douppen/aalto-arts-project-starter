import "server-only";

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import { drizzle as drizzleDev } from "drizzle-orm/postgres-js";
import postgres from 'postgres';

if (!process.env.NEON_DATABASE_URL) {
  throw new Error("NEON_DATABASE_URL must be set as environment variable");
}

let database: ReturnType<typeof drizzle> | ReturnType<typeof drizzleDev>;

if (process.env.NODE_ENV === "production") {
  const sql = neon(process.env.NEON_DATABASE_URL)
  database = drizzle(sql, { casing: "snake_case" });
} else {
  const queryClient = postgres("postgresql://username:password@localhost:5432/database");
  database = drizzleDev(queryClient, { casing: "snake_case" });
}

export const db = database;
