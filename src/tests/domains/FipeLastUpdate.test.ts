import { FipeLastUpdate } from '../../domains';

test('FipeLastUpdate  Serialize + Deserialize', () => {
  const fipeLastUpdate = new FipeLastUpdate();

  fipeLastUpdate.setLastUpdate('2022-10-22T14:10:20.123Z');

  const serialized = JSON.stringify(fipeLastUpdate);
  const deserialized = Object.assign(
    new FipeLastUpdate(),
    JSON.parse(serialized)
  );

  expect(fipeLastUpdate.getLastUpdate()).toBe(deserialized.getLastUpdate());
});
