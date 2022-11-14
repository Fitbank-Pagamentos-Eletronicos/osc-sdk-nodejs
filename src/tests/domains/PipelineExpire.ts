import { PipelineExpire } from "../../domains/PipelineExpire";

const pipelineExpire = new PipelineExpire();

pipelineExpire.setId("003");
pipelineExpire.setStatus("Online");
pipelineExpire.setCpf(60343933373);
pipelineExpire.setName("John Doe");
pipelineExpire.setDateCreated("2022-11-08");
pipelineExpire.setLastUpdated("2022-11-09");

const json = `{"id":"003","status":"Online","cpf":60343933373,"name":"John Doe","dateCreated":"2022-11-08","lastUpdated":"2022-11-09"}`;
const serialized = JSON.stringify(pipelineExpire);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
