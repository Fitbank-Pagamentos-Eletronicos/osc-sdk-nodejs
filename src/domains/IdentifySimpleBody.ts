import { IdentityType } from './enums';

export class IdentifySimpleBody {
  private type: IdentityType;
  private number: string;

  public getType(): IdentityType {
    return this.type;
  }

  public setType(type: IdentityType): void {
    this.type = type;
  }

  public getNumber(): string {
    return this.number;
  }

  public setNumber(number: string): void {
    this.number = number;
  }
}
