export class ErrorField {
  private _field: string;
  private _message: string;

  public get field(): string {
    return this._field;
  }

  public set field(field: string) {
    this._field = field;
  }

  public get message(): string {
    return this._message;
  }

  public set message(message: string) {
    this._message = message;
  }
}
