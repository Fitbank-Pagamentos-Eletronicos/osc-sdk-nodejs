import { Products } from './Products';

export class ProductLoan extends Products {
  private value: number;
  private installments: number;

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public getInstallments(): number {
    return this.installments;
  }

  public setInstallments(installments: number): void {
    this.installments = installments;
  }
}
