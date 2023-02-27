import { Occupation } from './enums';

export class BusinessSimpleBody {
  private occupation: Occupation;
  private income: string;

  public getOccupation(): Occupation {
    return this.occupation;
  }

  public setOccupation(occupation: Occupation): void {
    this.occupation = occupation;
  }

  public getIncome(): string {
    return this.income;
  }

  public setIncome(income: string): void {
    this.income = income;
  }
}
