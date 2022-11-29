import { Education, Occupation, Banks } from './enums';
import { Products } from './Products';
import { LogData } from './LogData';
import moment from 'moment';
import { validateEmail, validateCellPhone } from '../utils/Validations';

export class SignupMatch {
  private cpf: string;
  private name: string;
  private birthday: string;
  private email: string;
  private phone: string;
  private zipCode: string;
  private education: string;
  private banks: Banks;
  private occupation: string;
  private income: number;
  private hasCreditCard: boolean;
  private hasRestriction: boolean;
  private hasOwnHouse: boolean;
  private hasVehicle: boolean;
  private hasAndroid: boolean;
  private products: Products[];
  private logData: LogData;

  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(cpf: string): void {
    if (cpf.length >= 3 && cpf.length <= 11 && /^\d+$/.test(cpf))
      this.cpf = cpf;
    else throw `CPF ${cpf} inválido`;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    if (name.length <= 100) this.name = name;
    else {
      throw 'O nome precisa ser menor que 100 caracteres e estar no formato.';
    }
  }

  public getBirthday(): string {
    return this.birthday;
  }

  public setBirthday(birthday: string): void {
    if (
      birthday.length >= 10 &&
      birthday.length <= 10 &&
      moment(birthday, 'YYYY-MM-DD', true).isValid()
    )
      this.birthday = birthday;
    else throw 'Data de nascimento, formato (aaaa-mm-dd)';
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    if (email.length <= 100 && validateEmail(email)) this.email = email;
    else throw 'E-mail inválido';
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string): void {
    if (phone.length >= 11 && phone.length <= 11 && validateCellPhone(phone))
      this.phone = phone;
    else throw 'Telefone inválido.';
  }

  public getZipCode(): string {
    return this.zipCode;
  }

  public setZipCode(zipCode: string): void {
    if (/^\d+$/.test(zipCode)) this.zipCode = zipCode;
    else throw 'CEP inválido.';
  }

  public getEducation(): string {
    return this.education;
  }

  public setEducation(education: string): void {
    this.education = education;
  }

  public getBanks(): Banks {
    return this.banks;
  }

  public setBanks(banks: Banks): void {
    this.banks = banks;
  }

  public getOccupation(): string {
    return this.occupation;
  }

  public setOccupation(occupation: string): void {
    this.occupation = occupation;
  }

  public getIncome(): number {
    return this.income;
  }

  public setIncome(income: number): void {
    if (income >= 1039 && 50000 >= income) this.income = income;
    else
      throw `O campo income com o valor ${income} precisa estar entre 1.039 e 50.000`;
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

  public getProducts(): Products[] {
    return this.products;
  }

  public setProducts(products: Products[]): void {
    this.products = products;
  }

  public getLogData(): LogData {
    return this.logData;
  }

  public setLogData(logData: LogData): void {
    this.logData = logData;
  }
}
