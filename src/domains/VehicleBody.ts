export class VehicleBody {
  private vehicleBrand: string;
  private vehicleModel: string;
  private codeFipe: string;
  private vehicleFipeValue: string;
  private vehicleType: string;
  private vehicleYear: string;

  public getVehicleBrand(): string {
    return this.vehicleBrand;
  }

  public setVehicleBrand(vehicleBrand: string): void {
    this.vehicleBrand = vehicleBrand;
  }

  public getVehicleModel(): string {
    return this.vehicleModel;
  }

  public setVehicleModel(vehicleModel: string): void {
    this.vehicleModel = vehicleModel;
  }

  public getCodeFipe(): string {
    return this.codeFipe;
  }

  public setCodeFipe(codeFipe: string): void {
    this.codeFipe = codeFipe;
  }

  public getVehicleFipeValue(): string {
    return this.vehicleFipeValue;
  }

  public setVehicleFipeValue(vehicleFipeValue: string): void {
    this.vehicleFipeValue = vehicleFipeValue;
  }

  public getVehicleType(): string {
    return this.vehicleType;
  }

  public setVehicleType(vehicleType: string): void {
    this.vehicleType = vehicleType;
  }

  public getVehicleYear(): string {
    return this.vehicleYear;
  }

  public setVehicleYear(vehicleYear: string): void {
    this.vehicleYear = vehicleYear;
  }
}
