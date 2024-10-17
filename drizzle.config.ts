import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
import { validateEnvVar } from "@/backend/utils/validate-env";

config({ path: [".env.development"] });

export default defineConfig({
  schema: ["./src/backend/db/schema.ts"],
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: validateEnvVar("LOCAL_POSTGRES_URL"),
  },
  casing: "snake_case",
});
