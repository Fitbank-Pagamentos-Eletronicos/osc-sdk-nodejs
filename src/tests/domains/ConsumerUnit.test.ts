import { ConsumerUnit } from '../../domains';

test('ConsumerUnit Serialize + Deserialize', () => {
  const consumerUnit = new ConsumerUnit();

  consumerUnit.setNumber('1914');

  const serialized = JSON.stringify(consumerUnit);
  const deserialized = Object.assign(
    new ConsumerUnit(),
    JSON.parse(serialized)
  );

  expect(consumerUnit.getNumber()).toBe(deserialized.getNumber());
});
