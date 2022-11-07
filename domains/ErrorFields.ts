import { ErrorField } from "./ErrorField";

export class ErrorFields {
  private _code: string;
  private _message: string;
  private _errors: ErrorField;

  public get code(): string {
    return this._code;
  }

  public set code(code: string) {
    this._code = code;
  }

  public get message(): string {
    return this._message;
  }

  public set message(message: string) {
    this._message = message;
  }

  public get errors(): ErrorField {
    return this._errors;
  }

  public set errors(errors: ErrorField) {
    this._errors = errors;
  }
}
