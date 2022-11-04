import { ProductType } from "./enums";

export class ProductLoan {
  private _type: ProductType;
  private _number: string;
  private _installments: number;

  get type() {
    return this._type;
  }

  get number() {
    return this._number;
  }

  get installments() {
    return this._installments;
  }

  set type(type: ProductType) {
    this._type = type;
  }

  set number(number: string) {
    this._number = number;
  }

  set installments(installments: number) {
    this._installments = installments;
  }
}
