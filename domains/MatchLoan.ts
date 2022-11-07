export class MatchLoan {
  private _productId: number;
  private _name: string;
  private _logo: string;
  private _minValue: number;
  private _maxValue: number;
  private _minInstallment: number;
  private _maxInstallment: number;
  private _monthlyTax: number;

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

  public get minValue(): number {
    return this._minValue;
  }

  public set minValue(minValue: number) {
    this._minValue = minValue;
  }

  public get maxValue(): number {
    return this._maxValue;
  }

  public set maxValue(maxValue: number) {
    this._maxValue = maxValue;
  }

  public get minInstallment(): number {
    return this._minInstallment;
  }

  public set minInstallment(minInstallment: number) {
    this._minInstallment = minInstallment;
  }

  public get maxInstallment(): number {
    return this._maxInstallment;
  }

  public set maxInstallment(maxInstallment: number) {
    this._maxInstallment = maxInstallment;
  }

  public get monthlyTax(): number {
    return this._monthlyTax;
  }

  public set monthlyTax(monthlyTax: number) {
    this._monthlyTax = monthlyTax;
  }
}
