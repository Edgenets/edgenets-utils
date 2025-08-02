import { ErrorCode } from './codes.js'
import { ErrorMessages } from './messages.js'

export class AppError extends Error {
  constructor(
    public readonly code: ErrorCode,
    message?: string,
    public readonly cause?: unknown
  ) {
    super(message || ErrorMessages[code])
    this.name = 'AppError'
  }

  toJSON() {
    return {
      error: this.name,
      code: this.code,
      message: this.message,
    }
  }
}
