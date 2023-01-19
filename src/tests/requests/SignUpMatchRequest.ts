import { SignupMatch, LogData } from '../../domains/';
import { ProductAuto } from '../../domains/ProductAuto';
import { ProductLoan } from '../../domains/ProductLoan';
import { ProductCard } from '../../domains/ProductCard';
import { ProductHome } from '../../domains/ProductHome';
import {
  Banks,
  Education,
  Network,
  Occupation,
  ProductType,
  RealEstateType,
  Scopes
} from '../../domains/enums';
import { OSC } from '../../..';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const signUp = async () => {
  const instance = OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'default'
  );
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
      const productLoan = new ProductLoan();
      productLoan.setInstallments(12);
      productLoan.setValue(7000);
      productLoan.setType(ProductType.LOAN);

      const productCard = new ProductCard();
      productCard.setType(ProductType.CARD);
      productCard.setPayDay('12');
      productCard.setNetwork(Network.MASTERCARD);

      const productAuto = new ProductAuto();
      productAuto.setType(ProductType.REFINANCING_AUTO);
      productAuto.setValue(30000);
      productAuto.setVehicleBrand('Fiat');
      productAuto.setVehicleFipeValue(20);
      productAuto.setVehicleModel('Uno');
      productAuto.setVehicleModelYear('2022');
      productAuto.setCodeFipe('038003-2');
      productAuto.setInstallments(12);

      const productHome = new ProductHome();
      productHome.setType(ProductType.REFINANCING_HOME);
      productHome.setValue(4555);
      productHome.setInstallments(5);
      productHome.setRealEstateType(RealEstateType.house);
      productHome.setRealEstateValue(6);
      productHome.setOutstandingBalance(88);

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

  const pipeline = instance?.signUpMatch(signupMatch);
  pipeline?.then((data) => {
    console.log(data);
  });
};

signUp();
