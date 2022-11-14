import { Reference } from "../../domains/Reference";
const reference = new Reference();

reference.setName("João");
reference.setPhone("85985456789");

const json = `{"name":"João","phone":"85985456789"}`;
const serialized = JSON.stringify(reference);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
