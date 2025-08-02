import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ConsoleLogger } from '../../src/logger/console-logger'

describe('ConsoleLogger', () => {
  let spy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    spy = vi.spyOn(console, 'info').mockImplementation(() => {})
  })

  afterEach(() => {
    spy.mockRestore()
  })

  it('does not log if level too low', () => {
    const logger = new ConsoleLogger('warn')
    logger.info('This should not appear')
    expect(spy).not.toHaveBeenCalled()
  })

  it('logs info if level allows', () => {
    const logger = new ConsoleLogger('debug')
    logger.info('Hello world')
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('[INFO] Hello world'))
  })
})
