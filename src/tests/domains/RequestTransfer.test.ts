import { RequestTransfer } from '../../domains/';
import { Banks, AccountType } from '../../domains/enums';

test('RequestTransfer Serialize + Deserialize', () => {
  const requestTransfer = new RequestTransfer();

  requestTransfer.setValue(2222);
  requestTransfer.setCcb('ssasas');
  requestTransfer.setBankAccount('12345');
  requestTransfer.setBankAccountDigit('2');
  requestTransfer.setBankBranch('3456');
  requestTransfer.setBank(Banks.B450);
  requestTransfer.setAccountType(
    AccountType[AccountType.CONTA_CORRENTE_INDIVIDUAL]
  );
  requestTransfer.setDocument('Document');

  const serialized = JSON.stringify(requestTransfer);
  const deserialized = Object.assign(
    new RequestTransfer(),
    JSON.parse(serialized)
  );

  expect(requestTransfer.getValue()).toEqual(deserialized.getValue());
  expect(requestTransfer.getCcb()).toEqual(deserialized.getCcb());
  expect(requestTransfer.getBankAccount()).toEqual(
    deserialized.getBankAccount()
  );
  expect(requestTransfer.getBankAccountDigit()).toEqual(
    deserialized.getBankAccountDigit()
  );
  expect(requestTransfer.getBankBranch()).toEqual(deserialized.getBankBranch());
  expect(requestTransfer.getBank()).toEqual(deserialized.getBank());
  expect(requestTransfer.getAccountType()).toEqual(
    deserialized.getAccountType()
  );
  expect(requestTransfer.getDocument()).toEqual(deserialized.getDocument());
});
