import { DocumentType, MimeType } from "./enums";

export class DocumentResponse {
  private type: DocumentType;
  private mimeType: MimeType;
  private name: string;
  private url: string;

  public getType(): DocumentType {
    return this.type;
  }

  public setType(type: DocumentType): void {
    this.type = type;
  }

  public getMimeType(): MimeType {
    return this.mimeType;
  }

  public setMimeType(mimeType: MimeType): void {
    this.mimeType = mimeType;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string): void {
    this.url = url;
  }
}
