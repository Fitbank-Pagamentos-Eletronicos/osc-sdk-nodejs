import { Products } from './Products';

export class ProductCaas extends Products {
  private releaseDate: string;
  private dueDate: string;
  private installments: number;
  private monthly_tax: number;
  private cadValue: number;
  private value: number;

  public getReleaseDate(): string {
    return this.releaseDate;
  }

  public setReleaseDate(releaseDate: string): void {
    this.releaseDate = releaseDate;
  }

  public getDueDate(): string {
    return this.dueDate;
  }

  public setDueDate(dueDate: string): void {
    this.dueDate = dueDate;
  }

  public getInstallments(): number {
    return this.installments;
  }

  public setInstallments(installments: number): void {
    this.installments = installments;
  }

  public getMonthly_tax(): number {
    return this.monthly_tax;
  }

  public setMonthly_tax(monthly_tax: number): void {
    this.monthly_tax = monthly_tax;
  }

  public getCadValue(): number {
    return this.cadValue;
  }

  public setCadValue(cadValue: number): void {
    this.cadValue = cadValue;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }
}
