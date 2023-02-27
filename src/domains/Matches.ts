export class Matches {
  private productId: number;
  private name: string;
  private logo: string;

  public getProductId(): number {
    return this.productId;
  }

  public setProductId(productId: number): void {
    this.productId = productId;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getLogo(): string {
    return this.logo;
  }

  public setLogo(logo: string): void {
    this.logo = logo;
  }
}
