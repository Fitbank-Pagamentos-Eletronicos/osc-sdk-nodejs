import { AcceptedCheckSumBody, LogData } from './';

export class Contract {
  private acceptedCheckSum: AcceptedCheckSumBody[];
  private logData: LogData;

  public getAcceptedCheckSum(): AcceptedCheckSumBody[] {
    return this.acceptedCheckSum;
  }

  public setAcceptedCheckSum(acceptedCheckSum: AcceptedCheckSumBody[]): void {
    this.acceptedCheckSum = acceptedCheckSum;
  }

  public getLogData(): LogData {
    return this.logData;
  }

  public setLogData(logData: LogData): void {
    this.logData = logData;
  }
}
