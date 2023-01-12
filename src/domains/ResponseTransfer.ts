import { Banks, AccountType } from './enums';

export class ResponseTransfer {
  private id: string;
  private ccbNumber: string;
  private value: number;
  private bankAccount: string;
  private bankAccountDigit: string;
  private bankBranch: string;
  private bank: Banks;
  private accountType: AccountType;
  private document: string;
  private status: string;
  private creditId: number;

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getCcbNumber(): string {
    return this.ccbNumber;
  }

  public setCcbNumber(ccbNumber: string): void {
    this.ccbNumber = ccbNumber;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
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

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public getCreditId(): number {
    return this.creditId;
  }

  public setCreditId(creditId: number): void {
    this.creditId = creditId;
  }
}
