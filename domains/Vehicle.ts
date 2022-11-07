export class Vehicle {
  private _licensePlate: string;

  public get licensePlate(): string {
    return this._licensePlate;
  }

  public set licensePlate(licensePlate: string) {
    this._licensePlate = licensePlate;
  }
}
