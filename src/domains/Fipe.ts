import { Vehicle } from "./Vehicle";

export class Fipe {
  private lastUpdate: string;
  private vehicle: Vehicle;

  public getLastUpdate(): string {
    return this.lastUpdate;
  }

  public setLastUpdate(lastUpdate: string): void {
    this.lastUpdate = lastUpdate;
  }

  public getVehicle(): Vehicle {
    return this.vehicle;
  }

  public setVehicle(vehicle: Vehicle): void {
    this.vehicle = vehicle;
  }
}
