import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import { drizzle as drizzleDev } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const createProductionDb = () => {
  if (!process.env.NEON_DATABASE_URL) {
    throw new Error("NEON_DATABASE_URL must be set as environment variable");
  }
  const sql = neon(process.env.NEON_DATABASE_URL);
  return drizzle(sql, { casing: "snake_case" });
};

const createDevelopmentDb = () => {
  const sql = postgres(
    "postgresql://username:password@localhost:5432/database"
  );
  const devDb = drizzleDev(sql, { casing: "snake_case" });
  migrate(devDb, { migrationsFolder: "migrations" });
  return devDb;
};

export const db =
  process.env.NODE_ENV === "production"
    ? createProductionDb()
    : createDevelopmentDb();
