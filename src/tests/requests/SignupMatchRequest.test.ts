import { SignupMatchRequest } from '../../requests/SignupMatchRequest';
import { SignupMatch } from '../../domains/SignupMatch';
import { ProductAuto } from '../../domains/ProductAuto';
import { ProductLoan } from '../../domains/ProductLoan';
import { ProductCard } from '../../domains/ProductCard';
import { ProductHome } from '../../domains/ProductHome';
import { LogData } from '../../domains/LogData';
import {
  Banks,
  Education,
  Network,
  Occupation,
  ProductType,
  RealEstateType,
  Scopes
} from '../../domains/enums';
import { Auth } from '../../domains/Auth';
import { Pipeline } from '../../domains/Pipeline';
import moment from 'moment';

test('the data is equal to SignUp', async () => {
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

  const auth = new Auth();
  auth.setClient_id('4dbe3aa7-8ce9-43a4-9298-73b700e712bb');
  auth.setClient_secret(
    '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8'
  );
  auth.setScopes(Scopes.api_external);

  const pipeline = new Pipeline();
  pipeline.setId('id');
  pipeline.setName('John Doe');
  pipeline.setStatus('SIGNUP_ANALISIS');
  pipeline.setCpf(60343933373);
  pipeline.setDateCreated(moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'));
  pipeline.setLastUpdated(moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'));

  return SignupMatchRequest(signupMatch, auth).then(async (data) => {
    await expect(JSON.parse(await data)).toMatchObject({
      id: expect.any(String),
      cpf: pipeline.getCpf(),
      name: pipeline.getName(),
      status: pipeline.getStatus(),
      dateCreated: expect.any(String),
      lastUpdated: expect.any(String)
    });
  });
});
