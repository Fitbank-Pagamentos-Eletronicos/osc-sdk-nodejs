import { ProductType, CreditStatus, PendentDocuments } from "./enums";

export class Loan {
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
  private _value: number;
  private _installments: number;
  private _monthlyTax: number;
  private _installmentsValue: number;
  private _iofValue: number;
  private _grossValue: number;
  private _firstPaymentDate: string;
  private _cet: number;
  private _releasedDate: string;

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

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
  }

  public get installments(): number {
    return this._installments;
  }

  public set installments(installments: number) {
    this._installments = installments;
  }

  public get monthlyTax(): number {
    return this._monthlyTax;
  }

  public set monthlyTax(monthlyTax: number) {
    this._monthlyTax = monthlyTax;
  }

  public get installmentsValue(): number {
    return this._installmentsValue;
  }

  public set installmentsValue(installmentsValue: number) {
    this._installmentsValue = installmentsValue;
  }

  public get iofValue(): number {
    return this._iofValue;
  }

  public set iofValue(iofValue: number) {
    this._iofValue = iofValue;
  }

  public get grossValue(): number {
    return this._grossValue;
  }

  public set grossValue(grossValue: number) {
    this._grossValue = grossValue;
  }

  public get firstPaymentDate(): string {
    return this._firstPaymentDate;
  }

  public set firstPaymentDate(firstPaymentDate: string) {
    this._firstPaymentDate = firstPaymentDate;
  }

  public get cet(): number {
    return this._cet;
  }

  public set cet(cet: number) {
    this._cet = cet;
  }

  public get releasedDate(): string {
    return this._releasedDate;
  }

  public set releasedDate(releasedDate: string) {
    this._releasedDate = releasedDate;
  }
}
