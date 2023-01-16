import { Bank } from '../../domains/';
import { Banks, AccountType } from '../../domains/enums';

test('Bank Serialize + Deserialize', () => {
  const bank = new Bank();

  bank.setBank(Banks.B450);
  bank.setType(AccountType[AccountType.CONTA_CORRENTE_INDIVIDUAL]);
  bank.setAgency('2093');
  bank.setAccount('1018548-8');

  const serialized = JSON.stringify(bank);
  const deserialized = Object.assign(new Bank(), JSON.parse(serialized));

  expect(bank.getBank()).toEqual(deserialized.getBank());
  expect(bank.getType()).toBe(deserialized.getType());
  expect(bank.getAgency()).toBe(deserialized.getAgency());
  expect(bank.getAccount()).toBe(deserialized.getAccount());
});
