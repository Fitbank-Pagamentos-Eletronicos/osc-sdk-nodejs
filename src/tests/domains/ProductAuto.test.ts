import { ProductAuto } from '../../domains/ProductAuto';
import { ProductType } from '../../domains/enums';

test('ProductAuto Serialize + Deserialize', () => {
  const productAuto = new ProductAuto();

  productAuto.setType(ProductType[ProductType.CARD]);
  productAuto.setValue(20000);
  productAuto.setVehicleBrand('Fiat');
  productAuto.setVehicleModel('Uno');
  productAuto.setInstallments(2);
  productAuto.setVehicleModelYear('2022');
  productAuto.setCodeFipe('2023');
  productAuto.setVehicleFipeValue(20);

  const serialized = JSON.stringify(productAuto);
  const deserialized = Object.assign(new ProductAuto(), JSON.parse(serialized));

  expect(productAuto.getType()).toBe(deserialized.getType());
  expect(productAuto.getValue()).toBe(deserialized.getValue());
  expect(productAuto.getVehicleBrand()).toBe(deserialized.getVehicleBrand());
  expect(productAuto.getVehicleModel()).toBe(deserialized.getVehicleModel());
  expect(productAuto.getInstallments()).toBe(deserialized.getInstallments());
  expect(productAuto.getVehicleModelYear()).toBe(
    deserialized.getVehicleModelYear()
  );
  expect(productAuto.getCodeFipe()).toBe(deserialized.getCodeFipe());
  expect(productAuto.getVehicleFipeValue()).toBe(
    deserialized.getVehicleFipeValue()
  );
});
