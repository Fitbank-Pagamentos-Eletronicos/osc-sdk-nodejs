import { SignContract } from "../../domains/SignContract";
const signContract = new SignContract();

signContract.setAceptedCheckSum(["accepted", "no accepted", "ok", "don't"]);

const json = `{"aceptedCheckSum":["accepted","no accepted","ok","don't"]}`;
const serialized = JSON.stringify(signContract);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
