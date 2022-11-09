import { ProductType } from "./enums";
import { Products } from "./Products";

export class ProductAuto extends Products {
  private value: number;
  private vehicleBrand: string;
  private vehicleModel: string;
  private installments: number;
  private vehicleModelYear: string;
  private codeFipe: string;
  private vehicleFipeValue: number;

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

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

  public getInstallments(): number {
    return this.installments;
  }

  public setInstallments(installments: number): void {
    this.installments = installments;
  }

  public getVehicleModelYear(): string {
    return this.vehicleModelYear;
  }

  public setVehicleModelYear(vehicleModelYear: string): void {
    this.vehicleModelYear = vehicleModelYear;
  }

  public getCodeFipe(): string {
    return this.codeFipe;
  }

  public setCodeFipe(codeFipe: string): void {
    this.codeFipe = codeFipe;
  }

  public getVehicleFipeValue(): number {
    return this.vehicleFipeValue;
  }

  public setVehicleFipeValue(vehicleFipeValue: number): void {
    this.vehicleFipeValue = vehicleFipeValue;
  }
}
