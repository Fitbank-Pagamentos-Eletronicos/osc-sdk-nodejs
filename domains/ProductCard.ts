import { ProductType, Network } from "./enums";
import { Products } from "./Products";

export class ProductCard extends Products {
  private _network: Network;
  private _payDay: string;

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
