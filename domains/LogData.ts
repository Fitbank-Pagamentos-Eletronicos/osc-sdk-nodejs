export class LogData {
  private _latitude: number;
  private _longitude: number;
  private _occurrenceDate: string;
  private _userAgent: string;
  private _ip: string;
  private _mac: string;

  public get latitude(): number {
    return this._latitude;
  }

  public set latitude(latitude: number) {
    this._latitude = latitude;
  }

  public get longitude(): number {
    return this._longitude;
  }

  public set longitude(longitude: number) {
    this._longitude = longitude;
  }

  public get occurrenceDate(): string {
    return this._occurrenceDate;
  }

  public set occurrenceDate(occurrenceDate: string) {
    this._occurrenceDate = occurrenceDate;
  }

  public get userAgent(): string {
    return this._userAgent;
  }

  public set userAgent(userAgent: string) {
    this._userAgent = userAgent;
  }

  public get ip(): string {
    return this._ip;
  }

  public set ip(ip: string) {
    this._ip = ip;
  }

  public get mac(): string {
    return this._mac;
  }

  public set mac(mac: string) {
    this._mac = mac;
  }
}
