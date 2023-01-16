import { Reference } from '../../domains/';

test('Reference Serialize + Deserialize', () => {
  const reference = new Reference();

  reference.setName('João');
  reference.setPhone('85985456789');

  const serialized = JSON.stringify(reference);
  const deserialized = Object.assign(new Reference(), JSON.parse(serialized));

  expect(reference.getName()).toBe(deserialized.getName());
  expect(reference.getPhone()).toBe(deserialized.getPhone());
});
