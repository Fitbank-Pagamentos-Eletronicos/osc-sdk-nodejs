import { Home } from '../../domains/Home';
import {
  ProductType,
  CreditStatus,
  PendentDocuments
} from '../../domains/enums';

test('Home Serialize + Deserialize', () => {
  const home = new Home();

  home.setCustomerServiceNumber('1914');
  home.setType(ProductType[ProductType.WORKING_CAPITAL]);
  home.setProduct('Feijão');
  home.setProductId('1996');
  home.setHasDocuments(true);
  home.setHasContracts(false);
  home.setLogo('Logo FitBank');
  home.setLastStatus(CreditStatus[CreditStatus.LIBERADO]);
  home.setPendentDocuments(PendentDocuments[PendentDocuments.SELF]);
  home.setDateCreated('2022-11-09');
  home.setLastUpdated('2022-11-10');
  home.setValue(2000);
  home.setInstallments(12);
  home.setMonthlyTax(2);
  home.setInstallments(200);
  home.setIofValue(100);
  home.setGrossValue(1500);
  home.setFirstPaymentDate('2022-12-07');
  home.setCet(2500);
  home.setReleasedDate('2022-11-15');

  const serialized = JSON.stringify(home);
  const deserialized = Object.assign(new Home(), JSON.parse(serialized));

  expect(home.getCustomerServiceNumber()).toBe(
    deserialized.getCustomerServiceNumber()
  );
  expect(home.getType()).toBe(deserialized.getType());
  expect(home.getProduct()).toBe(deserialized.getProduct());
  expect(home.getProductId()).toBe(deserialized.getProductId());
  expect(home.isHasDocuments()).toBe(deserialized.isHasDocuments());
  expect(home.isHasContracts()).toBe(deserialized.isHasContracts());
  expect(home.getLogo()).toBe(deserialized.getLogo());
  expect(home.getLastStatus()).toBe(deserialized.getLastStatus());
  expect(home.getPendentDocuments()).toBe(deserialized.getPendentDocuments());
  expect(home.getDateCreated()).toBe(deserialized.getDateCreated());
  expect(home.getLastUpdated()).toBe(deserialized.getLastUpdated());
  expect(home.getValue()).toBe(deserialized.getValue());
  expect(home.getInstallments()).toBe(deserialized.getInstallments());
  expect(home.getMonthlyTax()).toBe(deserialized.getMonthlyTax());
  expect(home.getIofValue()).toBe(deserialized.getIofValue());
  expect(home.getGrossValue()).toBe(deserialized.getGrossValue());
  expect(home.getFirstPaymentDate()).toBe(deserialized.getFirstPaymentDate());
  expect(home.getCet()).toBe(deserialized.getCet());
  expect(home.getReleasedDate()).toBe(deserialized.getReleasedDate());
});
