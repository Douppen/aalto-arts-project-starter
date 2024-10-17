export function getEnvironment() {
  if (!process.env.NEXT_PUBLIC_VERCEL_ENV) {
    throw new Error("Missing NEXT_PUBLIC_VERCEL_ENV environment variable");
  }

  return process.env.NEXT_PUBLIC_VERCEL_ENV as
    | "development"
    | "production"
    | "preview";
}
