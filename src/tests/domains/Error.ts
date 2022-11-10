import { Error } from "../../domains/Error";

const error = new Error();
error.setCode("404 xiiii");
error.setMessage("Pane no sistema");

const json = `{"code":"404 xiiii","message":"Pane no sistema"}`;
const serialized = JSON.stringify(error);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
