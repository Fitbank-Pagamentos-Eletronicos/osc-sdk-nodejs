import { Product } from "../../domains/Product";

const product = new Product();

product.setProductId(1996);
product.setName("João");
product.setLogo("Logo FitBank");

const json = `{"productId":1996,"name":"João","logo":"Logo FitBank"}`;
const serialized = JSON.stringify(product);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
