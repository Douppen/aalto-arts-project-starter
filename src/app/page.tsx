import { Card } from "@/app/components/card";
import { CreateArtwork } from "./components/create-artwork";
import { Artworks } from "./components/artworks";
import { getPresignedUrl } from "@/backend/utils/get-presigned-url";
import { UploadImage } from "./components/upload-image";

export default async function Home() {
  const s3Url = await getPresignedUrl();

  return (
    <main className="flex flex-wrap gap-8">
      <Card>
        <CreateArtwork />
      </Card>
      <Card>
        <Artworks />
      </Card>
      <Card>
        <UploadImage url={s3Url} />
      </Card>
    </main>
  );
}
