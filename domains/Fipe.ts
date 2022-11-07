import { Vehicle } from "./Vehicle";

export class Fipe {
  private _lastUpdate: string;
  private _vehicle: Vehicle;

  public get lastUpdate(): string {
    return this._lastUpdate;
  }

  public set lastUpdate(lastUpdate: string) {
    this._lastUpdate = lastUpdate;
  }

  public get vehicle(): Vehicle {
    return this._vehicle;
  }

  public set vehicle(vehicle: Vehicle) {
    this._vehicle = vehicle;
  }
}
