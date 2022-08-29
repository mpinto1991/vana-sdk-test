"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultError = void 0;
class DefaultError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 500;
        this.messages = [];
        this.message = message || this.name;
        this.name = "DefaultError";
        this.messages.push(this.message);
    }
}
exports.DefaultError = DefaultError;
