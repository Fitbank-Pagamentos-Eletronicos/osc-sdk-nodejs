import { LogData } from "../../domains/LogData";

let logData = new LogData();

logData.setLatitude(38.895);
logData.setLongitude(-77.0364);
logData.setOccurrenceDate("2022-10-22 14:10:20");
logData.setUserAgent("Test Agent");
logData.setIp("192.158.1.38");
logData.setMac("00:00:5e:00:53:af");

const json = `{"latitude":38.895,"longitude":-77.0364,"occurrenceDate":"2022-10-22 14:10:20","userAgent":"Test Agent","ip":"192.158.1.38","mac":"00:00:5e:00:53:af"}`;
const serialized = JSON.stringify(logData);
console.log("=====Serialize=====");
console.log(serialized);
console.log("=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);
console.log(`\nIs serialized? ${json === serialized}`);
