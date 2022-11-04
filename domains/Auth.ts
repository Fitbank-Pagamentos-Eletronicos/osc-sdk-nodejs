import { Scopes } from "./enums";

export class Address {
  private _client_id: string;
  private _client_secret: string;
  private _scopes: Scopes;

  get client_id() {
    return this._client_id;
  }

  get client_secret() {
    return this._client_secret;
  }

  get scopes() {
    return this._scopes;
  }

  set client_id(client_id: string) {
    this._client_id = client_id;
  }

  set client_secret(client_secret: string) {
    this._client_secret = client_secret;
  }

  set scopes(scopes: Scopes) {
    this._scopes = scopes;
  }
}
