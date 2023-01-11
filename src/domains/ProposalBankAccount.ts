import { Gender, Nationality, State, RelationshipStatus } from './enums';
import { Identity } from './Identity';
import { Address } from './Address';
import { Business } from './Business';
import { ProductBankAccount } from './ProductBankAccount';

export class ProposalBankAccount {
  private mother: string;
  private gender: Gender;
  private nationality: Nationality;
  private hometownState: State;
  private relationshipStatus: RelationshipStatus;
  private identity: Identity;
  private address: Address;
  private business: Business;
  private products: ProductBankAccount[];

  public getMother(): string {
    return this.mother;
  }

  public setMother(mother: string): void {
    this.mother = mother;
  }

  public getGender(): Gender {
    return this.gender;
  }

  public setGender(gender: Gender): void {
    this.gender = gender;
  }

  public getNationality(): Nationality {
    return this.nationality;
  }

  public setNationality(nationality: Nationality): void {
    this.nationality = nationality;
  }

  public getHometownState(): State {
    return this.hometownState;
  }

  public setHometownState(hometownState: State): void {
    this.hometownState = hometownState;
  }

  public getRelationshipStatus(): RelationshipStatus {
    return this.relationshipStatus;
  }

  public setRelationshipStatus(relationshipStatus: RelationshipStatus): void {
    this.relationshipStatus = relationshipStatus;
  }

  public getIdentity(): Identity {
    return this.identity;
  }

  public setIdentity(identity: Identity): void {
    this.identity = identity;
  }

  public getAddress(): Address {
    return this.address;
  }

  public setAddress(address: Address): void {
    this.address = address;
  }

  public getBusiness(): Business {
    return this.business;
  }

  public setBusiness(business: Business): void {
    this.business = business;
  }

  public getProducts(): ProductBankAccount[] {
    return this.products;
  }

  public setProducts(products: ProductBankAccount[]): void {
    this.products = products;
  }
}
