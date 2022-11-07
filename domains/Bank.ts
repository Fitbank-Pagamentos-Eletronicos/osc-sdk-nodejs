import { AccountType } from "./enums";
import { Banks } from "./enums";

export class Bank {
  private _bank: Banks;
  private _type: AccountType;
  private _agency: string;
  private _account: string;

  public get bank(): Banks {
    return this._bank;
  }

  public set bank(bank: Banks) {
    this._bank = bank;
  }

  public get type(): AccountType {
    return this._type;
  }

  public set type(type: AccountType) {
    this._type = type;
  }

  public get agency(): string {
    return this._agency;
  }

  public set agency(agency: string) {
    this._agency = agency;
  }

  public get account(): string {
    return this._account;
  }

  public set account(account: string) {
    this._account = account;
  }
}
