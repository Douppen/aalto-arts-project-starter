import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
import { validateEnvVar } from "@/backend/utils/validate-env";

config({ path: [".env.local"] });

export default defineConfig({
  schema: ["./src/backend/db/schema.ts"],
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: validateEnvVar("NEON_DATABASE_URL"),
  },
  casing: "snake_case",
});
