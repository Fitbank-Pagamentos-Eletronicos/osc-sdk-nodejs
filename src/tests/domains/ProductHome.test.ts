import { ProductHome } from '../../domains/ProductHome';
import { ProductType, RealEstateType } from '../../domains/enums';

test('ProductHome Serialize + Deserialize', () => {
  const productHome = new ProductHome();

  productHome.setType(ProductType[ProductType.REFINANCING_HOME]);
  productHome.setValue(4555);
  productHome.setInstallments(5);
  productHome.setRealEstateType(RealEstateType[RealEstateType.apartment]);
  productHome.setRealEstateValue(6);
  productHome.setOutstandingBalance(88);

  const serialized = JSON.stringify(productHome);
  const deserialized = Object.assign(new ProductHome(), JSON.parse(serialized));

  expect(productHome.getType()).toBe(deserialized.getType());
  expect(productHome.getValue()).toBe(deserialized.getValue());
  expect(productHome.getInstallments()).toBe(deserialized.getInstallments());
  expect(productHome.getRealEstateType()).toBe(
    deserialized.getRealEstateType()
  );
  expect(productHome.getRealEstateType()).toBe(
    deserialized.getRealEstateType()
  );
  expect(productHome.getOutstandingBalance()).toBe(
    deserialized.getOutstandingBalance()
  );
});
