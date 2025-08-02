import { Logger, LogLevel } from './types.js'

const levelOrder: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 100,
}

function format(level: LogLevel, message: string): string {
  const ts = new Date().toISOString()
  return `${ts} [${level.toUpperCase()}] ${message}`
}

export class ConsoleLogger implements Logger {
  constructor(private level: LogLevel = 'info') {}

  setLevel(level: LogLevel) {
    this.level = level
  }

  private shouldLog(method: LogLevel): boolean {
    return levelOrder[method] >= levelOrder[this.level]
  }

  debug(message: string): void {
    if (this.shouldLog('debug')) console['debug'](format('debug', message))
  }

  info(message: string): void {
    if (this.shouldLog('info')) console['info'](format('info', message))
  }

  warn(message: string): void {
    if (this.shouldLog('warn')) console['warn'](format('warn', message))
  }

  error(message: string): void {
    if (this.shouldLog('error')) console['error'](format('error', message))
  }
}
