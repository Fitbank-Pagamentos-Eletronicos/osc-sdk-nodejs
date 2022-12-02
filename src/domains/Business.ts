import { State, Occupation, EmploymentSince } from './enums';

export class Business {
  private occupation: Occupation;
  private profession: string;
  private companyName: string;
  private phone: string;
  private income: string;
  private employmentSince: EmploymentSince;
  private payday: string;
  private benefitNumber: string;
  private zipCode: string;
  private address: string;
  private number: string;
  private complement: string;
  private district: string;
  private state: State;
  private city: string;

  public getOccupation(): Occupation {
    return this.occupation;
  }

  public setOccupation(occupation: Occupation): void {
    this.occupation = occupation;
  }

  public getProfession(): string {
    return this.profession;
  }

  public setProfession(profession: string): void {
    this.profession = profession;
  }

  public getCompanyName(): string {
    return this.companyName;
  }

  public setCompanyName(companyName: string): void {
    this.companyName = companyName;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string): void {
    this.phone = phone;
  }

  public getIncome(): string {
    return this.income;
  }

  public setIncome(income: string): void {
    this.income = income;
  }

  public getEmploymentSince(): EmploymentSince {
    return this.employmentSince;
  }

  public setEmploymentSince(employmentSince: EmploymentSince): void {
    this.employmentSince = employmentSince;
  }

  public getPayday(): string {
    return this.payday;
  }

  public setPayday(payday: string): void {
    this.payday = payday;
  }

  public getBenefitNumber(): string {
    return this.benefitNumber;
  }

  public setBenefitNumber(benefitNumber: string): void {
    this.benefitNumber = benefitNumber;
  }

  public getZipCode(): string {
    return this.zipCode;
  }

  public setZipCode(zipCode: string): void {
    this.zipCode = zipCode;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public getNumber(): string {
    return this.number;
  }

  public setNumber(number: string): void {
    this.number = number;
  }

  public getComplement(): string {
    return this.complement;
  }

  public setComplement(complement: string): void {
    this.complement = complement;
  }

  public getDistrict(): string {
    return this.district;
  }

  public setDistrict(district: string): void {
    this.district = district;
  }

  public getState(): State {
    return this.state;
  }

  public setState(state: State): void {
    this.state = state;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }
}
