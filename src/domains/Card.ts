import { Network } from './enums';
import { Proposals } from './';

export class Card extends Proposals {
  private international: boolean;
  private annuity: number;
  private network: Network;
  private prepaid: boolean;
  private digitalAccount: boolean;

  public isInternational(): boolean {
    return this.international;
  }

  public setInternational(international: boolean): void {
    this.international = international;
  }

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

  public isPrepaid(): boolean {
    return this.prepaid;
  }

  public setPrepaid(prepaid: boolean): void {
    this.prepaid = prepaid;
  }

  public isDigitalAccount(): boolean {
    return this.digitalAccount;
  }

  public setDigitalAccount(digitalAccount: boolean): void {
    this.digitalAccount = digitalAccount;
  }
}
