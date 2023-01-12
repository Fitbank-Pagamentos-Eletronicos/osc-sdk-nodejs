import { Gender, Nationality, State, RelationshipStatus } from './enums';
import {
  IdentifySimpleBody,
  AddressSimpleBody,
  BusinessSimpleBody,
  ProductBankAccount
} from './';

export class ProposalBankAccount {
  private mother: string;
  private gender: Gender;
  private nationality: Nationality;
  private hometownState: State;
  private relationshipStatus: RelationshipStatus;
  private identity: IdentifySimpleBody;
  private address: AddressSimpleBody;
  private business: BusinessSimpleBody;
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

  public getIdentity(): IdentifySimpleBody {
    return this.identity;
  }

  public setIdentity(identity: IdentifySimpleBody): void {
    this.identity = identity;
  }

  public getAddress(): AddressSimpleBody {
    return this.address;
  }

  public setAddress(address: AddressSimpleBody): void {
    this.address = address;
  }

  public getBusiness(): BusinessSimpleBody {
    return this.business;
  }

  public setBusiness(business: BusinessSimpleBody): void {
    this.business = business;
  }

  public getProducts(): ProductBankAccount[] {
    return this.products;
  }

  public setProducts(products: ProductBankAccount[]): void {
    this.products = products;
  }
}
