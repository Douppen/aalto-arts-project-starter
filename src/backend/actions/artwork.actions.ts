"use server";

import { ArtworkService } from "@/backend/services/artwork.service";
import { revalidatePath } from "next/cache";
import { actionClient } from "@/backend/utils/safe-action";
import { $createArtworkInput, $deleteArtworkInput } from "./artwork.validation";

const artworkService = new ArtworkService();

export const getArtworksAction = async () => {
  return await artworkService.getArtworks();
};

export const createArtworkAction = actionClient
  .schema($createArtworkInput)
  .action(async ({ parsedInput }) => {
    // do some authorization here

    await artworkService.createArtwork(parsedInput);

    // and do error handling here
    revalidatePath("/");
  });

export const deleteArtworkAction = actionClient
  .schema($deleteArtworkInput)
  .action(async ({ parsedInput }) => {
    await artworkService.deleteArtwork(parsedInput.id);
    revalidatePath("/");
  });
