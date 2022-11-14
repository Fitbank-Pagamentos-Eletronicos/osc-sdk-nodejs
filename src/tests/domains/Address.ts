import { Address } from "../../domains/Address";
import { State } from "../../domains/enums";
let address = new Address();

address.setZipCode("60861-105");
address.setAddress("Rua do Feijão");
address.setNumber("2022");
address.setComplement("Casa");
address.setDistrict("Bairro do Arroz");
address.setState(State["CE"]);
address.setCity("Macarrão");
address.setHomeType(4);
address.setHomeSince(0);

const json = `{"zipCode":"60861-105","address":"Rua do Feijão","number":"2022","complement":"Casa","district":"Bairro do Arroz","state":"CE","city":"Macarrão","homeType":4,"homeSince":0}`;
const serialized = JSON.stringify(address);
console.log("=====Serialize=====");
console.log(serialized);
console.log("=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);
console.log(`\nIs serialized? ${json === serialized}`);
