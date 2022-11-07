export class Reference {
  private _name: string;
  private _phone: string;

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(phone: string) {
    this._phone = phone;
  }
}
