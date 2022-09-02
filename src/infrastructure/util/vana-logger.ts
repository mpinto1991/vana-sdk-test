import { LambdaLog, LogMessage } from "lambda-log";

const logger = new LambdaLog();

export class VanaLogger {

  info(msg: string, meta?: object, tags?: string[]): LogMessage {
    return logger.info(msg, meta, tags);
  }

  warning(msg: string, meta?: object, tags?: string[]): LogMessage {
    return logger.warn(msg, meta, tags);
  }

  debug(msg: string, meta?: object, tags?: string[]): LogMessage {
    return logger.debug(msg, meta, tags);
  }

  exception(msg: string | Error, meta?: object, tags?: string[]): LogMessage {
    return logger.error(msg, meta, tags);
  }

  error(msg: string | Error, meta?: object, tags?: string[]): LogMessage {
    return logger.error(msg, meta, tags);
  }

  assert(test: any, msg: string, meta?: object, tags?: string[]): boolean | LogMessage {
    return logger.assert(test, msg, meta, tags);
  }
}
