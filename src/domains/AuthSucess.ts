export class AuthSucess {
  private access_token: string;
  private expire_at: string;

  public getAccess_token(): string {
    return this.access_token;
  }

  public setAccess_token(access_token: string): void {
    this.access_token = access_token;
  }

  public getExpire_at(): string {
    return this.expire_at;
  }

  public setExpire_at(expire_at: string): void {
    this.expire_at = expire_at;
  }
}
