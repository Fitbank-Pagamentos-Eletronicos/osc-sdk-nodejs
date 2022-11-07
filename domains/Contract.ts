import { LogData } from "./LogData";

export class Contract {
  private _aceptedCheckSum: string;
  private _logData: LogData;

  public get aceptedCheckSum(): string {
    return this._aceptedCheckSum;
  }

  public set aceptedCheckSum(aceptedCheckSum: string) {
    this._aceptedCheckSum = aceptedCheckSum;
  }

  public get logData(): LogData {
    return this._logData;
  }

  public set logData(logData: LogData) {
    this._logData = logData;
  }
}
