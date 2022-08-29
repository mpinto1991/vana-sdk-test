import { ValidationError } from "../errors/validation-error";
import { VanaLogger } from "../util/vana-logger"
import { VanaEvent } from "../types/vana-event-base";

let logger = new VanaLogger();

export class UseCaseUtilities {
    static extractData(event: VanaEvent) {
        let data;
        try {
            if (event["body"]) {
                const body = JSON.parse(event.body);
                data = body["data"];
            } else {
                data = event["data"];
            }
        } catch (error) {
            let err = error as Error;
            logger.error(err);
            throw new ValidationError("Could not parse data: " + err.message);
        }
        if (!data) {
            logger.error("Validation error: Missing data property");
            throw new ValidationError("Validation error: Missing data property");
        }
        return data;
    }
}
