import { describe, it, expect } from 'vitest'
import { AppError, ERROR_CODES } from '../../src/errors'

describe('AppError', () => {
  it('has correct code and message', () => {
    const err = new AppError(ERROR_CODES.UNAUTHORIZED, 'Token missing')
    expect(err.code).toBe('UNAUTHORIZED')
    expect(err.message).toBe('Token missing')
    expect(err.name).toBe('AppError')
  })
})
