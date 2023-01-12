export class VehicleBody {
  private vehicleBrand: string;
  private vehicleModel: string;
  private codeFipe: string;
  private vehicleFipeValeu: string;
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

  public getVehicleFipeValeu(): string {
    return this.vehicleFipeValeu;
  }

  public setVehicleFipeValeu(vehicleFipeValeu: string): void {
    this.vehicleFipeValeu = vehicleFipeValeu;
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
