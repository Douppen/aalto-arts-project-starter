import { Card } from "@/app/components/card";
import { CreateArtwork } from "./components/create-artwork";
import { Artworks } from "./components/artworks";
import { getPresignedUrl } from "@/backend/utils/get-presigned-url";
import { UploadImage } from "./components/upload-image";
import { Heading } from "./components/ui/heading";

export default async function Home() {
  const s3Url = await getPresignedUrl();

  return (
    <main>
      <Heading className="mb-8">Arts Software Project</Heading>
      <div className="flex flex-wrap gap-8">
        <Card heading="Create an artwork">
          <CreateArtwork />
        </Card>
        <Card heading="Artworks">
          <Artworks />
        </Card>
        <Card heading="Upload an image to S3">
          <UploadImage url={s3Url} />
        </Card>
      </div>
    </main>
  );
}
