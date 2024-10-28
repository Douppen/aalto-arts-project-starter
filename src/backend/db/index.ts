import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { drizzle as drizzlePostgresJs } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { validateEnvVar } from "../utils/validate-env";

function createDbClient() {
  const sql = neon(validateEnvVar("NEON_DATABASE_URL"));
  const prodDb = drizzleNeon(sql, { casing: "snake_case" });

  return prodDb;
}

async function createDbClientLocalDb() {
  const devDb = drizzlePostgresJs(
    postgres(validateEnvVar("LOCAL_POSTGRES_URL")),
    {
      casing: "snake_case",
    }
  );

  console.log("⚙️ Performing migration on development database ...");
  await migrate(devDb, { migrationsFolder: "migrations" });
  console.log("✅ Migration done");

  return devDb;
}

const isDev = process.env.NODE_ENV === "development";
const isCI = process.env.CI === "true";
export const db =
  isDev || isCI ? await createDbClientLocalDb() : createDbClient();
