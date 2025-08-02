import { describe, it, expect } from 'vitest'
import { ENVIRONMENTS } from '../../src/constants'

describe('constants', () => {
  it('includes known environments', () => {
    expect(ENVIRONMENTS).toContain('production')
  })
})
