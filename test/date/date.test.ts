import { describe, it, expect } from 'vitest'
import { formatDate, diffInSeconds } from '../../src/date'

describe('date utils', () => {
  it('formats date correctly', () => {
    const d = new Date('2025-01-01T15:00:00Z')
    expect(formatDate(d, 'en-US')).toMatch(/\d{2}\/\d{2}\/\d{4}/)
  })

  it('calculates diff in seconds', () => {
    const a = new Date('2025-01-01T00:00:00Z')
    const b = new Date('2025-01-01T00:01:10Z')
    expect(diffInSeconds(a, b)).toBe(70)
  })
})
