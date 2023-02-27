import { AcceptedCheckSumBody } from './';
export class SignContract {
  private acceptedCheckSum: AcceptedCheckSumBody[];

  public getAcceptedCheckSum(): AcceptedCheckSumBody[] {
    return this.acceptedCheckSum;
  }

  public setAcceptedCheckSum(acceptedCheckSum: AcceptedCheckSumBody[]): void {
    this.acceptedCheckSum = acceptedCheckSum;
  }
}
