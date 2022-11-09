export class Vehicle {
  private licensePlate: string;

  public getLicensePlate(): string {
    return this.licensePlate;
  }

  public setLicensePlate(licensePlate: string): void {
    this.licensePlate = licensePlate;
  }
}
