import { Credit } from "../../domains/Credit";

const credit = new Credit();

credit.setCustomerServiceNumber("1910");
credit.setType(2);
credit.setProduct("Arroz");
credit.setProductId(1996);
credit.setHasDocuments(false);
credit.setHasContracts(true);
credit.setLogo("Logo");
credit.setLastStatus(4);
credit.setPendentDocuments(1);
credit.setDateCreated("2022-11-09");
credit.setLastUpdated("2022-11-10");

const json = `{"customerServiceNumber":"1910","type":2,"product":"Arroz","productId":1996,"hasDocuments":false,"hasContracts":true,"logo":"Logo","lastStatus":4,"pendentDocuments":1,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10"}`;
const serialized = JSON.stringify(credit);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
