import { ProductType } from "./enums";

export class Products {
  private _type: ProductType;

  public get type(): ProductType {
    return this._type;
  }

  public set type(type: ProductType) {
    this._type = type;
  }
}
