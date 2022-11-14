import { Contract } from "../../domains/Contract";
import { LogData } from "../../domains/LogData";
const contract = new Contract();

contract.setAceptedCheckSum(["ok", "ok2"]);

contract.setLogData(
  (() => {
    const logData = new LogData();

    logData.setIp("192.158.1.38");
    logData.setLatitude(38.895);
    logData.setLongitude(-77.0364);
    logData.setMac("00:00:5e:00:53:af");
    logData.setOccurrenceDate("2022-10-22 14:10:20");
    logData.setUserAgent("Test Agent");
    return logData;
  })()
);

const json = `{"aceptedCheckSum":["ok","ok2"],"logData":{"ip":"192.158.1.38","latitude":38.895,"longitude":-77.0364,"mac":"00:00:5e:00:53:af","occurrenceDate":"2022-10-22 14:10:20","userAgent":"Test Agent"}}`;
const serialized = JSON.stringify(contract);
console.log("=====Serialize=====");
console.log(serialized);
console.log("\n\n=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);

console.log(`\nIs serialized? ${json === serialized}`);