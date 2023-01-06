import { AuthSuccess } from '../../domains/AuthSuccess';
const authSuccess = new AuthSuccess();

const json = `{"acceptedCheckSum":["accepted","no accepted","ok","don't"]}`;
const serialized = JSON.stringify(authSuccess);
console.log('=====Serialize=====');
console.log(serialized);
console.log('\n\n=====Deserialize=====');
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
