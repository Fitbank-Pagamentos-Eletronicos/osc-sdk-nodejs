export class ProductBankAccount {
  private _type: string;

  get type() {
    return this._type;
  }

  set type(type: string) {
    this._type = type;
  }
}
