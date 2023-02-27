import { LogData } from '../../domains';

test('LogData Serialize + Deserialize', () => {
  const logData = new LogData();

  logData.setLatitude(38.895);
  logData.setLongitude(-77.0364);
  logData.setOccurrenceDate('2022-10-22T14:10:20.123Z');
  logData.setUserAgent('Test Agent');
  logData.setIp('192.158.1.38');
  logData.setMac('00:00:5e:00:53:af');

  const serialized = JSON.stringify(logData);
  const deserialized = Object.assign(new LogData(), JSON.parse(serialized));

  expect(logData.getLatitude()).toBe(deserialized.getLatitude());
  expect(logData.getLongitude()).toBe(deserialized.getLongitude());
  expect(logData.getOccurrenceDate()).toBe(deserialized.getOccurrenceDate());
  expect(logData.getUserAgent()).toBe(deserialized.getUserAgent());
  expect(logData.getIp()).toBe(deserialized.getIp());
  expect(logData.getMac()).toBe(deserialized.getMac());
});
