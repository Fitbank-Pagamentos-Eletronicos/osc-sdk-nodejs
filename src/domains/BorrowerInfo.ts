export class BorrowerInfo {
  private isRegistered: boolean;
  private isBlocked: boolean;

  public isIsRegistered(): boolean {
    return this.isRegistered;
  }

  public setIsRegistered(isRegistered: boolean): void {
    this.isRegistered = isRegistered;
  }

  public isIsBlocked(): boolean {
    return this.isBlocked;
  }

  public setIsBlocked(isBlocked: boolean): void {
    this.isBlocked = isBlocked;
  }
}
