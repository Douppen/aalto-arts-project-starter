import "server-only";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function getPresignedUrl() {
  if (!process.env.S3_BUCKET_NAME) {
    throw new Error("Missing S3_BUCKET_NAME environment variable");
  }

  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: process.env.S3_BUCKET_NAME,
  });
  const signedUrl = await getSignedUrl(new S3Client({}), command);

  return signedUrl;
}
