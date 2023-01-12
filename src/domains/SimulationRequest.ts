import { ProductType } from './enums';

export class SimulationRequest {
  private type: ProductType;
  private releasedDate: string;
  private dueDate: string;
  private installments: number;
  private monthly_Tax: number;
  private cadValue: number;
  private value: number;

  public getType(): ProductType {
    return this.type;
  }

  public setType(type: ProductType): void {
    this.type = type;
  }

  public getReleasedDate(): string {
    return this.releasedDate;
  }

  public setReleasedDate(releasedDate: string): void {
    this.releasedDate = releasedDate;
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

  public getMonthly_Tax(): number {
    return this.monthly_Tax;
  }

  public setMonthly_Tax(monthly_Tax: number): void {
    this.monthly_Tax = monthly_Tax;
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
