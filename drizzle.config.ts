import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });

export default defineConfig({
  schema: ["./src/backend/db/schema.ts"],
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.NODE_ENV === "development"
        ? "postgresql://username:password@localhost:5432/database"
        : process.env.NEON_DATABASE_URL!,
  },
  casing: "snake_case",
});
