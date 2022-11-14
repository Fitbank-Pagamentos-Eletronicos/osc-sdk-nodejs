import { PipelineWithBankAccountProposal } from "../../domains/PipelineWithBankAccountProposal";
import { BankAccount } from "../../domains/BankAccount";

const pipelineWithBankAccountProposal = new PipelineWithBankAccountProposal();

pipelineWithBankAccountProposal.setId("003");
pipelineWithBankAccountProposal.setStatus("Online");
pipelineWithBankAccountProposal.setCpf(60343933373);
pipelineWithBankAccountProposal.setName("John Doe");
pipelineWithBankAccountProposal.setDateCreated("2022-11-08");
pipelineWithBankAccountProposal.setLastUpdated("2022-11-09");

pipelineWithBankAccountProposal.setProposals(
  (() => {
    const bankAccount = new BankAccount();
    bankAccount.setCustomerServiceNumber("1910");
    bankAccount.setProduct("Arroz");
    bankAccount.setProductId(1996);
    bankAccount.setHasDocuments(false);
    bankAccount.setHasContracts(true);
    bankAccount.setLastStatus(4);
    bankAccount.setDateCreated("2022-11-09");
    bankAccount.setLastUpdated("2022-11-10");

    return [bankAccount];
  })()
);

const json = `{"id":"003","status":"Online","cpf":60343933373,"name":"John Doe","dateCreated":"2022-11-08","lastUpdated":"2022-11-09","proposals":[{"customerServiceNumber":"1910","product":"Arroz","productId":1996,"hasDocuments":false,"hasContracts":true,"lastStatus":4,"dateCreated":"2022-11-09","lastUpdated":"2022-11-10"}]}`;
const serialized = JSON.stringify(pipelineWithBankAccountProposal);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
