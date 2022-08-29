"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseUtil = void 0;
const validation_error_1 = require("../errors/validation-error");
const vana_logger_1 = require("./vana-logger");
let logger = new vana_logger_1.VanaLogger();
class UseCaseUtil {
    static extractData(event) {
        let data;
        try {
            if (event["body"]) {
                const body = JSON.parse(event.body);
                data = body["data"];
            }
            else {
                data = event["data"];
            }
        }
        catch (error) {
            let err = error;
            logger.error(err);
            throw new validation_error_1.ValidationError("Could not parse data: " + err.message);
        }
        if (!data) {
            logger.error("Validation error: Missing data property");
            throw new validation_error_1.ValidationError("Validation error: Missing data property");
        }
        return data;
    }
}
exports.UseCaseUtil = UseCaseUtil;
