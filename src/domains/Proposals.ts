import { ProductType, CreditStatus, PendentDocuments } from "./enums";

export class Proposals {
  private customerServiceNumber: string;
  private type: ProductType;
  private product: string;
  private productId: string;
  private hasDocuments: boolean;
  private hasContracts: boolean;
  private logo: string;
  private lastStatus: CreditStatus;
  private pendentDocuments: PendentDocuments;
  private dateCreated: string;
  private lastUpdated: string;

  public getCustomerServiceNumber(): string {
    return this.customerServiceNumber;
  }

  public setCustomerServiceNumber(customerServiceNumber: string): void {
    this.customerServiceNumber = customerServiceNumber;
  }

  public getType(): ProductType {
    return this.type;
  }

  public setType(type: ProductType): void {
    this.type = type;
  }

  public getProduct(): string {
    return this.product;
  }

  public setProduct(product: string): void {
    this.product = product;
  }

  public getProductId(): string {
    return this.productId;
  }

  public setProductId(productId: string): void {
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

  public getLogo(): string {
    return this.logo;
  }

  public setLogo(logo: string): void {
    this.logo = logo;
  }

  public getLastStatus(): CreditStatus {
    return this.lastStatus;
  }

  public setLastStatus(lastStatus: CreditStatus): void {
    this.lastStatus = lastStatus;
  }

  public getPendentDocuments(): PendentDocuments {
    return this.pendentDocuments;
  }

  public setPendentDocuments(pendentDocuments: PendentDocuments): void {
    this.pendentDocuments = pendentDocuments;
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
