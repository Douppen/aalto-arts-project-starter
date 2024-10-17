import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

let dbUrl: string;

config({ path: [".env.local", ".env.development"] });

if (process.env.NODE_ENV === "development") {
  dbUrl = "postgresql://username:password@localhost:5432/database";
} else {
  if (!process.env.NEON_DATABASE_URL) {
    throw new Error(
      "NEON_DATABASE_URL must be set as environment variable in production"
    );
  }
  dbUrl = process.env.NEON_DATABASE_URL;
}

export default defineConfig({
  schema: ["./src/backend/db/schema.ts"],
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
  casing: "snake_case",
});
