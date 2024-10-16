/* eslint @typescript-eslint/triple-slash-reference: off */
/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "aalto-arts",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // S3 Bucket
    const bucket = new sst.aws.Bucket("MyBucket", {
      access: "public",
    });

    // URL for neon database, should be changed to AWS RDS database using their RDS HTTP Data API.
    const neonDatabaseUrlSecret = new sst.Secret("NeonDatabaseUrl");

    new sst.aws.Nextjs("MyWeb", {
      link: [bucket, neonDatabaseUrlSecret],
    });
  },
});
