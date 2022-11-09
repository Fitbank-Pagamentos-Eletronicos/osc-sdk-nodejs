import {
  Gender,
  Nationality,
  State,
  Education,
  RelationshipStatus,
} from "./enums";
import { Identity } from "./Identity";
import { Address } from "./Address";
import { Vehicle } from "./Vehicle";
import { ConsumerUnit } from "./ConsumerUnit";
import { Business } from "./Business";
import { Bank } from "./Bank";
import { Reference } from "./Reference";
import { Products } from "./Products";

export class Proposal {
  private mother: string;
  private gender: Gender;
  private nationality: Nationality;
  private hometownState: State;
  private hometown: string;
  private education: Education;
  private relationshipStatus: RelationshipStatus;
  private phoneLandline: string;
  private identity: Identity;
  private address: Address;
  private vehicle: Vehicle;
  private consumerUnit: ConsumerUnit;
  private business: Business;
  private bank: Bank;
  private reference: Reference[];
  private products: Products[];

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

  public getHometown(): string {
    return this.hometown;
  }

  public setHometown(hometown: string): void {
    this.hometown = hometown;
  }

  public getEducation(): Education {
    return this.education;
  }

  public setEducation(education: Education): void {
    this.education = education;
  }

  public getRelationshipStatus(): RelationshipStatus {
    return this.relationshipStatus;
  }

  public setRelationshipStatus(relationshipStatus: RelationshipStatus): void {
    this.relationshipStatus = relationshipStatus;
  }

  public getPhoneLandline(): string {
    return this.phoneLandline;
  }

  public setPhoneLandline(phoneLandline: string): void {
    this.phoneLandline = phoneLandline;
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

  public getVehicle(): Vehicle {
    return this.vehicle;
  }

  public setVehicle(vehicle: Vehicle): void {
    this.vehicle = vehicle;
  }

  public getConsumerUnit(): ConsumerUnit {
    return this.consumerUnit;
  }

  public setConsumerUnit(consumerUnit: ConsumerUnit): void {
    this.consumerUnit = consumerUnit;
  }

  public getBusiness(): Business {
    return this.business;
  }

  public setBusiness(business: Business): void {
    this.business = business;
  }

  public getBank(): Bank {
    return this.bank;
  }

  public setBank(bank: Bank): void {
    this.bank = bank;
  }

  public getReference(): Reference[] {
    return this.reference;
  }

  public setReference(reference: Reference[]): void {
    this.reference = reference;
  }

  public getProducts(): Products[] {
    return this.products;
  }

  public setProducts(products: Products[]): void {
    this.products = products;
  }
}
