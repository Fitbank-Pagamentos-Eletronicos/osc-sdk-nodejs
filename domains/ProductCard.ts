import { ProductType, Network } from "./enums";

export class ProductCard {
  private _type: ProductType;
  private _network: Network;
  private _payDay: string;

  public get type(): ProductType {
    return this._type;
  }

  public set type(type: ProductType) {
    this._type = type;
  }

  public get network(): Network {
    return this._network;
  }

  public set network(network: Network) {
    this._network = network;
  }

  public get payDay(): string {
    return this._payDay;
  }

  public set payDay(payDay: string) {
    this._payDay = payDay;
  }
}
