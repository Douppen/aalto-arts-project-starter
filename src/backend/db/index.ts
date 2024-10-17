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

const createDevelopmentDb = async () => {
  if (!process.env.LOCAL_POSTGRES_URL) {
    throw new Error(
      "LOCAL_POSTGRES_URL must be set as environment variable in development"
    );
  }
  const sql = postgres(process.env.LOCAL_POSTGRES_URL);
  const devDb = drizzleDev(sql, { casing: "snake_case" });
  const migrationPromise = migrate(devDb, { migrationsFolder: "migrations" });
  console.log("migrating ...");
  await migrationPromise;
  console.log("migration done");
  return devDb;
};

export const db =
  process.env.NODE_ENV === "production"
    ? createProductionDb()
    : await createDevelopmentDb();
