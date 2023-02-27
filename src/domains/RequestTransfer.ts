import { Banks, AccountType } from './enums';

export class RequestTransfer {
  private value: number;
  private ccb: string;
  private bankAccount: string;
  private bankAccountDigit: string;
  private bankBranch: string;
  private bank: Banks;
  private accountType: AccountType;
  private document: string;

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public getCcb(): string {
    return this.ccb;
  }

  public setCcb(ccb: string): void {
    this.ccb = ccb;
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

  public getAccountType(): AccountType {
    return this.accountType;
  }

  public setAccountType(accountType: AccountType): void {
    this.accountType = accountType;
  }

  public getDocument(): string {
    return this.document;
  }

  public setDocument(document: string): void {
    this.document = document;
  }
}
