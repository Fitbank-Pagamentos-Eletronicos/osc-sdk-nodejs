import { Contracts } from "./Contracts";

export class GetContract {
  private customerServiceNumber: string;
  private contracts: Contracts[];

  public getCustomerServiceNumber(): string {
    return this.customerServiceNumber;
  }

  public setCustomerServiceNumber(customerServiceNumber: string): void {
    this.customerServiceNumber = customerServiceNumber;
  }

  public getContracts(): Contracts[] {
    return this.contracts;
  }

  public setContracts(contracts: Contracts[]): void {
    this.contracts = contracts;
  }
}
