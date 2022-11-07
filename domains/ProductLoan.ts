import { ProductType } from "./enums";

export class ProductLoan {
  private _type: ProductType;
  private _number: string;
  private _installments: number;

  public get type(): ProductType {
    return this._type;
  }

  public set type(type: ProductType) {
    this._type = type;
  }

  public get number(): string {
    return this._number;
  }

  public set number(number: string) {
    this._number = number;
  }

  public get installments(): number {
    return this._installments;
  }

  public set installments(installments: number) {
    this._installments = installments;
  }
}
