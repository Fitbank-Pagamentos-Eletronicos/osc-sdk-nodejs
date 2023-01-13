import { Document } from '../../domains/';
import { DocumentType, MimeType } from '../../domains/enums';

test('Document Serialize + Deserialize', () => {
  const document = new Document();

  document.setType(DocumentType[DocumentType.ADDRESS_PROOF]);
  document.setMimeType(MimeType[MimeType['application/pdf']]);
  document.setName('John Doe');
  document.setBase64('Q3fpIqgQx03KELgB95K2WQ==');

  const serialized = JSON.stringify(document);
  const deserialized = Object.assign(new Document(), JSON.parse(serialized));

  expect(document.getType()).toBe(deserialized.getType());
  expect(document.getMimeType()).toBe(deserialized.getMimeType());
  expect(document.getName()).toBe(deserialized.getName());
  expect(document.getBase64()).toBe(deserialized.getBase64());
});
