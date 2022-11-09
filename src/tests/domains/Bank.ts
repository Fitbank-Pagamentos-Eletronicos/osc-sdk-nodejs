import { Bank } from "../../domains/Bank";
import { Banks } from "../../domains/enums";
let bank = new Bank();

bank.setBank(Banks.B450);
bank.setType(0);
bank.setAgency("2093");
bank.setAccount("1018548-8");

const json = `{"bank":{"code":"450","desc":"FITBANK PAGAMENTOS ELETRONICOS S.A."},"type":0,"agency":"2093","account":"1018548-8"}`;
const serialized = JSON.stringify(bank);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
