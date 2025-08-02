export function getEnv(name: string, fallback?: string): string {
  const val = process.env[name]
  if (!val && fallback === undefined) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return val ?? fallback!
}
