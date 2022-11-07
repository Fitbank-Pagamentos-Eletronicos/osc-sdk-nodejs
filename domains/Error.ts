export class Error {
  private _code: string;
  private _message: string;

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
}
