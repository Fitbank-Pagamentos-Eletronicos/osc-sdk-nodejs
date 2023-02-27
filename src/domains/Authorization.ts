import { Scopes } from './enums';

export class Authorization {
  private client_id: string;
  private client_secret: string;
  private scopes: Scopes;

  public getClient_id(): string {
    return this.client_id;
  }

  public setClient_id(client_id: string): void {
    this.client_id = client_id;
  }

  public getClient_secret(): string {
    return this.client_secret;
  }

  public setClient_secret(client_secret: string): void {
    this.client_secret = client_secret;
  }

  public getScopes(): Scopes {
    return this.scopes;
  }

  public setScopes(scopes: Scopes): void {
    this.scopes = scopes;
  }
}
