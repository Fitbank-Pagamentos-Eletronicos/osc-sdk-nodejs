import { CreditStatus, PendentDocuments, ProductType } from "./enums";
import { Proposals } from "./Proposals";

export class Home extends Proposals {
  private value: number;
  private installments: number;
  private monthlyTax: number;
  private installmentsValue: number;
  private iofValue: number;
  private grossValue: number;
  private firstPaymentDate: string;
  private cet: number;
  private releasedDate: string;

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

  public getMonthlyTax(): number {
    return this.monthlyTax;
  }

  public setMonthlyTax(monthlyTax: number): void {
    this.monthlyTax = monthlyTax;
  }

  public getInstallmentsValue(): number {
    return this.installmentsValue;
  }

  public setInstallmentsValue(installmentsValue: number): void {
    this.installmentsValue = installmentsValue;
  }

  public getIofValue(): number {
    return this.iofValue;
  }

  public setIofValue(iofValue: number): void {
    this.iofValue = iofValue;
  }

  public getGrossValue(): number {
    return this.grossValue;
  }

  public setGrossValue(grossValue: number): void {
    this.grossValue = grossValue;
  }

  public getFirstPaymentDate(): string {
    return this.firstPaymentDate;
  }

  public setFirstPaymentDate(firstPaymentDate: string): void {
    this.firstPaymentDate = firstPaymentDate;
  }

  public getCet(): number {
    return this.cet;
  }

  public setCet(cet: number): void {
    this.cet = cet;
  }

  public getReleasedDate(): string {
    return this.releasedDate;
  }

  public setReleasedDate(releasedDate: string): void {
    this.releasedDate = releasedDate;
  }
}
