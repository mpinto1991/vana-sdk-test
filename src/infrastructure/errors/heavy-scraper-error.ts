import { DefaultError } from "../errors/default-error";

export class HeavyScraperError extends DefaultError {
  name = "HeavyScraperError";
  statusCode = 400;
}
