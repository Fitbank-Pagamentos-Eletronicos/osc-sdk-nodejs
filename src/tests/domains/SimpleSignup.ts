import { LogData } from "../../domains/LogData";
import { SimpleSignup } from "../../domains/SimpleSignup";

let simpleSignup = new SimpleSignup();

simpleSignup.setCpf("60343933373");
simpleSignup.setName("Teste");
simpleSignup.setBirthday("1990-11-08");
simpleSignup.setEmail("email@gmail.com");
simpleSignup.setPhone("85912345678");
simpleSignup.setZipCode("60177240");
simpleSignup.setHasCreditCard(true);
simpleSignup.setHasRestriction(false);
simpleSignup.setHasOwnHouse(false);
simpleSignup.setHasVehicle(false);
simpleSignup.setHasAndroid(true);

simpleSignup.setLogData(
  (() => {
    let logData = new LogData();

    logData.setLatitude(38.895);
    logData.setLongitude(-77.0364);
    logData.setOccurrenceDate("2022-10-22 14:10:20");
    logData.setUserAgent("Test Agent");
    logData.setIp("192.158.1.38");
    logData.setMac("00:00:5e:00:53:af");
    return logData;
  })()
);

const json = `{"cpf":"60343933373","name":"Teste","birthday":"1990-11-08","email":"email@gmail.com","phone":"85912345678","zipCode":"60177240","hasCreditCard":true,"hasRestriction":false,"hasOwnHouse":false,"hasVehicle":false,"hasAndroid":true,"logData":{"latitude":38.895,"longitude":-77.0364,"occurrenceDate":"2022-10-22 14:10:20","userAgent":"Test Agent","ip":"192.158.1.38","mac":"00:00:5e:00:53:af"}}`;
const serialized = JSON.stringify(simpleSignup);
console.log("=====Serialize=====");
console.log(serialized);
console.log("=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);
console.log(`\nIs serialized? ${json === serialized}`);
