import { Loan } from "../../domains/Loan";

const loan = new Loan();

loan.setCustomerServiceNumber("1914");
loan.setType(0);
loan.setProduct("Feijão");
loan.setProductId(1996);
loan.setHasDocuments(true);
loan.setHasContracts(false);
loan.setLogo("Logo FitBank");
loan.setPendentDocuments(8);
loan.setDateCreated("2022-11-09");
loan.setLastUpdated("2022-11-10");
loan.setValue(2000);
loan.setInstallments(12);
loan.setMonthlyTax(2);
loan.setInstallments(200);
loan.setIofValue(100);
loan.setGrossValue(1500);
loan.setFirstPaymentDate("2022-12-07");
loan.setCet(2500);
loan.setReleasedDate("2022-11-15");

const json = `{"customerServiceNumber":"1910","product":"Arroz","productId":1996,"hasDocuments":false,"hasContracts":true,"lastStatus":4,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10"}`;
const serialized = JSON.stringify(loan);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
