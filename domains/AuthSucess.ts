export class AuthSucess {
  private _access_token: string;
  private _expire_at: string;

  public get access_token(): string {
    return this._access_token;
  }

  public set access_token(access_token: string) {
    this._access_token = access_token;
  }

  public get expire_at(): string {
    return this._expire_at;
  }

  public set expire_at(expire_at: string) {
    this._expire_at = expire_at;
  }
}
