import { ResponseTransfer } from '../../domains/';
import { Banks, AccountType } from '../../domains/enums';

test('ResponseTransfer Serialize + Deserialize', () => {
  const responseTransfer = new ResponseTransfer();

  responseTransfer.setId('id');
  responseTransfer.setCcbNumber('ssasa56485s');
  responseTransfer.setValue(2222);
  responseTransfer.setBankAccount('12345');
  responseTransfer.setBankAccountDigit('2');
  responseTransfer.setBankBranch('3456');
  responseTransfer.setBank(Banks.B450);
  responseTransfer.setAccountType(
    AccountType[AccountType.CONTA_CORRENTE_INDIVIDUAL]
  );
  responseTransfer.setDocument('Document');
  responseTransfer.setStatus('online');
  responseTransfer.setCreditId(122323232);

  const serialized = JSON.stringify(responseTransfer);
  const deserialized = Object.assign(
    new ResponseTransfer(),
    JSON.parse(serialized)
  );

  expect(responseTransfer.getId()).toEqual(deserialized.getId());
  expect(responseTransfer.getValue()).toEqual(deserialized.getValue());
  expect(responseTransfer.getCcbNumber()).toEqual(deserialized.getCcbNumber());
  expect(responseTransfer.getBankAccount()).toEqual(
    deserialized.getBankAccount()
  );
  expect(responseTransfer.getBankAccountDigit()).toEqual(
    deserialized.getBankAccountDigit()
  );
  expect(responseTransfer.getBankBranch()).toEqual(
    deserialized.getBankBranch()
  );
  expect(responseTransfer.getBank()).toEqual(deserialized.getBank());
  expect(responseTransfer.getAccountType()).toEqual(
    deserialized.getAccountType()
  );
  expect(responseTransfer.getDocument()).toEqual(deserialized.getDocument());
  expect(responseTransfer.getStatus()).toEqual(deserialized.getStatus());
  expect(responseTransfer.getCreditId()).toEqual(deserialized.getCreditId());
});
