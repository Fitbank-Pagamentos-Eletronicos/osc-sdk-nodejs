import { ProductType } from "./enums/ProductType";

export class ProductAuto {
  private _type: ProductType;
  private _value: number;
  private _vehicleBrand: string;
  private _vehicleModel: string;
  private _installments: number;
  private _vehicleModelYear: string;
  private _codeFipe: string;
  private _vehicleFipeValue: number;

  get type() {
    return this._type;
  }

  get value() {
    return this._value;
  }

  get vehicleBrand() {
    return this._vehicleBrand;
  }

  get vehicleModel() {
    return this._vehicleModel;
  }

  get installments() {
    return this._installments;
  }

  get vehicleModelYear() {
    return this._vehicleModelYear;
  }

  get codeFipe() {
    return this._codeFipe;
  }

  get vehicleFipeValue() {
    return this._vehicleFipeValue;
  }

  set type(type: ProductType) {
    this._type = type;
  }

  set value(value: number) {
    this._value = value;
  }

  set vehicleBrand(vehicleBrand: string) {
    this._vehicleBrand = vehicleBrand;
  }

  set vehicleModel(vehicleModel: string) {
    this._vehicleModel = vehicleModel;
  }

  set installments(installments: number) {
    this._installments = installments;
  }

  set vehicleModelYear(vehicleModelYear: string) {
    this._vehicleModelYear = vehicleModelYear;
  }

  set codeFipe(codeFipe: string) {
    this._codeFipe = codeFipe;
  }

  set vehicleFipeValue(vehicleFipeValue: number) {
    this._vehicleFipeValue = vehicleFipeValue;
  }
}
