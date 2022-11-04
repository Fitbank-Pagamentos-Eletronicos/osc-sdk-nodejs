import { AccountType } from "./enums";

export class Bank {
  private _banks: string; //importar enum
  private _type: AccountType;
  private _agency: string;
  private _account: string;

  get banks() {
    return this._banks;
  }

  get type() {
    return this._type;
  }

  get agency() {
    return this._agency;
  }

  get account() {
    return this._account;
  }

  set banks(banks: string) {
    this._banks = banks;
  }

  set type(type: AccountType) {
    this._type = type;
  }

  set agency(agency: string) {
    this._agency = agency;
  }

  set account(account: string) {
    this._account = account;
  }
}
