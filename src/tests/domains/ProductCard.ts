import { ProductCard } from "../../domains/ProductCard";

const productCard = new ProductCard();

productCard.setType(6);
productCard.setPayDay("ProductCard");
productCard.setNetwork(6);

const json = `{"type":6,"payDay":"ProductCard","network":6}`;
const serialized = JSON.stringify(productCard);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
