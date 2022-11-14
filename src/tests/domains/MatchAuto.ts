import { MatchAuto } from "../../domains/MatchAuto";

const matchAuto = new MatchAuto();

matchAuto.setProductId(2020);
matchAuto.setName("Ana Feijão");
matchAuto.setLogo("Logo Banco Zap");
matchAuto.setMinValue(1500);
matchAuto.setMaxValue(2500);
matchAuto.setMinInstallment(10);
matchAuto.setMaxInstallment(20);
matchAuto.setMonthlyTax(8);

const json = `{"productId":2020,"name":"Ana Feijão","logo":"Logo Banco Zap","minValue":1500,"maxValue":2500,"minInstallment":10,"maxInstallment":20,"monthlyTax":8}`;
const serialized = JSON.stringify(matchAuto);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
