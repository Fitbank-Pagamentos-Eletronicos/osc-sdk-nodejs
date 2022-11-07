import { DocumentType, MimeType } from "./enums";

export class DocumentResponse {
  private _type: DocumentType;
  private _mimeType: MimeType;
  private _name: string;
  private _url: string;

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

  public get url(): string {
    return this._url;
  }

  public set url(url: string) {
    this._url = url;
  }
}
