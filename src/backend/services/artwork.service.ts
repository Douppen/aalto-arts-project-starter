import "server-only";

import { db } from "../db";
import { artworksTbl, InsertArtwork, SelectArtwork } from "../db/schema";
import { eq } from "drizzle-orm";

export class ArtworkService {
  async createArtwork(data: InsertArtwork) {
    await db.insert(artworksTbl).values(data);
  }

  async getArtworks() {
    return await db.select().from(artworksTbl);
  }

  async updateArtwork(id: SelectArtwork["id"], data: Partial<InsertArtwork>) {
    await db.update(artworksTbl).set(data).where(eq(artworksTbl.id, id));
  }

  async deleteArtwork(id: SelectArtwork["id"]) {
    await db.delete(artworksTbl).where(eq(artworksTbl.id, id));
  }
}
