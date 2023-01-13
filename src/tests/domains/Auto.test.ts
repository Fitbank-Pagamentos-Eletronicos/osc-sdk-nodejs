import { Auto } from '../../domains/Auto';
import {
  ProductType,
  CreditStatus,
  PendentDocuments
} from '../../domains/enums';

test('Auto Serialize + Deserialize', () => {
  const auto = new Auto();

  auto.setCustomerServiceNumber('1914');
  auto.setType(ProductType[ProductType.WORKING_CAPITAL]);
  auto.setProduct('Feijão');
  auto.setProductId('1996');
  auto.setHasDocuments(true);
  auto.setHasContracts(false);
  auto.setLogo('Logo FitBank');
  auto.setLastStatus(CreditStatus[CreditStatus.LIBERADO]);
  auto.setPendentDocuments(PendentDocuments[PendentDocuments.SELF]);
  auto.setDateCreated('2022-11-09');
  auto.setLastUpdated('2022-11-10');
  auto.setValue(2000);
  auto.setInstallments(12);
  auto.setMonthlyTax(2);
  auto.setInstallments(200);
  auto.setIofValue(100);
  auto.setGrossValue(1500);
  auto.setFirstPaymentDate('2022-12-07');
  auto.setCet(2500);
  auto.setReleasedDate('2022-11-15');

  const serialized = JSON.stringify(auto);
  const deserialized = Object.assign(new Auto(), JSON.parse(serialized));

  expect(auto.getCustomerServiceNumber()).toBe(
    deserialized.getCustomerServiceNumber()
  );
  expect(auto.getType()).toBe(deserialized.getType());
  expect(auto.getProduct()).toBe(deserialized.getProduct());
  expect(auto.getProductId()).toBe(deserialized.getProductId());
  expect(auto.isHasDocuments()).toBe(deserialized.isHasDocuments());
  expect(auto.isHasContracts()).toBe(deserialized.isHasContracts());
  expect(auto.getLogo()).toBe(deserialized.getLogo());
  expect(auto.getLastStatus()).toBe(deserialized.getLastStatus());
  expect(auto.getPendentDocuments()).toBe(deserialized.getPendentDocuments());
  expect(auto.getDateCreated()).toBe(deserialized.getDateCreated());
  expect(auto.getLastUpdated()).toBe(deserialized.getLastUpdated());
  expect(auto.getValue()).toBe(deserialized.getValue());
  expect(auto.getInstallments()).toBe(deserialized.getInstallments());
  expect(auto.getMonthlyTax()).toBe(deserialized.getMonthlyTax());
  expect(auto.getIofValue()).toBe(deserialized.getIofValue());
  expect(auto.getGrossValue()).toBe(deserialized.getGrossValue());
  expect(auto.getFirstPaymentDate()).toBe(deserialized.getFirstPaymentDate());
  expect(auto.getCet()).toBe(deserialized.getCet());
  expect(auto.getReleasedDate()).toBe(deserialized.getReleasedDate());
});
