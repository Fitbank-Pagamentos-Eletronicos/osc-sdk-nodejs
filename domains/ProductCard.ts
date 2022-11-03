import { ProductType } from "./enums/ProductType";
import { Network } from "./enums/Network";

export class ProductCard {
  private _type: ProductType;
  private _network: Network;
  private _payDay: string;

  get type() {
    return this._type;
  }

  get network() {
    return this._network;
  }

  get payDay() {
    return this._payDay;
  }

  set type(type: ProductType) {
    this._type = type;
  }

  set network(network: Network) {
    this._network = network;
  }

  set payDay(payDay: string) {
    this._payDay = payDay;
  }
}
