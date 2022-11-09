import { ProductType } from "./enums";
import { Products } from "./Products";

export class ProductLoan extends Products {
  private number: string;
  private installments: number;

  public getNumber(): string {
    return this.number;
  }

  public setNumber(number: string): void {
    this.number = number;
  }

  public getInstallments(): number {
    return this.installments;
  }

  public setInstallments(installments: number): void {
    this.installments = installments;
  }
}
