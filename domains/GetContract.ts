import { Contracts } from "./Contracts";

export class GetContract {
  private _customerServiceNumber: string;
  private _contracts: Contracts;

  public get customerServiceNumber(): string {
    return this._customerServiceNumber;
  }

  public set customerServiceNumber(customerServiceNumber: string) {
    this._customerServiceNumber = customerServiceNumber;
  }

  public get contracts(): Contracts {
    return this._contracts;
  }

  public set contracts(contracts: Contracts) {
    this._contracts = contracts;
  }
}
