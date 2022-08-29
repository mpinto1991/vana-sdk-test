import { DefaultError } from "../errors/default-error";

export class ValidationError extends DefaultError {
    name = "ValidationError";
    statusCode = 400;
}
