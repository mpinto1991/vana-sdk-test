"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const default_error_1 = require("../errors/default-error");
class ValidationError extends default_error_1.DefaultError {
    constructor() {
        super(...arguments);
        this.name = "ValidationError";
        this.statusCode = 400;
    }
}
exports.ValidationError = ValidationError;
