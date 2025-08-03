import { describe, it, expect } from 'vitest'
import { NanoIdUtil } from '../../src/id/nano-id.util'

describe('NanoIdUtil', () => {
  it('generates default nanoid with correct length', () => {
    const id = NanoIdUtil.generateDefault(12)
    expect(id).toHaveLength(12)
    expect(id).toMatch(/^[a-zA-Z0-9]+$/)
  })

  it('generates custom nanoid with allowed characters only', () => {
    const id = NanoIdUtil.generateCustom(10, 'ABC')
    expect(id).toHaveLength(10)
    expect(id).toMatch(/^[ABC]+$/)
  })

  it('throws error on invalid length', () => {
    expect(() => NanoIdUtil.generate(0)).toThrow()
  })

  it('generates numeric ID with correct length', () => {
    const id = NanoIdUtil.generateNumberId()
    expect(typeof id).toBe('number')
    expect(id.toString()).toMatch(/^\d{16}$/)
  })
})
