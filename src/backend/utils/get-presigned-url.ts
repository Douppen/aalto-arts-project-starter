import "server-only";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { validateEnvVar } from "./validate-env";

async function getPresignedUrlProd() {
  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: validateEnvVar("S3_BUCKET_NAME"),
  });
  const signedUrl = await getSignedUrl(new S3Client({}), command);

  return signedUrl;
}

async function getPresignedUrlDev() {
  const s3 = new S3Client({
    region: "eu-north-1", // can be anything
    endpoint: "http://localhost:9000",
    credentials: {
      accessKeyId: "minioadmin",
      secretAccessKey: "minioadmin",
    },
    forcePathStyle: true,
  });

  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: "bucket",
  });
  const signedUrl = await getSignedUrl(s3, command);

  return signedUrl;
}

const isDev = validateEnvVar("NODE_ENV") === "development";
export const getPresignedUrl = isDev ? getPresignedUrlDev : getPresignedUrlProd;