"use client";

import { Button } from "./ui/button";
import { Field, FieldGroup, Fieldset, Label } from "./ui/fieldset";
import { Input } from "./ui/input";
import { Heading } from "./ui/heading";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { createArtworkAction } from "@/backend/controllers/artwork.actions";
import { $createArtworkInput } from "@/backend/controllers/artwork.validation";

export function CreateArtwork() {
  const { form, handleSubmitWithAction, resetFormAndAction } =
    useHookFormAction(createArtworkAction, zodResolver($createArtworkInput), {
      actionProps: {
        onSuccess: () => {
          resetFormAndAction();
        },
      },
    });

  return (
    <div>
      <Heading>Create an artwork</Heading>
      <form onSubmit={handleSubmitWithAction}>
        <Fieldset>
          <FieldGroup>
            <Field>
              <Label>Title</Label>
              <Input {...form.register("title")} required />
            </Field>
            <Field>
              <Label>Price</Label>
              <Input {...form.register("price")} type="number" required />
            </Field>
            <Field>
              <Label>Artist</Label>
              <Input {...form.register("artist")} required />
            </Field>
            <Button type="submit">Submit</Button>
          </FieldGroup>
        </Fieldset>
      </form>
    </div>
  );
}
