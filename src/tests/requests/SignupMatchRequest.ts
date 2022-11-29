import { SignupMatchRequest } from '../../requests/SignupMatchRequest';
import { SignupMatch } from '../../domains/SignupMatch';
import { ProductAuto } from '../../domains/ProductAuto';
import { ProductLoan } from '../../domains/ProductLoan';
import { ProductCard } from '../../domains/ProductCard';
import { ProductHome } from '../../domains/ProductHome';
import { LogData } from '../../domains/LogData';
import { Banks, Education, Occupation, Scopes } from '../../domains/enums';
import { Auth } from '../../domains/Auth';

const signupMatch = new SignupMatch();

signupMatch.setCpf('60343933373');
signupMatch.setName('John Doe');
signupMatch.setBirthday('1990-11-08');
signupMatch.setEmail('email@gmail.com');
signupMatch.setPhone('85912345678');
signupMatch.setZipCode('60177240');
signupMatch.setEducation(Education[Education.POS_GRADUACAO]);
signupMatch.setBanks(Banks.B450);
signupMatch.setOccupation(Occupation[Occupation.ASSALARIADO]);
signupMatch.setIncome(2000);
signupMatch.setHasCreditCard(true);
signupMatch.setHasRestriction(false);
signupMatch.setHasOwnHouse(false);
signupMatch.setHasVehicle(false);

signupMatch.setProducts(
  (() => {
    let productAuto = new ProductAuto();
    productAuto.setType(5);
    productAuto.setValue(20000);
    productAuto.setVehicleBrand('Fiat');
    productAuto.setVehicleFipeValue(20);
    productAuto.setVehicleModel('Uno');
    productAuto.setVehicleModelYear('2022');

    let productCard = new ProductCard();
    productCard.setType(6);
    productCard.setPayDay('ProductCard');
    productCard.setNetwork(6);

    let productLoan = new ProductLoan();
    productLoan.setInstallments(1);
    productLoan.setNumber('2022');
    productLoan.setType(3);

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

signupMatch.setLogData(
  (() => {
    let logData = new LogData();

    logData.setIp('192.158.1.38');
    logData.setLatitude(38.895);
    logData.setLongitude(-77.0364);
    logData.setMac('00:00:5e:00:53:af');
    logData.setOccurrenceDate('2019-08-21T14:31:17.459Z');
    logData.setUserAgent('Test Agent');
    return logData;
  })()
);

const auth = new Auth();
auth.setClient_id('4dbe3aa7-8ce9-43a4-9298-73b700e712bb');
auth.setClient_secret(
  '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8'
);
auth.setScopes(Scopes.api_external);

SignupMatchRequest(signupMatch, auth).then((res) => {
  console.log(res);
});
