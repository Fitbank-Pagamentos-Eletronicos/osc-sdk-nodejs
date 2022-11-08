import { Scopes } from "./enums";

export class Auth {
  private _client_id: string;
  private _client_secret: string;
  private _scopes: Scopes;

  public get client_id(): string {
    return this._client_id;
  }

  public set client_id(client_id: string) {
    this._client_id = client_id;
  }

  public get client_secret(): string {
    return this._client_secret;
  }

  public set client_secret(client_secret: string) {
    this._client_secret = client_secret;
  }

  public get scopes(): Scopes {
    return this._scopes;
  }

  public set scopes(scopes: Scopes) {
    this._scopes = scopes;
  }
}
