import { ProductType, RealEstateType } from "./enums";

export class ProductHome {
  private _type: ProductType;
  private _value: number;
  private _installments: number;
  private _realEstateType: RealEstateType;
  private _realEstateValue: number;
  private _outstandingBalance: number;

  public get type(): ProductType {
    return this._type;
  }

  public set type(type: ProductType) {
    this._type = type;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
  }

  public get installments(): number {
    return this._installments;
  }

  public set installments(installments: number) {
    this._installments = installments;
  }

  public get realEstateType(): RealEstateType {
    return this._realEstateType;
  }

  public set realEstateType(realEstateType: RealEstateType) {
    this._realEstateType = realEstateType;
  }

  public get realEstateValue(): number {
    return this._realEstateValue;
  }

  public set realEstateValue(realEstateValue: number) {
    this._realEstateValue = realEstateValue;
  }

  public get outstandingBalance(): number {
    return this._outstandingBalance;
  }

  public set outstandingBalance(outstandingBalance: number) {
    this._outstandingBalance = outstandingBalance;
  }
}
