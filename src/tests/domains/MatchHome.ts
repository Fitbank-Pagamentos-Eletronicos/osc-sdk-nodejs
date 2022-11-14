import { MatchHome } from "../../domains/MatchHome";

const matchHome = new MatchHome();

matchHome.setProductId(1996);
matchHome.setName("Francisco Xico");
matchHome.setLogo("Logo Login");
matchHome.setMinValue(2000);
matchHome.setMaxValue(3000);
matchHome.setMinInstallment(15);
matchHome.setMaxInstallment(25);
matchHome.setMonthlyTax(10);

const json = `{"productId":1996,"name":"Francisco Xico","logo":"Logo Login","minValue":2000,"maxValue":3000,"minInstallment":15,"maxInstallment":25,"monthlyTax":10}`;
const serialized = JSON.stringify(matchHome);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
