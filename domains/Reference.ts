export class Reference {
  private _name: string;
  private _phone: string;

  get name() {
    return this._name;
  }

  get phone() {
    return this._phone;
  }

  set name(name: string) {
    this._name = name;
  }

  set phone(phone: string) {
    this._phone = phone;
  }
}
