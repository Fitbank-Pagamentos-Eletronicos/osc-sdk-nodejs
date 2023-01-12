export class AcceptedCheckSumBody {
  private acceptedCheckSum: string;

  public getAcceptedCheckSum(): string {
    return this.acceptedCheckSum;
  }

  public setAcceptedCheckSum(acceptedCheckSum: string): void {
    this.acceptedCheckSum = acceptedCheckSum;
  }
}
