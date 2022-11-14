import { PipelineWithProposal } from "../../domains/PipelineWithProposal";
import { Loan } from "../../domains/Loan";
import { Card } from "../../domains/Card";
import { Auto } from "../../domains/Auto";
import { Home } from "../../domains/Home";

const pipelineWithProposal = new PipelineWithProposal();

pipelineWithProposal.setId("003");
pipelineWithProposal.setStatus("Online");
pipelineWithProposal.setCpf(60343933373);
pipelineWithProposal.setName("John Doe");
pipelineWithProposal.setDateCreated("2022-11-08");
pipelineWithProposal.setLastUpdated("2022-11-09");

pipelineWithProposal.setProposals(
  (() => {
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

    return [loan, card, auto, home];
  })()
);

const json = `{"id":"003","status":"Online","cpf":60343933373,"name":"John Doe","dateCreated":"2022-11-08","lastUpdated":"2022-11-09","proposals":[{"customerServiceNumber":"1914","type":0,"product":"Feijão","productId":1996,"hasDocuments":true,"hasContracts":false,"logo":"Logo FitBank","pendentDocuments":8,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10","value":2000,"installments":200,"monthlyTax":2,"iofValue":100,"grossValue":1500,"firstPaymentDate":"2022-12-07","cet":2500,"releasedDate":"2022-11-15"},{"customerServiceNumber":"1910","type":1,"product":"Arroz","productId":1996,"hasDocuments":false,"hasContracts":true,"logo":"Logo","lastStatus":4,"pendentDocuments":2,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10","international":true,"annuity":120,"network":1,"prepaid":true,"digitalAccount":false},{"customerServiceNumber":"1914","type":0,"product":"Feijão","productId":1996,"hasDocuments":true,"hasContracts":false,"logo":"Logo FitBank","lastStatus":4,"pendentDocuments":8,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10","value":2000,"installments":200,"monthlyTax":2,"iofValue":100,"grossValue":1500,"firstPaymentDate":"2022-12-07","cet":2500,"releasedDate":"2022-11-15"},{"customerServiceNumber":"1914","type":0,"product":"Feijão","productId":1996,"hasDocuments":true,"hasContracts":false,"logo":"Logo FitBank","lastStatus":4,"pendentDocuments":8,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10","value":2000,"installments":200,"monthlyTax":2,"iofValue":100,"grossValue":1500,"firstPaymentDate":"2022-12-07","cet":2500,"releasedDate":"2022-11-15"}]}`;
const serialized = JSON.stringify(pipelineWithProposal);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);