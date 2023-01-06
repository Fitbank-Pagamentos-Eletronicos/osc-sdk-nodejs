import { LogData } from './LogData';

export class Contract {
  private acceptedCheckSum: string[];
  private logData: LogData;

  public getAcceptedCheckSum(): string[] {
    return this.acceptedCheckSum;
  }

  public setAcceptedCheckSum(acceptedCheckSum: string[]): void {
    this.acceptedCheckSum = acceptedCheckSum;
  }

  public getLogData(): LogData {
    return this.logData;
  }

  public setLogData(logData: LogData): void {
    this.logData = logData;
  }
}
