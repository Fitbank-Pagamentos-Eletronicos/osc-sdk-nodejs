import { DocumentType, MimeType } from "./enums";

export class Document {
  private type: DocumentType;
  private mimeType: MimeType;
  private name: string;
  private base64: string;

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

  public getBase64(): string {
    return this.base64;
  }

  public setBase64(base64: string): void {
    this.base64 = base64;
  }
}
