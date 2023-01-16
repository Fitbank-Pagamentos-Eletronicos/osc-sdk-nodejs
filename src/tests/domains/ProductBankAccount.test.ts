import { ProductBankAccount } from '../../domains/';
import { ProductType } from '../../domains/enums';

test('ProductBankAccount Serialize + Deserialize', () => {
  const productBankAccount = new ProductBankAccount();
  productBankAccount.setType(ProductType[ProductType.CARD]);

  const serialized = JSON.stringify(productBankAccount);
  const deserialized = Object.assign(
    new ProductBankAccount(),
    JSON.parse(serialized)
  );

  expect(productBankAccount.getType()).toBe(deserialized.getType());
});
