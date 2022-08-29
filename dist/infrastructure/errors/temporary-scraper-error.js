"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemporaryScraperError = void 0;
const default_error_1 = require("../errors/default-error");
class TemporaryScraperError extends default_error_1.DefaultError {
    constructor() {
        super(...arguments);
        this.name = "TemporaryScraperError";
        this.statusCode = 400;
    }
}
exports.TemporaryScraperError = TemporaryScraperError;
