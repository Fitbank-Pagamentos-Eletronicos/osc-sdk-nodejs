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
  private cpf: string;

  @MaxLength(100)
  private name: string;

  @Length(10, 10)
  @IsDateString()
  private birthday: string;

  @MaxLength(100)
  @IsEmail()
  private email: string;

  @Length(11, 11)
  @IsNumberString()
  // @Matches(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/, {
  //   message: "$property precisa ser no formato 00000-000",
  // })
  private phone: string;

  @Length(4, 9)
  @IsNumberString()
  private zipCode: string;

  private hasCreditCard: boolean;

  private hasRestriction: boolean;

  private hasOwnHouse: boolean;

  private hasVehicle: boolean;

  private hasAndroid: boolean;

  private logData: LogData;

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string): void {
    if (cpf.length >= 3 && cpf.length <= 11) this.cpf = cpf;
    else this.cpf = "Cpf inválido";
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getBirthday(): string {
    return this.birthday;
  }

  public setBirthday(birthday: string): void {
    this.birthday = birthday;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string): void {
    this.phone = phone;
  }

  public getZipCode(): string {
    return this.zipCode;
  }

  public setZipCode(zipCode: string): void {
    this.zipCode = zipCode;
  }

  public isHasCreditCard(): boolean {
    return this.hasCreditCard;
  }

  public setHasCreditCard(hasCreditCard: boolean): void {
    this.hasCreditCard = hasCreditCard;
  }

  public isHasRestriction(): boolean {
    return this.hasRestriction;
  }

  public setHasRestriction(hasRestriction: boolean): void {
    this.hasRestriction = hasRestriction;
  }

  public isHasOwnHouse(): boolean {
    return this.hasOwnHouse;
  }

  public setHasOwnHouse(hasOwnHouse: boolean): void {
    this.hasOwnHouse = hasOwnHouse;
  }

  public isHasVehicle(): boolean {
    return this.hasVehicle;
  }

  public setHasVehicle(hasVehicle: boolean): void {
    this.hasVehicle = hasVehicle;
  }

  public isHasAndroid(): boolean {
    return this.hasAndroid;
  }

  public setHasAndroid(hasAndroid: boolean): void {
    this.hasAndroid = hasAndroid;
  }

  public getLogData(): LogData {
    return this.logData;
  }

  public setLogData(logData: LogData): void {
    this.logData = logData;
  }
}
