import { describe, it, expect } from 'vitest'
import { AppError, ErrorCode, ErrorMessages } from '../../src/errors'

describe('AppError', () => {
  it('returns default message if not provided', () => {
    const error = new AppError(ErrorCode.AUTH_VAL_TOKEN_EXPIRED)
    expect(error.message).toBe(ErrorMessages[ErrorCode.AUTH_VAL_TOKEN_EXPIRED])
  })

  it('allows custom message override', () => {
    const error = new AppError(ErrorCode.API_CONN_FAILED, '自定义提示')
    expect(error.message).toBe('自定义提示')
  })

  it('supports JSON serialization', () => {
    const error = new AppError(ErrorCode.SYS_UNKNOWN)
    expect(error.toJSON()).toEqual({
      error: 'AppError',
      code: ErrorCode.SYS_UNKNOWN,
      message: ErrorMessages[ErrorCode.SYS_UNKNOWN],
    })
  })
})
