import { Network } from "./enums";

export class MatchCard {
  private _productId: number;
  private _name: string;
  private _logo: string;
  private _annuity: number;
  private _network: Network;

  public get productId(): number {
    return this._productId;
  }

  public set productId(productId: number) {
    this._productId = productId;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get logo(): string {
    return this._logo;
  }

  public set logo(logo: string) {
    this._logo = logo;
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
}
