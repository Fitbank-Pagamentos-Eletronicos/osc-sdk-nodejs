import { Auto } from "../../domains/Auto";

const auto = new Auto();

auto.setCustomerServiceNumber("1914");
auto.setType(0);
auto.setProduct("Feijão");
auto.setProductId(1996);
auto.setHasDocuments(true);
auto.setHasContracts(false);
auto.setLogo("Logo FitBank");
auto.setLastStatus(4);
auto.setPendentDocuments(8);
auto.setDateCreated("2022-11-09");
auto.setLastUpdated("2022-11-10");
auto.setValue(2000);
auto.setInstallments(12);
auto.setMonthlyTax(2);
auto.setInstallments(200);
auto.setIofValue(100);
auto.setGrossValue(1500);
auto.setFirstPaymentDate("2022-12-07");
auto.setCet(2500);
auto.setReleasedDate("2022-11-15");

const json = `{"customerServiceNumber":"1914","type":0,"product":"Feijão","productId":1996,"hasDocuments":true,"hasContracts":false,"logo":"Logo FitBank","lastStatus":4,"pendentDocuments":8,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10","value":2000,"installments":200,"monthlyTax":2,"iofValue":100,"grossValue":1500,"firstPaymentDate":"2022-12-07","cet":2500,"releasedDate":"2022-11-15"}`;
const serialized = JSON.stringify(auto);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
