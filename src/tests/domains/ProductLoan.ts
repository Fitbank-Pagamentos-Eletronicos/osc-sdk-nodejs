import { ProductLoan } from "../../domains/ProductLoan";

const productLoan = new ProductLoan();

productLoan.setInstallments(1);
productLoan.setNumber("2022");
productLoan.setType(3);

const json = `{"installments":1,"number":"2022","type":3}`;
const serialized = JSON.stringify(productLoan);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
