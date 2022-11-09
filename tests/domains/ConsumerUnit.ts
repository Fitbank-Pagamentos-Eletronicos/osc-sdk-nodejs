import { ConsumerUnit } from "../../domains/ConsumerUnit";
const consumerUnit = new ConsumerUnit();

consumerUnit.setNumber("1914");

const json = `{"number":"1914"}`;
const serialized = JSON.stringify(consumerUnit);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
