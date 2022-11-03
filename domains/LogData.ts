export class LogData {
  private _latitude: number;
  private _longitude: number;
  private _occurrenceDate: string;
  private _userAgent: string;
  private _ip: string;
  private _mac: string;

  get latitude() {
    return this._latitude;
  }

  get longitude() {
    return this._longitude;
  }

  get occurrenceDate() {
    return this._occurrenceDate;
  }

  get userAgent() {
    return this._userAgent;
  }

  get ip() {
    return this._ip;
  }

  get mac() {
    return this._mac;
  }

  set latitude(latitude: number) {
    this._latitude = latitude;
  }

  set longitude(longitude: number) {
    this._longitude = longitude;
  }

  set occurrenceDate(occurrenceDate: string) {
    this._occurrenceDate = occurrenceDate;
  }

  set userAgent(userAgent: string) {
    this._userAgent = userAgent;
  }

  set ip(ip: string) {
    this._ip = ip;
  }

  set mac(mac: string) {
    this._mac = mac;
  }
}
