import { Occupation, EmploymentSince, State } from "./enums";

export class Business {
  private _occupation: Occupation;
  private _profession: string;
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
  private _city: string;

  public get profession(): string {
    return this._profession;
  }

  public set profession(profession: string) {
    this._profession = profession;
  }

  public get companyName(): string {
    return this._companyName;
  }

  public set companyName(companyName: string) {
    this._companyName = companyName;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(phone: string) {
    this._phone = phone;
  }

  public get income(): string {
    return this._income;
  }

  public set income(income: string) {
    this._income = income;
  }

  public get employmentSince(): EmploymentSince {
    return this._employmentSince;
  }

  public set employmentSince(employmentSince: EmploymentSince) {
    this._employmentSince = employmentSince;
  }

  public get payday(): string {
    return this._payday;
  }

  public set payday(payday: string) {
    this._payday = payday;
  }

  public get benefitNumber(): string {
    return this._benefitNumber;
  }

  public set benefitNumber(benefitNumber: string) {
    this._benefitNumber = benefitNumber;
  }

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
}
