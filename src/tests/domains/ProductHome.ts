import { ProductHome } from "../../domains/ProductHome";

const productHome = new ProductHome();

productHome.setInstallments(5);
productHome.setOutstandingBalance(88);
productHome.setRealEstateType(4);
productHome.setRealEstateValue(6);
productHome.setType(10);
productHome.setValue(4555);

const json = `{"installments":5,"outstandingBalance":88,"realEstateType":4,"realEstateValue":6,"type":10,"value":4555}`;
const serialized = JSON.stringify(productHome);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
