import { PipelineProposal } from "../../domains/PipelineProposal";

const pipelineProposal = new PipelineProposal();

pipelineProposal.setId("003");
pipelineProposal.setStatus("Online");
pipelineProposal.setCpf(60343933373);
pipelineProposal.setName("John Doe");
pipelineProposal.setDateCreated("2022-11-08");
pipelineProposal.setLastUpdated("2022-11-09");

const json = `{"id":"003","status":"Online","cpf":60343933373,"name":"John Doe","dateCreated":"2022-11-08","lastUpdated":"2022-11-09"}`;
const serialized = JSON.stringify(pipelineProposal);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
