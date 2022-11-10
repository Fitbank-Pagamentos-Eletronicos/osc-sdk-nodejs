import { ProductAuto } from "../../domains/ProductAuto";

const productAuto = new ProductAuto();

productAuto.setType(5);
productAuto.setValue(20000);
productAuto.setVehicleBrand("Fiat");
productAuto.setVehicleFipeValue(20);
productAuto.setVehicleModel("Uno");
productAuto.setVehicleModelYear("2022");

const json = `{"type":5,"value":20000,"vehicleBrand":"Fiat","vehicleFipeValue":20,"vehicleModel":"Uno","vehicleModelYear":"2022"}`;
const serialized = JSON.stringify(productAuto);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
