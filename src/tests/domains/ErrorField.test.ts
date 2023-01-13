import { ErrorField } from '../../domains/ErrorField';

test('ErrorField Serialize + Deserialize', () => {
  const error = new ErrorField();
  error.setMessage('Mensagem do ErrorField');
  error.setField('Field do ErrorField');

  const serialized = JSON.stringify(error);
  const deserialized = Object.assign(new ErrorField(), JSON.parse(serialized));

  expect(error.getMessage()).toBe(deserialized.getMessage());
  expect(error.getField()).toBe(deserialized.getField());
});
