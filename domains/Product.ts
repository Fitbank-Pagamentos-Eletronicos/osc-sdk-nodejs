export class Product {
  private _productId: number;
  private _name: string;
  private _logo: string;

  public get productId(): number {
    return this._productId;
  }

  public set productId(productId: number) {
    this._productId = productId;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get logo(): string {
    return this._logo;
  }

  public set logo(logo: string) {
    this._logo = logo;
  }
}
