import { z } from "zod";

export const $createArtworkInput = z.object({
  title: z.string().min(1),
  artist: z.string().min(1),
  price: z.coerce.number().min(0),
});

export const $deleteArtworkInput = z.object({
  id: z.number(),
});
