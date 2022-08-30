import { LambdaLog, LogMessage } from "lambda-log";
const logger = new LambdaLog();

export class VanaLogger {
  meta?: object;
  tags?: string[];

  constructor(meta?: object, tags?: string[]) {
    this.meta = meta;
    this.tags = tags;
  }

  setMeta(meta?: object): void {
    this.meta = meta;
  }

  setTags(tags?: string[]): void {
    this.tags = tags;
  }

  info(msg: string): LogMessage {
    return logger.info(msg, this.meta, this.tags);
  }

  warning(msg: string): LogMessage {
    return logger.warn(msg, this.meta, this.tags);
  }

  debug(msg: string): LogMessage {
    return logger.debug(msg, this.meta, this.tags);
  }

  exception(msg: string | Error): LogMessage {
    return logger.error(msg, this.meta, this.tags);
  }

  error(msg: string | Error): LogMessage {
    return logger.error(msg, this.meta, this.tags);
  }

  assert(test: any, msg: string): boolean | LogMessage {
    return logger.assert(test, msg, this.meta, this.tags);
  }
}
