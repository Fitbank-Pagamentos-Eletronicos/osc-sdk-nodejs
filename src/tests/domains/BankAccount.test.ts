import { BankAccount } from '../../domains/BankAccount';
import { CreditStatus } from '../../domains/enums';

test('BankAccount Serialize + Deserialize', () => {
  const bankAccount = new BankAccount();

  bankAccount.setCustomerServiceNumber('1910');
  bankAccount.setProduct('Arroz');
  bankAccount.setProductId('1996');
  bankAccount.setHasDocuments(false);
  bankAccount.setHasContracts(true);
  bankAccount.setLastStatus(CreditStatus[CreditStatus.AGUARDANDO_DOCUMENTOS]);
  bankAccount.setDateCreated('2022-11-09');
  bankAccount.setLastUpdated('2022-11-10');

  const serialized = JSON.stringify(bankAccount);
  const deserialized = Object.assign(new BankAccount(), JSON.parse(serialized));

  expect(bankAccount.getCustomerServiceNumber()).toBe(
    deserialized.getCustomerServiceNumber()
  );
  expect(bankAccount.getProduct()).toBe(deserialized.getProduct());
  expect(bankAccount.getProductId()).toBe(deserialized.getProductId());
  expect(bankAccount.isHasDocuments()).toBe(deserialized.isHasDocuments());
  expect(bankAccount.isHasContracts()).toBe(deserialized.isHasContracts());
  expect(bankAccount.getLastStatus()).toBe(deserialized.getLastStatus());
  expect(bankAccount.getDateCreated()).toBe(deserialized.getDateCreated());
  expect(bankAccount.getLastUpdated()).toBe(deserialized.getLastUpdated());
});
