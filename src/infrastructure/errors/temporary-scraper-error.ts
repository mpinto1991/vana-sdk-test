import { DefaultError } from "../errors/default-error";

export class TemporaryScraperError extends DefaultError {
    name = "TemporaryScraperError";
    statusCode = 400;
}
