import { ProductType } from "./enums/ProductType";
import { RealEstateType } from "./enums/RealEstateType";

export class ProductHome {
  private _type: ProductType;
  private _value: number;
  private _installments: number;
  private _realEstateType: RealEstateType;
  private _realEstateValue: number;
  private _outstandingBalance: number;

  get type() {
    return this._type;
  }

  get value() {
    return this._value;
  }

  get installments() {
    return this._installments;
  }

  get realEstateType() {
    return this._realEstateType;
  }

  get realEstateValue() {
    return this._realEstateValue;
  }

  get outstandingBalance() {
    return this._outstandingBalance;
  }

  set type(type: ProductType) {
    this._type = type;
  }

  set value(value: number) {
    this._value = value;
  }

  set installments(installments: number) {
    this._installments = installments;
  }

  set realEstateType(realEstateType: RealEstateType) {
    this._realEstateType = realEstateType;
  }

  set realEstateValue(realEstateValue: number) {
    this._realEstateValue = realEstateValue;
  }

  set outstandingBalance(outstandingBalance: number) {
    this._outstandingBalance = outstandingBalance;
  }
}
