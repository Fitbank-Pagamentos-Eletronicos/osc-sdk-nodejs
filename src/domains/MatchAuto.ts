import { Matches } from './';

export class MatchAuto extends Matches {
  private minValue: number;
  private maxValue: number;
  private minInstallment: number;
  private maxInstallment: number;
  private monthlyTax: number;

  public getMinValue(): number {
    return this.minValue;
  }

  public setMinValue(minValue: number): void {
    this.minValue = minValue;
  }

  public getMaxValue(): number {
    return this.maxValue;
  }

  public setMaxValue(maxValue: number): void {
    this.maxValue = maxValue;
  }

  public getMinInstallment(): number {
    return this.minInstallment;
  }

  public setMinInstallment(minInstallment: number): void {
    this.minInstallment = minInstallment;
  }

  public getMaxInstallment(): number {
    return this.maxInstallment;
  }

  public setMaxInstallment(maxInstallment: number): void {
    this.maxInstallment = maxInstallment;
  }

  public getMonthlyTax(): number {
    return this.monthlyTax;
  }

  public setMonthlyTax(monthlyTax: number): void {
    this.monthlyTax = monthlyTax;
  }
}
