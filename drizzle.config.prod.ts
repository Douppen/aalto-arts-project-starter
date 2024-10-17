import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: [".env.local"] });

if (!process.env.NEON_DATABASE_URL) {
  throw new Error(
    "NEON_DATABASE_URL must be set as environment variable in production"
  );
}

export default defineConfig({
  schema: ["./src/backend/db/schema.ts"],
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL,
  },
  casing: "snake_case",
});
