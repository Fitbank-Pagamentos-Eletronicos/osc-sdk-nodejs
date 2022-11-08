export class ErrorField {
  private field: string;
  private message: string;

  public getField(): string {
    return this.field;
  }

  public setField(field: string): void {
    this.field = field;
  }

  public getMessage(): string {
    return this.message;
  }

  public setMessage(message: string): void {
    this.message = message;
  }
}
