import { Gender, Nationality, State, RelationshipStatus } from "./enums";
import { Identity } from "./Identity";
import { Address } from "./Address";
import { Vehicle } from "./Vehicle";
import { ConsumerUnit } from "./ConsumerUnit";
import { Business } from "./Business";
import { Bank } from "./Bank";
import { Reference } from "./Reference";
import { ProductBankAccount } from "./ProductBankAccount";

export class ProposalBankAccount {
  private _mother: string;
  private _gender: Gender;
  private _nationality: Nationality;
  private _hometownState: State;
  private _relationshipStatus: RelationshipStatus;
  private _identity: Identity;
  private _address: Address;
  private _vehicle: Vehicle;
  private _consumerUnit: ConsumerUnit;
  private _business: Business;
  private _bank: Bank;
  private _reference: Reference;
  private _products: ProductBankAccount;

  get mother() {
    return this._mother;
  }

  get gender() {
    return this._gender;
  }

  get nationality() {
    return this._nationality;
  }

  get hometownState() {
    return this._hometownState;
  }

  get relationshipStatus() {
    return this._relationshipStatus;
  }

  get identity() {
    return this._identity;
  }

  get address() {
    return this._address;
  }

  get vehicle() {
    return this._vehicle;
  }

  get consumerUnit() {
    return this._consumerUnit;
  }

  get business() {
    return this._business;
  }

  get bank() {
    return this._bank;
  }

  get reference() {
    return this._reference;
  }

  get products() {
    return this._products;
  }

  set mother(mother: string) {
    this._mother = mother;
  }

  set gender(gender: Gender) {
    this._gender = gender;
  }

  set nationality(nationality: Nationality) {
    this._nationality = nationality;
  }

  set hometownState(hometownState: State) {
    this._hometownState = hometownState;
  }

  set relationshipStatus(relationshipStatus: RelationshipStatus) {
    this._relationshipStatus = relationshipStatus;
  }

  set identity(identity: Identity) {
    this._identity = identity;
  }

  set address(address: Address) {
    this._address = address;
  }

  set vehicle(vehicle: Vehicle) {
    this._vehicle = vehicle;
  }

  set consumerUnit(consumerUnit: ConsumerUnit) {
    this._consumerUnit = consumerUnit;
  }

  set business(business: Business) {
    this._business = business;
  }

  set bank(bank: Bank) {
    this._bank = bank;
  }

  set reference(reference: Reference) {
    this._reference = reference;
  }

  set products(products: ProductBankAccount) {
    this._products = products;
  }
}
