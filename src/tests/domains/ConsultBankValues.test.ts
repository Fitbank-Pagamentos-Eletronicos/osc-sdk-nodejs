import { ConsultBankValues } from '../../domains/';
import { Banks, AccountType } from '../../domains/enums';

test('ConsultBankValues Serialize + Deserialize', () => {
  const consultBankValues = new ConsultBankValues();

  consultBankValues.setDocument('55265256');
  consultBankValues.setBankAccount('12345');
  consultBankValues.setBankAccountDigit('2');
  consultBankValues.setBankBranch('3456');
  consultBankValues.setBank(Banks.B450);
  consultBankValues.setStartDate('2022-10-22T14:10:20.123Z');
  consultBankValues.setEndDate('2023-10-22T14:10:20.123Z');
  consultBankValues.setType('type');

  const serialized = JSON.stringify(consultBankValues);
  const deserialized = Object.assign(
    new ConsultBankValues(),
    JSON.parse(serialized)
  );

  expect(consultBankValues.getDocument()).toEqual(deserialized.getDocument());
  expect(consultBankValues.getBankAccount()).toEqual(
    deserialized.getBankAccount()
  );
  expect(consultBankValues.getBankAccountDigit()).toEqual(
    deserialized.getBankAccountDigit()
  );
  expect(consultBankValues.getBankBranch()).toEqual(
    deserialized.getBankBranch()
  );
  expect(consultBankValues.getBank()).toEqual(deserialized.getBank());
  expect(consultBankValues.getStartDate()).toBe(deserialized.getStartDate());
  expect(consultBankValues.getEndDate()).toBe(deserialized.getEndDate());
  expect(consultBankValues.getType()).toBe(deserialized.getType());
});
