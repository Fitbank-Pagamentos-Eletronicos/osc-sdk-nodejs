import { DocumentResponse } from '../../domains/';
import { DocumentType, MimeType } from '../../domains/enums';

test('DocumentResponse Serialize + Deserialize', () => {
  const documentResponse = new DocumentResponse();

  documentResponse.setType(DocumentType[DocumentType.ADDRESS_PROOF]);
  documentResponse.setMimeType(MimeType[MimeType['application/pdf']]);
  documentResponse.setName('John Doe');
  documentResponse.setUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

  const serialized = JSON.stringify(documentResponse);
  const deserialized = Object.assign(
    new DocumentResponse(),
    JSON.parse(serialized)
  );

  expect(documentResponse.getType()).toBe(deserialized.getType());
  expect(documentResponse.getMimeType()).toBe(deserialized.getMimeType());
  expect(documentResponse.getName()).toBe(deserialized.getName());
  expect(documentResponse.getUrl()).toBe(deserialized.getUrl());
});
