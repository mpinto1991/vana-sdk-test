import { ResponseModel } from "../responses/response-model";
export declare type ErrorParams = {
    name?: string;
    message?: string;
    statusCode?: number;
    messages?: string[];
    stack?: Error["stack"];
};
export declare type ErrorResponseModel = Omit<ResponseModel<ErrorParams>, "body">;
export declare class DefaultError extends Error implements ErrorResponseModel {
    statusCode: number;
    messages: string[];
    constructor(message?: string);
}
