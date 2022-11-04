import {
  validate,
  Length,
  MaxLength,
  IsEmail,
  IsNumberString,
  IsDateString,
} from "class-validator";
import { LogData } from "./LogData";

export class SimpleSignup {
  @Length(3, 11)
  @IsNumberString()
  private _cpf: string;

  @MaxLength(100)
  private _name: string;

  @Length(10, 10)
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
  private _zipCode: string;

  private _hasCreditCard: boolean;

  private _hasRestriction: boolean;

  private _hasOwnHouse: boolean;

  private _hasVehicle: boolean;

  private _hasAndroid: boolean;

  private _logData: LogData;

  get cpf() {
    return this._cpf;
  }

  get name() {
    return this._name;
  }

  get birthday() {
    return this._birthday;
  }

  get email() {
    return this._email;
  }

  get phone() {
    return this._phone;
  }

  get zipCode() {
    return this._zipCode;
  }

  get hasCreditCard() {
    return this._hasCreditCard;
  }

  get hasRestriction() {
    return this._hasRestriction;
  }

  get hasOwnHouse() {
    return this._hasOwnHouse;
  }

  get hasVehicle() {
    return this._hasVehicle;
  }

  get hasAndroid() {
    return this._hasAndroid;
  }

  get logData() {
    return this._logData;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  set name(name: string) {
    this._name = name;
  }

  set birthday(birthday: string) {
    this._birthday = birthday;
  }

  set email(email: string) {
    this._email = email;
  }

  set phone(phone: string) {
    this._phone = phone;
  }

  set zipCode(zipCode: string) {
    this._zipCode = zipCode;
  }

  set hasCreditCard(hasCreditCard: boolean) {
    this._hasCreditCard = hasCreditCard;
  }

  set hasRestriction(hasRestriction: boolean) {
    this._hasRestriction = hasRestriction;
  }

  set hasOwnHouse(hasOwnHouse: boolean) {
    this._hasOwnHouse = hasOwnHouse;
  }

  set hasVehicle(hasVehicle: boolean) {
    this._hasVehicle = hasVehicle;
  }

  set hasAndroid(hasAndroid: boolean) {
    this._hasVehicle = hasAndroid;
  }

  set logData(logData: LogData) {
    this._logData = logData;
  }
}
