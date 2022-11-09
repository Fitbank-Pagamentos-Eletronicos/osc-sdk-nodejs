export class SignContract {
  private aceptedCheckSum: string[];

  public getAceptedCheckSum(): string[] {
    return this.aceptedCheckSum;
  }

  public setAceptedCheckSum(aceptedCheckSum: string[]): void {
    this.aceptedCheckSum = aceptedCheckSum;
  }
}
