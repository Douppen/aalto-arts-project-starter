import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { drizzle as drizzleDev } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { validateEnvVar } from "../utils/validate-env";

function createProdDbClient() {
  const sql = neon(validateEnvVar("NEON_DATABASE_URL"));
  const prodDb = drizzle(sql, { casing: "snake_case" });

  return prodDb;
}

async function createDevDbClient() {
  const devDb = drizzleDev(postgres(validateEnvVar("LOCAL_POSTGRES_URL")), {
    casing: "snake_case",
  });

  console.log("⚙️ Performing migration on development database ...");
  await migrate(devDb, { migrationsFolder: "migrations" });
  console.log("✅ Migration done");

  return devDb;
}

const isProd = validateEnvVar("NODE_ENV") === "production";
export const db = isProd ? createProdDbClient() : await createDevDbClient();
