import { Logger, LogLevel } from "./types.js";
import { ConsoleLogger } from "./console-logger.js";

let currentLogger: Logger = new ConsoleLogger("info");

export function createConsoleLogger(level: LogLevel = "info"): Logger {
  return new ConsoleLogger(level);
}

export function setGlobalLogger(logger: Logger): void {
  currentLogger = logger;
}

export function getLogger(): Logger {
  return currentLogger;
}
