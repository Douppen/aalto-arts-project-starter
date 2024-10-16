"use client";

import { deleteArtworkAction } from "@/backend/controllers/artwork.actions";
import { Button } from "./ui/button";

type Props = {
  id: number;
};

export function DeleteArtworkBtn(props: Props) {
  async function onClick() {
    await deleteArtworkAction({ id: props.id });
  }

  return (
    <Button plain onClick={onClick}>
      ❌
    </Button>
  );
}
