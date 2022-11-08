import { State, HomeType, HomeSince } from "./enums";

export class Address {
  private zipCode: string;
  private address: string;
  private number: string;
  private complement: string;
  private district: string;
  private state: State;
  private city: string;
  private homeType: HomeType;
  private homeSince: HomeSince;

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

  public getHomeType(): HomeType {
    return this.homeType;
  }

  public setHomeType(homeType: HomeType): void {
    this.homeType = homeType;
  }

  public getHomeSince(): HomeSince {
    return this.homeSince;
  }

  public setHomeSince(homeSince: HomeSince): void {
    this.homeSince = homeSince;
  }
}
