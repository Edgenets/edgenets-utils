export const ENVIRONMENTS = ['development', 'staging', 'production'] as const
export type Env = typeof ENVIRONMENTS[number]
