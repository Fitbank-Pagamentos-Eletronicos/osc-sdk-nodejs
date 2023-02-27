import { ErrorField, ErrorFields } from '../../domains/';

test('ErrorFields Serialize + Deserialize', () => {
  const errorFields = new ErrorFields();
  errorFields.setCode('Código do ErrorFields');
  errorFields.setMessage('Msg do ErrorFields');

  errorFields.setErrors(
    (() => {
      let errorsField = new ErrorField();
      errorsField.setMessage('Mensagem do ErrorField');
      errorsField.setField('Field do ErrorField');
      return [errorsField];
    })()
  );

  const serialized = JSON.stringify(errorFields);
  const deserialized = Object.assign(new ErrorFields(), JSON.parse(serialized));

  expect(errorFields.getCode()).toBe(deserialized.getCode());
  expect(errorFields.getMessage()).toBe(deserialized.getMessage());
  expect(errorFields.getErrors()).toEqual(deserialized.getErrors());
});
