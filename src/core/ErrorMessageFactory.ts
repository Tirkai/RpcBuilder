import { ErrorType } from "./ErrorType.ts";

type ErrorPayload = { error: ErrorType; message: string };
type ErrorFactoryMethod = (options: Record<string, string>) => ErrorPayload;

export class ErrorMessageFactory {
  public static moduleNotFound: ErrorFactoryMethod = ({ name }) => ({
    error: ErrorType.ModuleNotFound,
    message: `Module ${name} not found`,
  });

  public static handlerNotFound: ErrorFactoryMethod = ({ name }) => ({
    error: ErrorType.HandlerNotFound,
    message: `Handler ${name} not found`,
  });

  public static elementNotFound: ErrorFactoryMethod = ({ id }) => ({
    error: ErrorType.ElementNotFound,
    message: `Element ${id} not found`,
  });
}
