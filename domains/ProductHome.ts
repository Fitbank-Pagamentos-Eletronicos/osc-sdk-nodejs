import { ProductType, RealEstateType } from "./enums";
import { Products } from "./Products";

export class ProductHome extends Products {
  private value: number;
  private installments: number;
  private realEstateType: RealEstateType;
  private realEstateValue: number;
  private outstandingBalance: number;

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public getInstallments(): number {
    return this.installments;
  }

  public setInstallments(installments: number): void {
    this.installments = installments;
  }

  public getRealEstateType(): RealEstateType {
    return this.realEstateType;
  }

  public setRealEstateType(realEstateType: RealEstateType): void {
    this.realEstateType = realEstateType;
  }

  public getRealEstateValue(): number {
    return this.realEstateValue;
  }

  public setRealEstateValue(realEstateValue: number): void {
    this.realEstateValue = realEstateValue;
  }

  public getOutstandingBalance(): number {
    return this.outstandingBalance;
  }

  public setOutstandingBalance(outstandingBalance: number): void {
    this.outstandingBalance = outstandingBalance;
  }
}
