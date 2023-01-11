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
}
