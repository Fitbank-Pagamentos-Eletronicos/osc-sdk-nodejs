import { DocumentResponse } from "../../domains/DocumentResponse";
const documentResponse = new DocumentResponse();

documentResponse.setType(0);
documentResponse.setMimeType(0);
documentResponse.setName("John Doe");
documentResponse.setUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

const json = `{"type":0,"mimeType":0,"name":"John Doe","url":"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}`;
const serialized = JSON.stringify(documentResponse);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
