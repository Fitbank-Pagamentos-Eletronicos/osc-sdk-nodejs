import { ProductType } from './enums';

export class ProductBankAccount {
  private type: ProductType;

  public getType(): ProductType {
    return this.type;
  }

  public setType(type: ProductType): void {
    this.type = type;
  }
}
