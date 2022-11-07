import { CreditStatus } from "./enums";

export class BankAccount {
  private _customerServiceNumber: string;
  private _product: string;
  private _productId: number;
  private _hasDocuments: boolean;
  private _hasContracts: boolean;
  private _lastStatus: CreditStatus;
  private _dateCreated: string;
  private _lastUpdated: string;

  public get customerServiceNumber(): string {
    return this._customerServiceNumber;
  }

  public set customerServiceNumber(customerServiceNumber: string) {
    this._customerServiceNumber = customerServiceNumber;
  }

  public get product(): string {
    return this._product;
  }

  public set product(product: string) {
    this._product = product;
  }

  public get productId(): number {
    return this._productId;
  }

  public set productId(productId: number) {
    this._productId = productId;
  }

  public get hasDocuments(): boolean {
    return this._hasDocuments;
  }

  public set hasDocuments(hasDocuments: boolean) {
    this._hasDocuments = hasDocuments;
  }

  public get hasContracts(): boolean {
    return this._hasContracts;
  }

  public set hasContracts(hasContracts: boolean) {
    this._hasContracts = hasContracts;
  }

  public get lastStatus(): CreditStatus {
    return this._lastStatus;
  }

  public set lastStatus(lastStatus: CreditStatus) {
    this._lastStatus = lastStatus;
  }

  public get dateCreated(): string {
    return this._dateCreated;
  }

  public set dateCreated(dateCreated: string) {
    this._dateCreated = dateCreated;
  }

  public get lastUpdated(): string {
    return this._lastUpdated;
  }

  public set lastUpdated(lastUpdated: string) {
    this._lastUpdated = lastUpdated;
  }
}
