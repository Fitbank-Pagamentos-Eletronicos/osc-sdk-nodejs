import { Business } from "../../domains/Business";
import { State } from "../../domains/enums";

const business = new Business();

business.setOccupation(2);
business.setProfession("Desenvolvedor");
business.setCompanyName("FitBank 450");
business.setPhone("85912345678");
business.setIncome("1000");
business.setEmploymentSince(1);
business.setPayday("05");
business.setBenefitNumber("10");
business.setZipCode("60177240");
business.setAddress("Rua do Feijão");
business.setNumber("2022");
business.setComplement("Casa");
business.setDistrict("Bairro do Arroz");
business.setState(State.CE);
business.setCity("Macarrão");

const json = `{"occupation":2,"profession":"Desenvolvedor","companyName":"FitBank 450","phone":"85912345678","income":"1000","employmentSince":1,"payday":"05","benefitNumber":"10","zipCode":"60177240","address":"Rua do Feijão","number":"2022","complement":"Casa","district":"Bairro do Arroz","state":"CE","city":"Macarrão"}`;
const serialized = JSON.stringify(business);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
