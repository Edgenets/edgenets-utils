import { describe, it, expect, vi } from 'vitest'
import { logger } from '../../src/logger/index'

describe('logger', () => {
  it('should log info by default', () => {
    const spy = vi.spyOn(console, 'info').mockImplementation(() => {})
    logger.info('test info')
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('INFO'), 'test info')
    spy.mockRestore()
  })

  it('should not log debug by default', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})
    logger.debug('test debug')
    expect(spy).not.toHaveBeenCalled()
    spy.mockRestore()
  })

  it('should log debug when level is debug', () => {
    logger.setLevel('debug')
    const spy = vi.spyOn(console, 'debug').mockImplementation(() => {})
    logger.debug('debug mode on')
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
