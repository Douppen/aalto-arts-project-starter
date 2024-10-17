export function validateEnvVar(varName: string) {
  const value = process.env[varName];
  if (!value) {
    throw new Error(`${varName} must be set as an environment variable`);
  }
  return value;
}
