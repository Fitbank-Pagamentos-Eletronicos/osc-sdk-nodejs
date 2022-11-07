export class ConsumerUnit {
  private _number: string;

  public get number(): string {
    return this._number;
  }

  public set number(number: string) {
    this._number = number;
  }
}
