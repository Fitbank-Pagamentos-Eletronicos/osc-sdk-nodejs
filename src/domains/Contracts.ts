export class Contracts {
  private checksum: string;
  private contract: string;

  public getChecksum(): string {
    return this.checksum;
  }

  public setChecksum(checksum: string): void {
    this.checksum = checksum;
  }

  public getContract(): string {
    return this.contract;
  }

  public setContract(contract: string): void {
    this.contract = contract;
  }
}
