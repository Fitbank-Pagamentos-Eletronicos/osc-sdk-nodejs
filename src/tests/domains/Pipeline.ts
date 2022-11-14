import { Pipeline } from "../../domains/Pipeline";

const pipeline = new Pipeline();

pipeline.setId("001");
pipeline.setStatus("Online");
pipeline.setCpf(60343933373); //conferir esse
pipeline.setName("John Doe");
pipeline.setDateCreated("2022-11-08");
pipeline.setLastUpdated("2022-11-09");

const json = `{"id":"001","status":"Online","cpf":60343933373,"name":"John Doe","dateCreated":"2022-11-08","lastUpdated":"2022-11-09"}`;
const serialized = JSON.stringify(pipeline);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
