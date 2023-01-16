import { Matches } from '../../domains';

test('Matches Serialize + Deserialize', () => {
  const matches = new Matches();
  matches.setLogo('Logo');
  matches.setName('Name');
  matches.setProductId(2023);

  const serialized = JSON.stringify(matches);
  const deserialized = Object.assign(new Matches(), JSON.parse(serialized));

  expect(matches.getLogo()).toBe(deserialized.getLogo());
  expect(matches.getName()).toBe(deserialized.getName());
  expect(matches.getProductId()).toBe(deserialized.getProductId());
});
