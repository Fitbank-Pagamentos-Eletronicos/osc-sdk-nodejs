import { Error } from '../../domains/';

test('Error Serialize + Deserialize', () => {
  const error = new Error();
  error.setCode('404 xiiii');
  error.setMessage('Pane no sistema');

  const serialized = JSON.stringify(error);
  const deserialized = Object.assign(new Error(), JSON.parse(serialized));

  expect(error.getCode()).toBe(deserialized.getCode());
  expect(error.getMessage()).toBe(deserialized.getMessage());
});
