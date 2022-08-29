"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeavyScraperError = void 0;
const default_error_1 = require("../errors/default-error");
class HeavyScraperError extends default_error_1.DefaultError {
    constructor() {
        super(...arguments);
        this.name = "HeavyScraperError";
        this.statusCode = 400;
    }
}
exports.HeavyScraperError = HeavyScraperError;
