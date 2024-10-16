import { Resource } from "sst";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["./src/db/schema.ts"],
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: Resource.NeonDatabaseUrl.value,
  },
  casing: "snake_case",
});
