import { SignupMatch } from "../../domains/SignupMatch";
import { ProductAuto } from "../../domains/ProductAuto";
import { ProductLoan } from "../../domains/ProductLoan";
import { ProductCard } from "../../domains/ProductCard";
import { ProductHome } from "../../domains/ProductHome";
import { LogData } from "../../domains/LogData";
import { Banks } from "../../domains/enums";

let signupMatch = new SignupMatch();

signupMatch.setCpf("60343933373");
signupMatch.setName("Teste");
signupMatch.setBirthday("1990-11-08");
signupMatch.setEmail("email@gmail.com");
signupMatch.setPhone("85912345678");
signupMatch.setZipCode("60177240");
signupMatch.setEducation(4);
signupMatch.setBanks(Banks.B450);
signupMatch.setOccupation(3);
signupMatch.setIncome(1000);
signupMatch.setHasCreditCard(true);
signupMatch.setHasRestriction(false);
signupMatch.setHasOwnHouse(false);
signupMatch.setHasVehicle(false);

signupMatch.setProducts(
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

//LogData
signupMatch.setLogData(
  (() => {
    let logData = new LogData();

    logData.setIp("192.158.1.38");
    logData.setLatitude(38.895);
    logData.setLongitude(-77.0364);
    logData.setMac("00:00:5e:00:53:af");
    logData.setOccurrenceDate("2022-10-22 14:10:20");
    logData.setUserAgent("Test Agent");
    return logData;
  })()
);

const json = `{"cpf":"60343933373","name":"Teste","birthday":"1990-11-08","email":"email@gmail.com","phone":"85912345678","zipCode":"60177240","education":4,"banks":{"code":"450","desc":"FITBANK PAGAMENTOS ELETRONICOS S.A."},"occupation":3,"income":1000,"hasCreditCard":true,"hasRestriction":false,"hasOwnHouse":false,"hasVehicle":false,"products":[{"type":5,"value":20000,"vehicleBrand":"Fiat","vehicleFipeValue":20,"vehicleModel":"Uno","vehicleModelYear":"2022"},{"type":6,"payDay":"ProductCard","network":6},{"installments":1,"number":"2022","type":3},{"installments":5,"outstandingBalance":88,"realEstateType":4,"realEstateValue":6,"type":10,"value":4555}],"logData":{"ip":"192.158.1.38","latitude":38.895,"longitude":-77.0364,"mac":"00:00:5e:00:53:af","occurrenceDate":"2022-10-22 14:10:20","userAgent":"Test Agent"}}`;
const serialized = JSON.stringify(signupMatch);
console.log("=====Serialize=====");
console.log(serialized);
console.log("=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);
console.log(`\nIs serialized? ${json === serialized}`);
