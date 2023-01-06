export class SignContract {
  private acceptedCheckSum: string[];

  public getAcceptedCheckSum(): string[] {
    return this.acceptedCheckSum;
  }

  public setAcceptedCheckSum(acceptedCheckSum: string[]): void {
    this.acceptedCheckSum = acceptedCheckSum;
  }
}
