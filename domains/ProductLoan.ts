import { ProductType } from "./enums";
import { Products } from "./Products";

export class ProductLoan extends Products {
  private _number: string;
  private _installments: number;

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
