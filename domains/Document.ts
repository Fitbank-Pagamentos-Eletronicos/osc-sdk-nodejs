import { DocumentType, MimeType } from "./enums";

export class Document {
  private _type: DocumentType;
  private _mimeType: MimeType;
  private _name: string;
  private _base64: string;

  public get type(): DocumentType {
    return this._type;
  }

  public set type(type: DocumentType) {
    this._type = type;
  }

  public get mimeType(): MimeType {
    return this._mimeType;
  }

  public set mimeType(mimeType: MimeType) {
    this._mimeType = mimeType;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get base64(): string {
    return this._base64;
  }

  public set base64(base64: string) {
    this._base64 = base64;
  }
}
