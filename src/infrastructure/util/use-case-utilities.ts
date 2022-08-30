import { ValidationError } from "../errors/validation-error";
import { VanaEvent } from "../types/vana-event-base";
import { VanaLogger } from "../util/vana-logger";

export function extractData(event: VanaEvent, logger: VanaLogger): any {
  let data;
  try {
    if (event.body != null) {
      const body = JSON.parse(event.body);
      data = body.data;
    } else {
      data = event.data;
    }
  } catch (error) {
    const err = error as Error;
    logger.error(err);
    throw new ValidationError("Could not parse data: " + err.message);
  }
  if (data === null) {
    logger.error("Validation error: Missing data property");
    throw new ValidationError("Validation error: Missing data property");
  }
  return data;
}
