import {
  validate,
  Length,
  MaxLength,
  Matches,
  MinLength,
  IsEmail,
  IsNumberString,
  IsDateString,
} from "class-validator";
import { Education, Occupation } from "./enums";
import { Products } from "./Products";
import { LogData } from "./LogData";

export class SignupMatch {
  @Length(3, 11)
  // @Matches(RegExp(/^[0-9]*$/))
  @IsNumberString()
  private _cpf: string;

  @MaxLength(100)
  private _name: string;

  @Length(10, 10)
  // @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
  //   message: "$property must be formatted as yyyy-mm-dd",
  // })
  @IsDateString()
  private _birthday: string;

  @MaxLength(100)
  @IsEmail()
  private _email: string;

  @Length(11, 11)
  @IsNumberString()
  // @Matches(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/, {
  //   message: "$property precisa ser no formato 00000-000",
  // })
  private _phone: string;

  @Length(4, 9)
  @IsNumberString()
  // @Matches(/^[0-9]{5}-[0-9]{3}$/, {
  //   message: "$property precisa ser no formato 00000-000",
  // })
  private _zipCode: string;

  private _education: Education;

  private _banks: string;

  private _occupation: Occupation;

  @IsNumberString()
  private _income: string;

  private _hasCreditCard: boolean;

  private _hasRestriction: boolean;

  private _hasOwnHouse: boolean;

  private _hasVehicle: boolean;

  private _hasAndroid: boolean;

  private _products: Products;

  private _logData: LogData;

  public get cpf(): string {
    return this._cpf;
  }

  public set cpf(cpf: string) {
    this._cpf = cpf;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get birthday(): string {
    return this._birthday;
  }

  public set birthday(birthday: string) {
    this._birthday = birthday;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(phone: string) {
    this._phone = phone;
  }

  public get zipCode(): string {
    return this._zipCode;
  }

  public set zipCode(zipCode: string) {
    this._zipCode = zipCode;
  }

  public get education(): Education {
    return this._education;
  }

  public set education(education: Education) {
    this._education = education;
  }

  public get banks(): string {
    return this._banks;
  }

  public set banks(banks: string) {
    this._banks = banks;
  }

  public get occupation(): Occupation {
    return this._occupation;
  }

  public set occupation(occupation: Occupation) {
    this._occupation = occupation;
  }

  public get income(): string {
    return this._income;
  }

  public set income(income: string) {
    this._income = income;
  }

  public get hasCreditCard(): boolean {
    return this._hasCreditCard;
  }

  public set hasCreditCard(hasCreditCard: boolean) {
    this._hasCreditCard = hasCreditCard;
  }

  public get hasRestriction(): boolean {
    return this._hasRestriction;
  }

  public set hasRestriction(hasRestriction: boolean) {
    this._hasRestriction = hasRestriction;
  }

  public get hasOwnHouse(): boolean {
    return this._hasOwnHouse;
  }

  public set hasOwnHouse(hasOwnHouse: boolean) {
    this._hasOwnHouse = hasOwnHouse;
  }

  public get hasVehicle(): boolean {
    return this._hasVehicle;
  }

  public set hasVehicle(hasVehicle: boolean) {
    this._hasVehicle = hasVehicle;
  }

  public get hasAndroid(): boolean {
    return this._hasAndroid;
  }

  public set hasAndroid(hasAndroid: boolean) {
    this._hasAndroid = hasAndroid;
  }

  public get products(): Products {
    return this._products;
  }

  public set products(products: Products) {
    this._products = products;
  }

  public get logData(): LogData {
    return this._logData;
  }

  public set logData(logData: LogData) {
    this._logData = logData;
  }
}
