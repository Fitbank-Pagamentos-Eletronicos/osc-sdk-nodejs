export class ProductBankAccount {
  private type: string;

  public getType(): string {
    return this.type;
  }

  public setType(type: string): void {
    this.type = type;
  }
}
