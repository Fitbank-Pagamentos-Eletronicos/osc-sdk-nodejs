import { LogData, SimpleSignUp } from '../../domains';

test('SimpleSignUp Serialize + Deserialize', () => {
  const simpleSignUp = new SimpleSignUp();

  simpleSignUp.setCpf('60343933373');
  simpleSignUp.setName('Teste');
  simpleSignUp.setBirthday('1990-11-08');
  simpleSignUp.setEmail('email@gmail.com');
  simpleSignUp.setPhone('85912345678');
  simpleSignUp.setZipCode('60177240');
  simpleSignUp.setHasCreditCard(true);
  simpleSignUp.setHasRestriction(false);
  simpleSignUp.setHasOwnHouse(true);
  simpleSignUp.setHasVehicle(false);
  simpleSignUp.setHasAndroid(true);

  simpleSignUp.setLogData(
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

  const serialized = JSON.stringify(simpleSignUp);
  const deserialized = Object.assign(
    new SimpleSignUp(),
    JSON.parse(serialized)
  );

  expect(simpleSignUp.getCpf()).toBe(deserialized.getCpf());
  expect(simpleSignUp.getName()).toBe(deserialized.getName());
  expect(simpleSignUp.getBirthday()).toBe(deserialized.getBirthday());
  expect(simpleSignUp.getEmail()).toBe(deserialized.getEmail());
  expect(simpleSignUp.getPhone()).toBe(deserialized.getPhone());
  expect(simpleSignUp.getZipCode()).toBe(deserialized.getZipCode());
  expect(simpleSignUp.isHasCreditCard()).toBe(deserialized.isHasCreditCard());
  expect(simpleSignUp.isHasRestriction()).toBe(deserialized.isHasRestriction());
  expect(simpleSignUp.isHasOwnHouse()).toBe(deserialized.isHasOwnHouse());
  expect(simpleSignUp.isHasVehicle()).toBe(deserialized.isHasVehicle());
  expect(simpleSignUp.isHasAndroid()).toBe(deserialized.isHasAndroid());
  expect(simpleSignUp.getLogData()).toEqual(deserialized.getLogData());
});
