import { State, HomeType, HomeSince } from "./enums";

export class Address {
  private _zipCode: string;
  private _address: string;
  private _number: string;
  private _complement: string;
  private _district: string;
  private _state: State;
  private _city: string;
  private _homeType: HomeType;
  private _homeSince: HomeSince;

  public get zipCode(): string {
    return this._zipCode;
  }

  public set zipCode(zipCode: string) {
    this._zipCode = zipCode;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  public get number(): string {
    return this._number;
  }

  public set number(number: string) {
    this._number = number;
  }

  public get complement(): string {
    return this._complement;
  }

  public set complement(complement: string) {
    this._complement = complement;
  }

  public get district(): string {
    return this._district;
  }

  public set district(district: string) {
    this._district = district;
  }

  public get state(): State {
    return this._state;
  }

  public set state(state: State) {
    this._state = state;
  }

  public get city(): string {
    return this._city;
  }

  public set city(city: string) {
    this._city = city;
  }

  public get homeType(): HomeType {
    return this._homeType;
  }

  public set homeType(homeType: HomeType) {
    this._homeType = homeType;
  }

  public get homeSince(): HomeSince {
    return this._homeSince;
  }

  public set homeSince(homeSince: HomeSince) {
    this._homeSince = homeSince;
  }
}
