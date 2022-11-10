import { Home } from "../../domains/Home";

const home = new Home();

home.setCustomerServiceNumber("1914");
home.setType(0);
home.setProduct("Feijão");
home.setProductId(1996);
home.setHasDocuments(true);
home.setHasContracts(false);
home.setLogo("Logo FitBank");
home.setLastStatus(4);
home.setPendentDocuments(8);
home.setDateCreated("2022-11-09");
home.setLastUpdated("2022-11-10");
home.setValue(2000);
home.setInstallments(12);
home.setMonthlyTax(2);
home.setInstallments(200);
home.setIofValue(100);
home.setGrossValue(1500);
home.setFirstPaymentDate("2022-12-07");
home.setCet(2500);
home.setReleasedDate("2022-11-15");

const json = `{"customerServiceNumber":"1914","type":0,"product":"Feijão","productId":1996,"hasDocuments":true,"hasContracts":false,"logo":"Logo FitBank","lastStatus":4,"pendentDocuments":8,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10","value":2000,"installments":200,"monthlyTax":2,"iofValue":100,"grossValue":1500,"firstPaymentDate":"2022-12-07","cet":2500,"releasedDate":"2022-11-15"}`;
const serialized = JSON.stringify(home);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
