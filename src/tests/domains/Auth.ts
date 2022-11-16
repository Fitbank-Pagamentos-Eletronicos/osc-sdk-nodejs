import { Auth } from "../../domains/Auth";
import { Scopes } from "../../domains/enums";

let auth = new Auth();
auth.setClient_id("4");
auth.setClient_secret("password");
auth.setScopes(Scopes.api_external);

const json = `{"client_id":"4","client_secret":"password","scopes":"api-external"}`;
const serialized = JSON.stringify(auth);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
