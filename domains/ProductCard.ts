import { ProductType, Network } from "./enums";
import { Products } from "./Products";

export class ProductCard extends Products {
  private network: Network;
  private payDay: string;

  public getNetwork(): Network {
    return this.network;
  }

  public setNetwork(network: Network): void {
    this.network = network;
  }

  public getPayDay(): string {
    return this.payDay;
  }

  public setPayDay(payDay: string): void {
    this.payDay = payDay;
  }
}
