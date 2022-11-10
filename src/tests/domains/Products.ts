import { ProductAuto } from "../../domains/ProductAuto";
import { ProductCard } from "../../domains/ProductCard";
import { ProductLoan } from "../../domains/ProductLoan";
import { ProductHome } from "../../domains/ProductHome";

const productAuto = new ProductAuto();
productAuto.setType(5);
productAuto.setValue(20000);
productAuto.setVehicleBrand("Fiat");
productAuto.setVehicleFipeValue(20);
productAuto.setVehicleModel("Uno");
productAuto.setVehicleModelYear("2022");

const productCard = new ProductCard();
productCard.setType(6);
productCard.setPayDay("ProductCard");
productCard.setNetwork(6);

const productLoan = new ProductLoan();
productLoan.setInstallments(1);
productLoan.setNumber("2022");
productLoan.setType(3);

const productHome = new ProductHome();
productHome.setInstallments(5);
productHome.setOutstandingBalance(88);
productHome.setRealEstateType(4);
productHome.setRealEstateValue(6);
productHome.setType(10);
productHome.setValue(4555);

const products = [productLoan, productCard, productAuto, productHome];

const json = `[{"installments":1,"number":"2022","type":3},{"type":6,"payDay":"ProductCard","network":6},{"type":5,"value":20000,"vehicleBrand":"Fiat","vehicleFipeValue":20,"vehicleModel":"Uno","vehicleModelYear":"2022"},{"installments":5,"outstandingBalance":88,"realEstateType":4,"realEstateValue":6,"type":10,"value":4555}]`;
const serialized = JSON.stringify(products);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
