import { DefaultError } from "../errors/default-error";
export declare class ValidationError extends DefaultError {
    name: string;
    statusCode: number;
}
