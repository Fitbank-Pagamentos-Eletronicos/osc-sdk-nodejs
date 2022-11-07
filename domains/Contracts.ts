export class Contracts {
  private _checksum: string;
  private _contract: string;

  public get checksum(): string {
    return this._checksum;
  }

  public set checksum(checksum: string) {
    this._checksum = checksum;
  }

  public get contract(): string {
    return this._contract;
  }

  public set contract(contract: string) {
    this._contract = contract;
  }
}
