import { ProductType, RealEstateType } from "./enums";
import { Products } from "./Products";

export class ProductHome extends Products {
  private _value: number;
  private _installments: number;
  private _realEstateType: RealEstateType;
  private _realEstateValue: number;
  private _outstandingBalance: number;

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
