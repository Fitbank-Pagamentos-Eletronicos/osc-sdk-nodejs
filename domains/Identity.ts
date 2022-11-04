import { IdentityType, IdentityIssuer, State } from "./enums";
import { IsDateString } from "class-validator";

export class Identity {
  private _type: IdentityType;

  private _number: string;

  private _issuer: IdentityIssuer;

  private _state: State;

  @IsDateString()
  private _issuingDate: string;

  get type() {
    return this._type;
  }

  get number() {
    return this._number;
  }

  get issuer() {
    return this._issuer;
  }

  get state() {
    return this._state;
  }

  get issuingDate() {
    return this._issuingDate;
  }

  set type(type: IdentityType) {
    this._type = type;
  }

  set number(number: string) {
    this._number = number;
  }

  set issuer(issuer: IdentityIssuer) {
    this._issuer = issuer;
  }

  set state(state: State) {
    this._state = state;
  }

  set issuingDate(issuingDate: string) {
    this._issuingDate = issuingDate;
  }
}
