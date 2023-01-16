import { Products, Bank } from './';
import {
  BusinessProfession,
  EmployeesCount,
  WorkingCapitalLoanObjectives
} from './enums';

export class ProductWorkingCapital extends Products {
  private installments: number;
  private value: number;
  private cnpj: string;
  private businessProfession: BusinessProfession;
  private employeesCount: EmployeesCount;
  private businessIncomeCnpj: number;
  private workingCapitalLoanObjectives: WorkingCapitalLoanObjectives;
  private bank: Bank;
  private accountType: Bank;
  private agency: Bank;
  private account: Bank;

  public getInstallments(): number {
    return this.installments;
  }

  public setInstallments(installments: number): void {
    this.installments = installments;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public getCnpj(): string {
    return this.cnpj;
  }

  public setCnpj(cnpj: string): void {
    this.cnpj = cnpj;
  }

  public getBusinessProfession(): BusinessProfession {
    return this.businessProfession;
  }

  public setBusinessProfession(businessProfession: BusinessProfession): void {
    this.businessProfession = businessProfession;
  }

  public getEmployeesCount(): EmployeesCount {
    return this.employeesCount;
  }

  public setEmployeesCount(employeesCount: EmployeesCount): void {
    this.employeesCount = employeesCount;
  }

  public getBusinessIncomeCnpj(): number {
    return this.businessIncomeCnpj;
  }

  public setBusinessIncomeCnpj(businessIncomeCnpj: number): void {
    this.businessIncomeCnpj = businessIncomeCnpj;
  }

  public getWorkingCapitalLoanObjectives(): WorkingCapitalLoanObjectives {
    return this.workingCapitalLoanObjectives;
  }

  public setWorkingCapitalLoanObjectives(
    workingCapitalLoanObjectives: WorkingCapitalLoanObjectives
  ): void {
    this.workingCapitalLoanObjectives = workingCapitalLoanObjectives;
  }

  public getBank(): Bank {
    return this.bank;
  }

  public setBank(bank: Bank): void {
    this.bank = bank;
  }

  public getAccountType(): Bank {
    return this.accountType;
  }

  public setAccountType(accountType: Bank): void {
    this.accountType = accountType;
  }

  public getAgency(): Bank {
    return this.agency;
  }

  public setAgency(agency: Bank): void {
    this.agency = agency;
  }

  public getAccount(): Bank {
    return this.account;
  }

  public setAccount(account: Bank): void {
    this.account = account;
  }
}
