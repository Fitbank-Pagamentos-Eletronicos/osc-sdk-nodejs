import { VehicleBody } from './';

export class Fipe {
  private lastUpdate: string;
  private vehicle: VehicleBody[];

  public getLastUpdate(): string {
    return this.lastUpdate;
  }

  public setLastUpdate(lastUpdate: string): void {
    this.lastUpdate = lastUpdate;
  }

  public getVehicle(): VehicleBody[] {
    return this.vehicle;
  }

  public setVehicle(vehicle: VehicleBody[]): void {
    this.vehicle = vehicle;
  }
}
