import { SignupMatch, Products, LogData } from '../../domains';
import { Banks, Education, Occupation, ProductType } from '../../domains/enums';

test('SignupMatch Serialize + Deserialize', () => {
  const signupMatch = new SignupMatch();

  signupMatch.setCpf('11111111111');
  signupMatch.setName('Teste');
  signupMatch.setBirthday('1990-11-08');
  signupMatch.setEmail('email@gmail.com');
  signupMatch.setPhone('85987654321');
  signupMatch.setZipCode('60177240');
  signupMatch.setEducation(Education[Education.POS_GRADUACAO]);
  signupMatch.setBanks(Banks.B450);
  signupMatch.setOccupation(Occupation[Occupation.ASSALARIADO]);
  signupMatch.setIncome(2000);
  signupMatch.setHasCreditCard(true);
  signupMatch.setHasRestriction(false);
  signupMatch.setHasOwnHouse(true);
  signupMatch.setHasVehicle(false);
  signupMatch.setHasAndroid(true);

  signupMatch.setProducts(
    (() => {
      const products = new Products();
      products.setType(ProductType[ProductType.CARD]);

      return [products];
    })()
  );

  signupMatch.setLogData(
    (() => {
      const logData = new LogData();

      logData.setIp('192.158.1.38');
      logData.setLatitude(38.895);
      logData.setLongitude(-77.0364);
      logData.setMac('00:00:5e:00:53:af');
      logData.setOccurrenceDate('2022-10-22T14:10:20.123Z');
      logData.setUserAgent('Test Agent');
      return logData;
    })()
  );

  const serialized = JSON.stringify(signupMatch);
  const deserialized = Object.assign(new SignupMatch(), JSON.parse(serialized));

  expect(signupMatch.getCpf()).toBe(deserialized.getCpf());
  expect(signupMatch.getName()).toBe(deserialized.getName());
  expect(signupMatch.getBirthday()).toBe(deserialized.getBirthday());
  expect(signupMatch.getEmail()).toBe(deserialized.getEmail());
  expect(signupMatch.getPhone()).toBe(deserialized.getPhone());
  expect(signupMatch.getZipCode()).toBe(deserialized.getZipCode());
  expect(signupMatch.getEducation()).toBe(deserialized.getEducation());
  expect(signupMatch.getBanks()).toEqual(deserialized.getBanks());
  expect(signupMatch.getOccupation()).toBe(deserialized.getOccupation());
  expect(signupMatch.getIncome()).toBe(deserialized.getIncome());
  expect(signupMatch.isHasCreditCard()).toBe(deserialized.isHasCreditCard());
  expect(signupMatch.isHasRestriction()).toBe(deserialized.isHasRestriction());
  expect(signupMatch.isHasOwnHouse()).toBe(deserialized.isHasOwnHouse());
  expect(signupMatch.isHasVehicle()).toBe(deserialized.isHasVehicle());
  expect(signupMatch.isHasAndroid()).toBe(deserialized.isHasAndroid());
  expect(signupMatch.getProducts()).toEqual(deserialized.getProducts());
  expect(signupMatch.getLogData()).toEqual(deserialized.getLogData());
});
