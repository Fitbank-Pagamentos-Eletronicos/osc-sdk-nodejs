import { IdentityType, IdentityIssuer, State } from "./enums";
import { IsDateString } from "class-validator";

export class Identity {
  private _type: IdentityType;

  private _number: string;

  private _issuer: IdentityIssuer;

  private _state: State;

  @IsDateString()
  private _issuingDate: string;

  public get type(): IdentityType {
    return this._type;
  }

  public set type(type: IdentityType) {
    this._type = type;
  }

  public get number(): string {
    return this._number;
  }

  public set number(number: string) {
    this._number = number;
  }

  public get issuer(): IdentityIssuer {
    return this._issuer;
  }

  public set issuer(issuer: IdentityIssuer) {
    this._issuer = issuer;
  }

  public get state(): State {
    return this._state;
  }

  public set state(state: State) {
    this._state = state;
  }

  public get issuingDate(): string {
    return this._issuingDate;
  }

  public set issuingDate(issuingDate: string) {
    this._issuingDate = issuingDate;
  }
}
