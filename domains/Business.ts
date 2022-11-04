import { Occupation, EmploymentSince, State } from "./enums";

export class Business {
  private _occupation: Occupation;
  private _profession: string; //importar json
  private _companyName: string;
  private _phone: string;
  private _income: string;
  private _employmentSince: EmploymentSince;
  private _payday: string;
  private _benefitNumber: string;
  private _zipCode: string;
  private _address: string;
  private _number: string;
  private _complement: string;
  private _district: string;
  private _state: State;
  private _city: string; //importar json

  get occupation() {
    return this._occupation;
  }

  get profession() {
    return this._profession;
  }

  get companyName() {
    return this._companyName;
  }

  get phone() {
    return this._phone;
  }

  get income() {
    return this._income;
  }

  get employmentSince() {
    return this._employmentSince;
  }

  get payday() {
    return this._payday;
  }

  get benefitNumber() {
    return this._benefitNumber;
  }
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

  set occupation(occupation: Occupation) {
    this._occupation = occupation;
  }

  set profession(profession: string) {
    this._profession = profession;
  }

  set companyName(companyName: string) {
    this._companyName = companyName;
  }

  set phone(phone: string) {
    this._phone = phone;
  }

  set income(income: string) {
    this._income = income;
  }

  set employmentSince(employmentSince: EmploymentSince) {
    this._employmentSince = employmentSince;
  }

  set payday(payday: string) {
    this._payday = payday;
  }

  set benefitNumber(benefitNumber: string) {
    this._benefitNumber = benefitNumber;
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
}
