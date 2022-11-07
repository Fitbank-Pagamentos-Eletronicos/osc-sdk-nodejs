export class BorrowerInfo {
  private _isRegistered: boolean;
  private _isBlocked: boolean;

  public get isRegistered(): boolean {
    return this._isRegistered;
  }

  public set isRegistered(isRegistered: boolean) {
    this._isRegistered = isRegistered;
  }

  public get isBlocked(): boolean {
    return this._isBlocked;
  }

  public set isBlocked(isBlocked: boolean) {
    this._isBlocked = isBlocked;
  }
}
