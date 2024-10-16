import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { Resource } from "sst";

const sql = neon(Resource.NeonDatabaseUrl.value);

export const db = drizzle(sql, { casing: "snake_case" });
