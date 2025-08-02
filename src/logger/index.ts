export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'silent'

let currentLevel: LogLevel = 'info'

const levelOrder: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 100,
}

export function setLogLevel(level: LogLevel) {
  currentLevel = level
}

function shouldLog(level: LogLevel): boolean {
  return levelOrder[level] >= levelOrder[currentLevel]
}

function log(level: LogLevel, ...args: unknown[]) {
  if (!shouldLog(level) || level === 'silent') return
  const prefix = `[${level.toUpperCase()}]`
  const timestamp = new Date().toISOString()
  const method = console[level === 'debug' ? 'debug'
                     : level === 'info' ? 'info'
                     : level === 'warn' ? 'warn'
                     : 'error'] as (...args: unknown[]) => void
  method(`${timestamp} ${prefix}`, ...args)
}


export const logger = {
  debug: (...args: unknown[]) => log('debug', ...args),
  info: (...args: unknown[]) => log('info', ...args),
  warn: (...args: unknown[]) => log('warn', ...args),
  error: (...args: unknown[]) => log('error', ...args),
  setLevel: setLogLevel,
}
