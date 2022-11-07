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
  private _mother: string;
  private _gender: Gender;
  private _nationality: Nationality;
  private _hometownState: State;
  private _hometown: string;
  private _education: Education;
  private _relationshipStatus: RelationshipStatus;
  private _phoneLandline: string;
  private _identity: Identity;
  private _address: Address;
  private _vehicle: Vehicle;
  private _consumerUnit: ConsumerUnit;
  private _business: Business;
  private _bank: Bank;
  private _reference: Reference;
  private _products: Products;

  public get mother(): string {
    return this._mother;
  }

  public set mother(mother: string) {
    this._mother = mother;
  }

  public get gender(): Gender {
    return this._gender;
  }

  public set gender(gender: Gender) {
    this._gender = gender;
  }

  public get nationality(): Nationality {
    return this._nationality;
  }

  public set nationality(nationality: Nationality) {
    this._nationality = nationality;
  }

  public get hometownState(): State {
    return this._hometownState;
  }

  public set hometownState(hometownState: State) {
    this._hometownState = hometownState;
  }

  public get hometown(): string {
    return this._hometown;
  }

  public set hometown(hometown: string) {
    this._hometown = hometown;
  }

  public get education(): Education {
    return this._education;
  }

  public set education(education: Education) {
    this._education = education;
  }

  public get relationshipStatus(): RelationshipStatus {
    return this._relationshipStatus;
  }

  public set relationshipStatus(relationshipStatus: RelationshipStatus) {
    this._relationshipStatus = relationshipStatus;
  }

  public get phoneLandline(): string {
    return this._phoneLandline;
  }

  public set phoneLandline(phoneLandline: string) {
    this._phoneLandline = phoneLandline;
  }

  public get identity(): Identity {
    return this._identity;
  }

  public set identity(identity: Identity) {
    this._identity = identity;
  }

  public get address(): Address {
    return this._address;
  }

  public set address(address: Address) {
    this._address = address;
  }

  public get vehicle(): Vehicle {
    return this._vehicle;
  }

  public set vehicle(vehicle: Vehicle) {
    this._vehicle = vehicle;
  }

  public get consumerUnit(): ConsumerUnit {
    return this._consumerUnit;
  }

  public set consumerUnit(consumerUnit: ConsumerUnit) {
    this._consumerUnit = consumerUnit;
  }

  public get business(): Business {
    return this._business;
  }

  public set business(business: Business) {
    this._business = business;
  }

  public get bank(): Bank {
    return this._bank;
  }

  public set bank(bank: Bank) {
    this._bank = bank;
  }

  public get reference(): Reference {
    return this._reference;
  }

  public set reference(reference: Reference) {
    this._reference = reference;
  }

  public get products(): Products {
    return this._products;
  }

  public set products(products: Products) {
    this._products = products;
  }
}
