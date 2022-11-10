import { Card } from "../../domains/Card";

const card = new Card();

card.setCustomerServiceNumber("1910");
card.setType(1);
card.setProduct("Arroz");
card.setProductId(1996);
card.setHasDocuments(false);
card.setHasContracts(true);
card.setLogo("Logo");
card.setLastStatus(4);
card.setPendentDocuments(2);
card.setDateCreated("2022-11-09");
card.setLastUpdated("2022-11-10");
card.setInternational(true);
card.setAnnuity(120);
card.setNetwork(1);
card.setPrepaid(true);
card.setDigitalAccount(false);

const json = `{"customerServiceNumber":"1910","type":1,"product":"Arroz","productId":1996,"hasDocuments":false,"hasContracts":true,"logo":"Logo","lastStatus":4,"pendentDocuments":2,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10","international":true,"annuity":120,"network":1,"prepaid":true,"digitalAccount":false}`;
const serialized = JSON.stringify(card);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
