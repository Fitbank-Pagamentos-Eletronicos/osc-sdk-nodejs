import { ProposalBankAccount } from "../../domains/ProposalBankAccount";
import { State } from "../../domains/enums";
import { Identity } from "../../domains/Identity";
import { Address } from "../../domains/Address";
import { Business } from "../../domains/Business";
import { ProductBankAccount } from "../../domains/ProductBankAccount";

let proposalBankAccount = new ProposalBankAccount();

proposalBankAccount.setMother("Maria");
proposalBankAccount.setGender(1);
proposalBankAccount.setNationality(0);
proposalBankAccount.setHometownState(State.CE);
proposalBankAccount.setRelationshipStatus(0);

proposalBankAccount.setIdentity(
  (() => {
    let identity = new Identity();

    identity.setType(0);
    identity.setNumber("400946750");
    return identity;
  })()
);

proposalBankAccount.setAddress(
  (() => {
    let address = new Address();

    address.setZipCode("60177240");
    address.setAddress("Rua do Feijão");
    address.setNumber("2022");
    address.setComplement("Casa");
    address.setDistrict("Bairro do Arroz");
    address.setState(State.CE);
    address.setCity("Macarrão");
    return address;
  })()
);

proposalBankAccount.setBusiness(
  (() => {
    let business = new Business();
    business.setOccupation(2);
    business.setIncome("1000");
    return business;
  })()
);

proposalBankAccount.setProducts(
  (() => {
    let products = new ProductBankAccount();
    products.setType("2022");
    return products;
  })()
);

const json = `{"mother":"Maria","gender":1,"nationality":0,"hometownState":"CE","relationshipStatus":0,"identity":{"type":0,"number":"400946750"},"address":{"zipCode":"60177240","address":"Rua do Feijão","number":"2022","complement":"Casa","district":"Bairro do Arroz","state":"CE","city":"Macarrão"},"business":{"occupation":2,"income":"1000"},"products":{"type":"2022"}}`;
const serialized = JSON.stringify(proposalBankAccount);
console.log("=====Serialize=====");
console.log(serialized);
console.log("=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);
console.log(`\nIs serialized? ${json === serialized}`);
