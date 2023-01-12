import { Banks } from './enums';

export class ResponseConsultBankValues {
  private document: string;
  private bankAccount: string;
  private bankAccountDigit: string;
  private bankBranch: string;
  private bank: Banks;
  private startDate: string;
  private endDate: string;
  private type: string;

  public getDocument(): string {
    return this.document;
  }

  public setDocument(document: string): void {
    this.document = document;
  }

  public getBankAccount(): string {
    return this.bankAccount;
  }

  public setBankAccount(bankAccount: string): void {
    this.bankAccount = bankAccount;
  }

  public getBankAccountDigit(): string {
    return this.bankAccountDigit;
  }

  public setBankAccountDigit(bankAccountDigit: string): void {
    this.bankAccountDigit = bankAccountDigit;
  }

  public getBankBranch(): string {
    return this.bankBranch;
  }

  public setBankBranch(bankBranch: string): void {
    this.bankBranch = bankBranch;
  }

  public getBank(): Banks {
    return this.bank;
  }

  public setBank(bank: Banks): void {
    this.bank = bank;
  }

  public getStartDate(): string {
    return this.startDate;
  }

  public setStartDate(startDate: string): void {
    this.startDate = startDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }

  public setEndDate(endDate: string): void {
    this.endDate = endDate;
  }

  public getType(): string {
    return this.type;
  }

  public setType(type: string): void {
    this.type = type;
  }
}
