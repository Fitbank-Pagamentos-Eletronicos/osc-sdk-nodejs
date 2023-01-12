export class FipeLastUpdate {
  private lastUpdate: string;

  public getLastUpdate(): string {
    return this.lastUpdate;
  }

  public setLastUpdate(lastUpdate: string): void {
    this.lastUpdate = lastUpdate;
  }
}
