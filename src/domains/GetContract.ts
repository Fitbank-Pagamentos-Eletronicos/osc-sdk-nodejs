import { ContractBody } from './ContractBody';

export class GetContract {
  private customerServiceNumber: string;
  private contracts: ContractBody[];

  public getCustomerServiceNumber(): string {
    return this.customerServiceNumber;
  }

  public setCustomerServiceNumber(customerServiceNumber: string): void {
    this.customerServiceNumber = customerServiceNumber;
  }

  public getContracts(): ContractBody[] {
    return this.contracts;
  }

  public setContracts(contracts: ContractBody[]): void {
    this.contracts = contracts;
  }
}
