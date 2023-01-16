import { ResponseConsultBankValues } from '../../domains/';
import { Banks } from '../../domains/enums';

test('ResponseConsultBankValues Serialize + Deserialize', () => {
  const responseConsultBankValues = new ResponseConsultBankValues();

  responseConsultBankValues.setDocument('Document');
  responseConsultBankValues.setBankAccount('12345');
  responseConsultBankValues.setBankAccountDigit('2');
  responseConsultBankValues.setBankBranch('3456');
  responseConsultBankValues.setBank(Banks.B450);
  responseConsultBankValues.setStartDate('2023-01-01');
  responseConsultBankValues.setEndDate('2023-01-03');
  responseConsultBankValues.setType('type');

  const serialized = JSON.stringify(responseConsultBankValues);
  const deserialized = Object.assign(
    new ResponseConsultBankValues(),
    JSON.parse(serialized)
  );

  expect(responseConsultBankValues.getDocument()).toEqual(
    deserialized.getDocument()
  );
  expect(responseConsultBankValues.getBankAccount()).toEqual(
    deserialized.getBankAccount()
  );
  expect(responseConsultBankValues.getBankAccountDigit()).toEqual(
    deserialized.getBankAccountDigit()
  );
  expect(responseConsultBankValues.getBankBranch()).toEqual(
    deserialized.getBankBranch()
  );
  expect(responseConsultBankValues.getBank()).toEqual(deserialized.getBank());
  expect(responseConsultBankValues.getStartDate()).toEqual(
    deserialized.getStartDate()
  );
  expect(responseConsultBankValues.getEndDate()).toEqual(
    deserialized.getEndDate()
  );
  expect(responseConsultBankValues.getType()).toEqual(deserialized.getType());
});
