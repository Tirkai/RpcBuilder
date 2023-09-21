import { ErrorType } from "./ErrorType.ts";

interface IRpcResponseErrorOptions {
  error: ErrorType;
  message: string;
}

export class RpcResponseError {
  error: ErrorType;
  message: string;

  constructor(options: IRpcResponseErrorOptions) {
    this.error = options.error;
    this.message = options.message;
  }
}
