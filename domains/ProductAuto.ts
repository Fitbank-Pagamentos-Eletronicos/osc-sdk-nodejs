import { ProductType } from "./enums";

export class ProductAuto {
  private _type: ProductType;
  private _value: number;
  private _vehicleBrand: string;
  private _vehicleModel: string;
  private _installments: number;
  private _vehicleModelYear: string;
  private _codeFipe: string;
  private _vehicleFipeValue: number;

  public get type(): ProductType {
    return this._type;
  }

  public set type(type: ProductType) {
    this._type = type;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
  }

  public get vehicleBrand(): string {
    return this._vehicleBrand;
  }

  public set vehicleBrand(vehicleBrand: string) {
    this._vehicleBrand = vehicleBrand;
  }

  public get vehicleModel(): string {
    return this._vehicleModel;
  }

  public set vehicleModel(vehicleModel: string) {
    this._vehicleModel = vehicleModel;
  }

  public get installments(): number {
    return this._installments;
  }

  public set installments(installments: number) {
    this._installments = installments;
  }

  public get vehicleModelYear(): string {
    return this._vehicleModelYear;
  }

  public set vehicleModelYear(vehicleModelYear: string) {
    this._vehicleModelYear = vehicleModelYear;
  }

  public get codeFipe(): string {
    return this._codeFipe;
  }

  public set codeFipe(codeFipe: string) {
    this._codeFipe = codeFipe;
  }

  public get vehicleFipeValue(): number {
    return this._vehicleFipeValue;
  }

  public set vehicleFipeValue(vehicleFipeValue: number) {
    this._vehicleFipeValue = vehicleFipeValue;
  }
}
