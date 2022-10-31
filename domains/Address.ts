import { State } from "./enums/State";
import { HomeType } from "./enums/HomeType";
import { HomeSince } from "./enums/HomeSince";

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

  get zipCode() {
    return this._zipCode;
  }

  get address() {
    return this._address;
  }

  get number() {
    return this._number;
  }

  get complement() {
    return this._complement;
  }

  get district() {
    return this._district;
  }

  get state() {
    return this._state;
  }

  get city() {
    return this._city;
  }

  get homeType() {
    return this._homeType;
  }

  get homeSince() {
    return this._homeSince;
  }

  set zipCode(zipCode: string) {
    this._zipCode = zipCode;
  }

  set address(address: string) {
    this._address = address;
  }

  set number(number: string) {
    this._number = number;
  }

  set complement(complement: string) {
    this._complement = complement;
  }

  set district(district: string) {
    this._district = district;
  }

  set state(state: State) {
    this._state = state;
  }

  set city(city: string) {
    this._city = city;
  }

  set homeType(homeType: HomeType) {
    this._homeType = homeType;
  }

  set homeSince(homeSince: HomeSince) {
    this._homeSince = homeSince;
  }
}
