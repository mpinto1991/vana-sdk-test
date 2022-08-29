"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VanaLogger = void 0;
const lambda_log_1 = require("lambda-log");
const logger = new lambda_log_1.LambdaLog();
class VanaLogger {
    constructor(meta, tags) {
        this.meta = meta;
        this.tags = tags;
    }
    setMeta(meta) {
        this.meta = meta;
    }
    setTags(tags) {
        this.tags = tags;
    }
    info(msg) {
        return logger.info(msg, this.meta, this.tags);
    }
    warning(msg) {
        return logger.warn(msg, this.meta, this.tags);
    }
    debug(msg) {
        return logger.debug(msg, this.meta, this.tags);
    }
    exception(msg) {
        return logger.error(msg, this.meta, this.tags);
    }
    error(msg) {
        return logger.error(msg, this.meta, this.tags);
    }
    assert(test, msg) {
        return logger.assert(test, msg, this.meta, this.tags);
    }
}
exports.VanaLogger = VanaLogger;
