import { Network } from "./enums";
import { Match } from "./Match";

export class MatchCard extends Match {
  private annuity: number;
  private network: Network;

  public getAnnuity(): number {
    return this.annuity;
  }

  public setAnnuity(annuity: number): void {
    this.annuity = annuity;
  }

  public getNetwork(): Network {
    return this.network;
  }

  public setNetwork(network: Network): void {
    this.network = network;
  }
}
