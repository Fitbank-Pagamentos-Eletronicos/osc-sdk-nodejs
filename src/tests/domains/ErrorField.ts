import { ErrorField } from "../../domains/ErrorField";

const error = new ErrorField();
error.setMessage("Mensagem do ErrorField");
error.setField("Field do ErrorField");

const json = `{"message":"Mensagem do ErrorField","field":"Field do ErrorField"}`;
const serialized = JSON.stringify(error);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
