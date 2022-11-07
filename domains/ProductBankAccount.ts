export class ProductBankAccount {
  private _type: string;

  public get type(): string {
    return this._type;
  }

  public set type(type: string) {
    this._type = type;
  }
}
