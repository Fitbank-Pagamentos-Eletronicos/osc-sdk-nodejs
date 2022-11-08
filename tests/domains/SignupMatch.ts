import { SignupMatch } from "../../domains/SignupMatch";
import { ProductAuto } from "../../domains/ProductAuto";
import { ProductLoan } from "../../domains/ProductLoan";
import { ProductCard } from "../../domains/ProductCard";
import { ProductHome } from "../../domains/ProductHome";

let signupMatch = new SignupMatch();

signupMatch.setCpf("60343933373");
signupMatch.setName("Teste");
signupMatch.setBirthday("1990-11-08");
signupMatch.setEmail("email@gmail.com");
signupMatch.setPhone("85912345678");
signupMatch.setZipCode("60861105");
signupMatch.setEducation(4);
signupMatch.setBanks("450");
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
    productAuto.type = 5;
    productAuto.value = 20000;
    productAuto.vehicleBrand = "Fiat";
    productAuto.vehicleFipeValue = 20;
    productAuto.vehicleModel = "Uno";
    productAuto.vehicleModelYear = "2022";

    //test ProductCard
    let productCard = new ProductCard();
    productCard.type = 6;
    productCard.payDay = "ProductCard";
    productCard.network = 6;

    //test ProductLoan
    let productLoan = new ProductLoan();
    productLoan.installments = 1;
    productLoan.number = "2022";
    productLoan.type = 3;

    //test ProductHome
    let productHome = new ProductHome();
    productHome.installments = 5;
    productHome.outstandingBalance = 88;
    productHome.realEstateType = 4;
    productHome.realEstateValue = 6;
    productHome.type = 10;
    productHome.value = 4555;

    return [productAuto, productCard, productLoan, productHome];
  })()
);

signupMatch.setLogData.setIp("0000");
signupMatch.setLogData.setLatitude(88888);
signupMatch.setLogData.setLongitude(77777);
signupMatch.setLogData.setMac("AAAAA");
signupMatch.setLogData.setOccurrenceDate("2022-10-22");
signupMatch.setLogData.setUserAgent("Test Agent");

const serialized = JSON.stringify(signupMatch);
console.log("=====Serialize=====");
console.log(serialized);
console.log("=====Deserialize=====");
const deserialized = JSON.parse(serialized);
console.log(deserialized);
