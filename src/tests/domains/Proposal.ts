import { Proposal } from "../../domains/Proposal";
import { Banks, Gender, State } from "../../domains/enums";
import { Identity } from "../../domains/Identity";
import { Address } from "../../domains/Address";
import { Vehicle } from "../../domains/Vehicle";
import { Bank } from "../../domains/Bank";
import { Reference } from "../../domains/Reference";
import { ProductAuto } from "../../domains/ProductAuto";
import { ProductCard } from "../../domains/ProductCard";
import { ProductLoan } from "../../domains/ProductLoan";
import { ProductHome } from "../../domains/ProductHome";
import { Business } from "../../domains/Business";
import { ConsumerUnit } from "../../domains/ConsumerUnit";

let proposal = new Proposal();

proposal.setMother("Maria");
// proposal.setGender(Gender.G01);
proposal.setGender(1);
proposal.setNationality(0);
proposal.setHometownState(State.CE);
proposal.setEducation(5);
proposal.setRelationshipStatus(0);
proposal.setPhoneLandline("85985123456");

proposal.setIdentity(
  (() => {
    let identity = new Identity();

    identity.setType(0);
    identity.setNumber("400946750");
    identity.setIssuer(0);
    identity.setState(State.CE);
    identity.setIssuingDate("2009-08-08");
    return identity;
  })()
);

proposal.setAddress(
  (() => {
    let address = new Address();

    address.setZipCode("60177240");
    address.setAddress("Rua do Feijão");
    address.setNumber("2022");
    address.setComplement("Casa");
    address.setDistrict("Bairro do Arroz");
    address.setState(State.CE);
    address.setCity("Macarrão");
    address.setHomeType(4);
    address.setHomeSince(0);
    return address;
  })()
);

proposal.setVehicle(
  (() => {
    let vehicle = new Vehicle();

    vehicle.setLicensePlate("HUZ-8518");
    return vehicle;
  })()
);

proposal.setConsumerUnit(
  (() => {
    const consumerUnit = new ConsumerUnit();

    consumerUnit.setNumber("1914");
    return consumerUnit;
  })()
);

proposal.setBusiness(
  (() => {
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
    return business;
  })()
);

proposal.setBank(
  (() => {
    let bank = new Bank();

    bank.setBank(Banks.B450);
    bank.setType(0);
    bank.setAgency("2093");
    bank.setAccount("1018548-8");
    return bank;
  })()
);

proposal.setReference(
  (() => {
    let reference = new Reference();

    reference.setName("João");
    reference.setPhone("85985456789");

    return [reference];
  })()
);

proposal.setProducts(
  (() => {
    //test ProductAuto
    let productAuto = new ProductAuto();
    productAuto.setType(5);
    productAuto.setValue(20000);
    productAuto.setVehicleBrand("Fiat");
    productAuto.setVehicleFipeValue(20);
    productAuto.setVehicleModel("Uno");
    productAuto.setVehicleModelYear("2022");

    //test ProductCard
    let productCard = new ProductCard();
    productCard.setType(6);
    productCard.setPayDay("ProductCard");
    productCard.setNetwork(6);

    //test ProductLoan
    let productLoan = new ProductLoan();
    productLoan.setInstallments(1);
    productLoan.setNumber("2022");
    productLoan.setType(3);

    //test ProductHome
    let productHome = new ProductHome();
    productHome.setInstallments(5);
    productHome.setOutstandingBalance(88);
    productHome.setRealEstateType(4);
    productHome.setRealEstateValue(6);
    productHome.setType(10);
    productHome.setValue(4555);

    return [productAuto, productCard, productLoan, productHome];
  })()
);

const json = `{"mother":"Maria","gender":1,"nationality":0,"hometownState":"CE","education":5,"relationshipStatus":0,"phoneLandline":"85985123456","identity":{"type":0,"number":"400946750","issuer":0,"state":"CE","issuingDate":"2009-08-08"},"address":{"zipCode":"60177240","address":"Rua do Feijão","number":"2022","complement":"Casa","district":"Bairro do Arroz","state":"CE","city":"Macarrão","homeType":4,"homeSince":0},"vehicle":{"licensePlate":"HUZ-8518"},"consumerUnit":{"number":"1914"},"business":{"occupation":2,"profession":"Desenvolvedor","companyName":"FitBank 450","phone":"85912345678","income":"1000","employmentSince":1,"payday":"05","benefitNumber":"10","zipCode":"60177240","address":"Rua do Feijão","number":"2022","complement":"Casa","district":"Bairro do Arroz","state":"CE","city":"Macarrão"},"bank":{"bank":{"code":"450","desc":"FITBANK PAGAMENTOS ELETRONICOS S.A."},"type":0,"agency":"2093","account":"1018548-8"},"reference":[{"name":"João","phone":"85985456789"}],"products":[{"type":5,"value":20000,"vehicleBrand":"Fiat","vehicleFipeValue":20,"vehicleModel":"Uno","vehicleModelYear":"2022"},{"type":6,"payDay":"ProductCard","network":6},{"installments":1,"number":"2022","type":3},{"installments":5,"outstandingBalance":88,"realEstateType":4,"realEstateValue":6,"type":10,"value":4555}]}`;
const serialized = JSON.stringify(proposal);
console.log("=====Serialize=====");
console.log(serialized);
console.log("=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);
console.log(`\nIs serialized? ${json === serialized}`);
