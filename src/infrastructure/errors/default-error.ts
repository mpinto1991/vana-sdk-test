import { ResponseModel } from "../responses/response-model";

export interface ErrorParams {
  name?: string;
  message?: string;
  statusCode?: number;
  messages?: string[];
  stack?: Error["stack"];
}

export type ErrorResponseModel = Omit<ResponseModel<ErrorParams>, "body">;

export class DefaultError extends Error implements ErrorResponseModel {
  public statusCode = 500;
  public messages: string[] = [];

  constructor(message?: string) {
    super(message);
    this.message = message ?? this.name;
    this.name = "DefaultError";
    this.messages.push(this.message);
  }
}
