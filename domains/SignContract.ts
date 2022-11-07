export class SignContract {
  private _aceptedCheckSum: string;

  public get aceptedCheckSum(): string {
    return this._aceptedCheckSum;
  }

  public set aceptedCheckSum(aceptedCheckSum: string) {
    this._aceptedCheckSum = aceptedCheckSum;
  }
}
