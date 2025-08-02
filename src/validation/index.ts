export interface Validator<T> {
  parse(data: unknown): T
  safeParse(data: unknown): { success: true, data: T } | { success: false, error: unknown }
}
