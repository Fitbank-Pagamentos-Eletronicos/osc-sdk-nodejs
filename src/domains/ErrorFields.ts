import { ErrorField } from "./ErrorField";

export class ErrorFields {
  private code: string;
  private message: string;
  private errors: ErrorField[];

  public getCode(): string {
    return this.code;
  }

  public setCode(code: string): void {
    this.code = code;
  }

  public getMessage(): string {
    return this.message;
  }

  public setMessage(message: string): void {
    this.message = message;
  }

  public getErrors(): ErrorField[] {
    return this.errors;
  }

  public setErrors(errors: ErrorField[]): void {
    this.errors = errors;
  }
}
