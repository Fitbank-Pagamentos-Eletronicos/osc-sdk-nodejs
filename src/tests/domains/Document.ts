import { Document } from "../../domains/Document";
const document = new Document();

document.setType(0);
document.setMimeType(0);
document.setName("John Doe");
document.setBase64("Q3fpIqgQx03KELgB95K2WQ==");

const json = `{"type":0,"mimeType":0,"name":"John Doe","base64":"Q3fpIqgQx03KELgB95K2WQ=="}`;
const serialized = JSON.stringify(document);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
