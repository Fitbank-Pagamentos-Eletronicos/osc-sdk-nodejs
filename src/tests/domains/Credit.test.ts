import { Credit } from '../../domains';
import {
  ProductType,
  CreditStatus,
  PendentDocuments
} from '../../domains/enums';

test('Credit Serialize + Deserialize', () => {
  const credit = new Credit();

  credit.setCustomerServiceNumber('1914');
  credit.setType(ProductType[ProductType.WORKING_CAPITAL]);
  credit.setProduct('Feijão');
  credit.setProductId(1996);
  credit.setHasDocuments(true);
  credit.setHasContracts(false);
  credit.setLogo('Logo FitBank');
  credit.setLastStatus(CreditStatus[CreditStatus.LIBERADO]);
  credit.setPendentDocuments(PendentDocuments[PendentDocuments.SELF]);
  credit.setDateCreated('2022-11-09');
  credit.setLastUpdated('2022-11-10');

  const serialized = JSON.stringify(credit);
  const deserialized = Object.assign(new Credit(), JSON.parse(serialized));

  expect(credit.getCustomerServiceNumber()).toBe(
    deserialized.getCustomerServiceNumber()
  );
  expect(credit.getType()).toBe(deserialized.getType());
  expect(credit.getProduct()).toBe(deserialized.getProduct());
  expect(credit.getProductId()).toBe(deserialized.getProductId());
  expect(credit.isHasDocuments()).toBe(deserialized.isHasDocuments());
  expect(credit.isHasContracts()).toBe(deserialized.isHasContracts());
  expect(credit.getLogo()).toBe(deserialized.getLogo());
  expect(credit.getLastStatus()).toBe(deserialized.getLastStatus());
  expect(credit.getPendentDocuments()).toBe(deserialized.getPendentDocuments());
  expect(credit.getDateCreated()).toBe(deserialized.getDateCreated());
  expect(credit.getLastUpdated()).toBe(deserialized.getLastUpdated());
});
