import { DefaultError } from "../errors/default-error";
export declare class HeavyScraperError extends DefaultError {
    name: string;
    statusCode: number;
}
