import { MatchLoan } from "../../domains/MatchLoan";

const matchLoan = new MatchLoan();

matchLoan.setProductId(1914);
matchLoan.setName("John Doe");
matchLoan.setLogo("Logo FitBank");
matchLoan.setMinValue(1000);
matchLoan.setMaxValue(2000);
matchLoan.setMinInstallment(12);
matchLoan.setMaxInstallment(24);
matchLoan.setMonthlyTax(6);

const json = `{"productId":1914,"name":"John Doe","logo":"Logo FitBank","minValue":1000,"maxValue":2000,"minInstallment":12,"maxInstallment":24,"monthlyTax":6}`;
const serialized = JSON.stringify(matchLoan);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
