import { Banks, AccountType } from './enums';

export class Bank {
  private bank: Banks;
  private type: AccountType;
  private agency: string;
  private account: string;

  public getBank(): Banks {
    return this.bank;
  }

  public setBank(bank: Banks): void {
    this.bank = bank;
  }

  public getType(): AccountType {
    return this.type;
  }

  public setType(type: AccountType): void {
    this.type = type;
  }

  public getAgency(): string {
    return this.agency;
  }

  public setAgency(agency: string): void {
    this.agency = agency;
  }

  public getAccount(): string {
    return this.account;
  }

  public setAccount(account: string): void {
    this.account = account;
  }
}
