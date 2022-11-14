import { CreditStatus } from "./enums";

export class BankAccount {
  private customerServiceNumber: string;
  private product: string;
  private productId: number;
  private hasDocuments: boolean;
  private hasContracts: boolean;
  private lastStatus: CreditStatus;
  private dateCreated: string;
  private lastUpdated: string;

  public getCustomerServiceNumber(): string {
    return this.customerServiceNumber;
  }

  public setCustomerServiceNumber(customerServiceNumber: string): void {
    this.customerServiceNumber = customerServiceNumber;
  }

  public getProduct(): string {
    return this.product;
  }

  public setProduct(product: string): void {
    this.product = product;
  }

  public getProductId(): number {
    return this.productId;
  }

  public setProductId(productId: number): void {
    this.productId = productId;
  }

  public isHasDocuments(): boolean {
    return this.hasDocuments;
  }

  public setHasDocuments(hasDocuments: boolean): void {
    this.hasDocuments = hasDocuments;
  }

  public isHasContracts(): boolean {
    return this.hasContracts;
  }

  public setHasContracts(hasContracts: boolean): void {
    this.hasContracts = hasContracts;
  }

  public getLastStatus(): CreditStatus {
    return this.lastStatus;
  }

  public setLastStatus(lastStatus: CreditStatus): void {
    this.lastStatus = lastStatus;
  }

  public getDateCreated(): string {
    return this.dateCreated;
  }

  public setDateCreated(dateCreated: string): void {
    this.dateCreated = dateCreated;
  }

  public getLastUpdated(): string {
    return this.lastUpdated;
  }

  public setLastUpdated(lastUpdated: string): void {
    this.lastUpdated = lastUpdated;
  }
}
