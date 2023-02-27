import moment from 'moment';
import { State, IdentityType, IdentityIssuer } from './enums';

export class Identity {
  private type: IdentityType;
  private number: string;
  private issuer: IdentityIssuer;
  private state: State;
  private issuingDate: string;

  public getType(): IdentityType {
    return this.type;
  }

  public setType(type: IdentityType): void {
    this.type = type;
  }

  public getNumber(): string {
    return this.number;
  }

  public setNumber(number: string): void {
    this.number = number;
  }

  public getIssuer(): IdentityIssuer {
    return this.issuer;
  }

  public setIssuer(issuer: IdentityIssuer): void {
    this.issuer = issuer;
  }

  public getState(): State {
    return this.state;
  }

  public setState(state: State): void {
    this.state = state;
  }

  public getIssuingDate(): string {
    return this.issuingDate;
  }

  public setIssuingDate(issuingDate: string): void {
    if (moment(issuingDate, 'YYYY-MM-DD', true).isValid())
      this.issuingDate = issuingDate;
    else throw 'Data de emissão inválida';
  }
}
