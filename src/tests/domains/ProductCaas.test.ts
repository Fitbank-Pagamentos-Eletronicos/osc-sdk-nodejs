import { ProductCaas } from '../../domains/ProductCaas';
import { ProductType } from '../../domains/enums';

test('ProductCaas Serialize + Deserialize', () => {
  const productCaas = new ProductCaas();

  productCaas.setType(ProductType[ProductType.CARD]);
  productCaas.setValue(20000);
  productCaas.setReleaseDate('2022-10-22T14:10:20.123Z');
  productCaas.setDueDate('2022-10-23T14:10:20.123Z');
  productCaas.setInstallments(2023);
  productCaas.setMonthly_tax(12);
  productCaas.setCadValue(2015);
  productCaas.setValue(1967);

  const serialized = JSON.stringify(productCaas);
  const deserialized = Object.assign(new ProductCaas(), JSON.parse(serialized));

  expect(productCaas.getType()).toBe(deserialized.getType());
  expect(productCaas.getValue()).toBe(deserialized.getValue());
  expect(productCaas.getReleaseDate()).toBe(deserialized.getReleaseDate());
  expect(productCaas.getDueDate()).toBe(deserialized.getDueDate());
  expect(productCaas.getInstallments()).toBe(deserialized.getInstallments());
  expect(productCaas.getMonthly_tax()).toBe(deserialized.getMonthly_tax());
  expect(productCaas.getCadValue()).toBe(deserialized.getCadValue());
  expect(productCaas.getValue()).toBe(deserialized.getValue());
});
