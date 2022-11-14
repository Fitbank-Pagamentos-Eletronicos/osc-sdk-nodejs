import { GetContract } from "../../domains/GetContract";
const getContract = new GetContract();

getContract.setCustomerServiceNumber("001");

const json = `{"customerServiceNumber":"001","contracts":[{"checksum":"OK","contract":"Q3fpIqgQx03KELgB95K2WQ=="}]}`;
const serialized = JSON.stringify(getContract);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);
