import "server-only";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { validateEnvVar } from "./validate-env";

export async function getPresignedUrl() {
  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: validateEnvVar("S3_BUCKET_NAME"),
  });
  const signedUrl = await getSignedUrl(new S3Client({}), command);

  return signedUrl;
}
