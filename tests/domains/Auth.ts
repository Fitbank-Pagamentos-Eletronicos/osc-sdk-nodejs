import { Auth } from "../../domains/Auth";
let auth = new Auth();

auth.client_id = "4";
auth.client_secret = "password";
auth.scopes = 1;

const json = `{"_client_id":"4","_client_secret":"password","_scopes":1}`;
const serialized = JSON.stringify(auth);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
