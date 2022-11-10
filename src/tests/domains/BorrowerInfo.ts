import { BorrowerInfo } from "../../domains/BorrowerInfo";

const borrowerInfo = new BorrowerInfo();
borrowerInfo.setIsBlocked(true);
borrowerInfo.setIsRegistered(false);

const json = `{"isBlocked":true,"isRegistered":false}`;
const serialized = JSON.stringify(borrowerInfo);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
