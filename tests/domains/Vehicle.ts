import { Vehicle } from "../../domains/Vehicle";
const vehicle = new Vehicle();

vehicle.setLicensePlate("HUZ-8518");

const json = `{"licensePlate":"HUZ-8518"}`;
const serialized = JSON.stringify(vehicle);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
