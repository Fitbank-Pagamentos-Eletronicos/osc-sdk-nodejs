import { ProductLoan } from '../../domains/ProductLoan';
import { ProductType } from '../../domains/enums';

test('ProductLoan Serialize + Deserialize', () => {
  const productLoan = new ProductLoan();

  productLoan.setType(ProductType[ProductType.LOAN]);
  productLoan.setValue(2022);
  productLoan.setInstallments(1);

  const serialized = JSON.stringify(productLoan);
  const deserialized = Object.assign(new ProductLoan(), JSON.parse(serialized));

  expect(productLoan.getType()).toBe(deserialized.getType());
  expect(productLoan.getValue()).toBe(deserialized.getValue());
  expect(productLoan.getInstallments()).toBe(deserialized.getInstallments());
});
