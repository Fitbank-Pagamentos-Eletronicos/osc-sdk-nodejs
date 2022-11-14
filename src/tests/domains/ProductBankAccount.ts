import { ProductBankAccount } from "../../domains/ProductBankAccount";

const productBankAccount = new ProductBankAccount();
productBankAccount.setType("2022");

const json = `{"type":"2022"}`;
const serialized = JSON.stringify(productBankAccount);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
