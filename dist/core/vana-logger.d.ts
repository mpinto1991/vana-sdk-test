import { LogMessage } from "lambda-log";
export declare class VanaLogger {
    meta?: object;
    tags?: string[];
    constructor(meta?: object, tags?: string[]);
    setMeta(meta?: object): void;
    setTags(tags?: string[]): void;
    info(msg: string): LogMessage;
    warning(msg: string): LogMessage;
    debug(msg: string): LogMessage;
    exception(msg: string | Error): LogMessage;
    error(msg: string | Error): LogMessage;
    assert(test: any, msg: string): boolean | LogMessage;
}
