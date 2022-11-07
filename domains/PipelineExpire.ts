export class PipelineExpire {
  private _id: string;
  private _status: string;
  private _cpf: number;
  private _name: string;
  private _dateCreated: string;
  private _lastUpdated: string;

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get status(): string {
    return this._status;
  }

  public set status(status: string) {
    this._status = status;
  }

  public get cpf(): number {
    return this._cpf;
  }

  public set cpf(cpf: number) {
    this._cpf = cpf;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get dateCreated(): string {
    return this._dateCreated;
  }

  public set dateCreated(dateCreated: string) {
    this._dateCreated = dateCreated;
  }

  public get lastUpdated(): string {
    return this._lastUpdated;
  }

  public set lastUpdated(lastUpdated: string) {
    this._lastUpdated = lastUpdated;
  }
}
