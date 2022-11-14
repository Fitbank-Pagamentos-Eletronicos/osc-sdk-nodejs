import { Auth } from "../../domains/Auth";
let auth = new Auth();

auth.setClient_id("4");
auth.setClient_secret("password");
auth.setScopes(1);

const json = `{"client_id":"4","client_secret":"password","scopes":1}`;
const serialized = JSON.stringify(auth);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
