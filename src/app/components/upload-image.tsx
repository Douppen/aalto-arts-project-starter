"use client";

import { Button } from "./ui/button";
import { Field, FieldGroup, Fieldset, Label } from "./ui/fieldset";
import { Heading } from "./ui/heading";
import { Input } from "./ui/input";

export function UploadImage({ url }: { url: string }) {
  return (
    <div>
      <Heading>Upload an image to S3</Heading>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const file = (e.target as HTMLFormElement).file.files?.[0];

          const image = await fetch(url, {
            body: file,
            method: "PUT",
            headers: {
              "Content-Type": file.type,
              "Content-Disposition": `attachment; filename="${file.name}"`,
            },
          });

          window.location.href = image.url.split("?")[0];
          console.log(image.url);
        }}
      >
        <Fieldset>
          <FieldGroup>
            <Field>
              <Label>Your image</Label>
              <Input name="file" type="file" accept="image/png, image/jpeg" />
            </Field>
            <Button type="submit">Upload</Button>
          </FieldGroup>
        </Fieldset>
      </form>
    </div>
  );
}
