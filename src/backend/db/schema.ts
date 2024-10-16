import "server-only";

import { pgTable } from "drizzle-orm/pg-core";

export const artworksTbl = pgTable("artworks", (t) => ({
  id: t.serial().primaryKey(),
  title: t.text().notNull(),
  price: t.integer().notNull(),
  artist: t.text().notNull(),
  createdAt: t.timestamp().notNull().defaultNow(),
  updatedAt: t.timestamp().$onUpdate(() => new Date()),
}));

export type InsertArtwork = typeof artworksTbl.$inferInsert;
export type SelectArtwork = typeof artworksTbl.$inferSelect;
