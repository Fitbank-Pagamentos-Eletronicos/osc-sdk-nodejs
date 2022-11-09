export class LogData {
  private latitude: number;
  private longitude: number;
  private occurrenceDate: string;
  private userAgent: string;
  private ip: string;
  private mac: string;

  public getLatitude(): number {
    return this.latitude;
  }

  public setLatitude(latitude: number): void {
    this.latitude = latitude;
  }

  public getLongitude(): number {
    return this.longitude;
  }

  public setLongitude(longitude: number): void {
    this.longitude = longitude;
  }

  public getOccurrenceDate(): string {
    return this.occurrenceDate;
  }

  public setOccurrenceDate(occurrenceDate: string): void {
    this.occurrenceDate = occurrenceDate;
  }

  public getUserAgent(): string {
    return this.userAgent;
  }

  public setUserAgent(userAgent: string): void {
    this.userAgent = userAgent;
  }

  public getIp(): string {
    return this.ip;
  }

  public setIp(ip: string): void {
    this.ip = ip;
  }

  public getMac(): string {
    return this.mac;
  }

  public setMac(mac: string): void {
    this.mac = mac;
  }
}
