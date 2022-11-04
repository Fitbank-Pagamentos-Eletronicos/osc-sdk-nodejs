export class Vehicle {
  private _licensePlate: string;

  get licensePlate() {
    return this._licensePlate;
  }

  set licensePlate(licensePlate: string) {
    this._licensePlate = licensePlate;
  }
}
