import { CreditStatus, Network, PendentDocuments, ProductType } from "./enums";

export class Card {
  private _customerServiceNumber: string;
  private _type: ProductType;
  private _product: string;
  private _productId: string;
  private _hasDocuments: boolean;
  private _hasContracts: boolean;
  private _logo: string;
  private _lastStatus: CreditStatus;
  private _pendentDocuments: PendentDocuments;
  private _dateCreated: string;
  private _lastUpdated: string;
  private _international: boolean;
  private _annuity: number;
  private _network: Network;
  private _prepaid: boolean;
  private _digitalAccount: boolean;

  public get customerServiceNumber(): string {
    return this._customerServiceNumber;
  }

  public set customerServiceNumber(customerServiceNumber: string) {
    this._customerServiceNumber = customerServiceNumber;
  }

  public get type(): ProductType {
    return this._type;
  }

  public set type(type: ProductType) {
    this._type = type;
  }

  public get product(): string {
    return this._product;
  }

  public set product(product: string) {
    this._product = product;
  }

  public get productId(): string {
    return this._productId;
  }

  public set productId(productId: string) {
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

  public get logo(): string {
    return this._logo;
  }

  public set logo(logo: string) {
    this._logo = logo;
  }

  public get lastStatus(): CreditStatus {
    return this._lastStatus;
  }

  public set lastStatus(lastStatus: CreditStatus) {
    this._lastStatus = lastStatus;
  }

  public get pendentDocuments(): PendentDocuments {
    return this._pendentDocuments;
  }

  public set pendentDocuments(pendentDocuments: PendentDocuments) {
    this._pendentDocuments = pendentDocuments;
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

  public get international(): boolean {
    return this._international;
  }

  public set international(international: boolean) {
    this._international = international;
  }

  public get annuity(): number {
    return this._annuity;
  }

  public set annuity(annuity: number) {
    this._annuity = annuity;
  }

  public get network(): Network {
    return this._network;
  }

  public set network(network: Network) {
    this._network = network;
  }

  public get prepaid(): boolean {
    return this._prepaid;
  }

  public set prepaid(prepaid: boolean) {
    this._prepaid = prepaid;
  }

  public get digitalAccount(): boolean {
    return this._digitalAccount;
  }

  public set digitalAccount(digitalAccount: boolean) {
    this._digitalAccount = digitalAccount;
  }
}
