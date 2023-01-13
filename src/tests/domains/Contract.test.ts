import { Contract, LogData, AcceptedCheckSumBody } from '../../domains/';

test('Contract Serialize + Deserialize', () => {
  const contract = new Contract();

  contract.setAcceptedCheckSum(
    (() => {
      const acceptedCheckSumBody = new AcceptedCheckSumBody();
      acceptedCheckSumBody.setAcceptedCheckSum('ok');
      return [acceptedCheckSumBody];
    })()
  );

  contract.setLogData(
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

  const serialized = JSON.stringify(contract);
  const deserialized = Object.assign(new Contract(), JSON.parse(serialized));

  expect(contract.getAcceptedCheckSum()).toEqual(
    deserialized.getAcceptedCheckSum()
  );
  expect(contract.getLogData()).toEqual(deserialized.getLogData());
});
