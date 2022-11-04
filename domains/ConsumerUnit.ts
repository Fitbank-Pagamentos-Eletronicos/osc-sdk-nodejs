export class ConsumerUnit {
  private _number: string;

  get number() {
    return this._number;
  }

  set number(number: string) {
    this._number = number;
  }
}
