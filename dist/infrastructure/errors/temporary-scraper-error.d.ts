import { DefaultError } from "../errors/default-error";
export declare class TemporaryScraperError extends DefaultError {
    name: string;
    statusCode: number;
}
