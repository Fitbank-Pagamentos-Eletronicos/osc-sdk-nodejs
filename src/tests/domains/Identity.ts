import { Identity } from "../../domains/Identity";
import { State } from "../../domains/enums";
let identity = new Identity();

identity.setType(0);
identity.setNumber("400946750");
identity.setIssuer(0);
identity.setState(State.CE);
identity.setIssuingDate("2009-08-08");

const json = `{"type":0,"number":"400946750","issuer":0,"state":"CE","issuingDate":"2009-08-08"}`;
const serialized = JSON.stringify(identity);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
