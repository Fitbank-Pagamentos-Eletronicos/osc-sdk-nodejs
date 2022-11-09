import { LogData } from "./LogData";

export class Contract {
  private aceptedCheckSum: string[];
  private logData: LogData;

  public getAceptedCheckSum(): string[] {
    return this.aceptedCheckSum;
  }

  public setAceptedCheckSum(aceptedCheckSum: string[]): void {
    this.aceptedCheckSum = aceptedCheckSum;
  }

  public getLogData(): LogData {
    return this.logData;
  }

  public setLogData(logData: LogData): void {
    this.logData = logData;
  }
}
