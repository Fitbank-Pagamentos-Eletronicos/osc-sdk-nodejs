import { Proposals } from '../../domains/';
import {
  ProductType,
  CreditStatus,
  PendentDocuments
} from '../../domains/enums';

test('proposals Serialize + Deserialize', () => {
  const proposals = new Proposals();

  proposals.setCustomerServiceNumber('1914');
  proposals.setType(ProductType[ProductType.WORKING_CAPITAL]);
  proposals.setProduct('Feijão');
  proposals.setProductId('1996');
  proposals.setHasDocuments(true);
  proposals.setHasContracts(false);
  proposals.setLogo('Logo FitBank');
  proposals.setLastStatus(CreditStatus[CreditStatus.LIBERADO]);
  proposals.setPendentDocuments(PendentDocuments[PendentDocuments.SELF]);
  proposals.setDateCreated('2022-11-09');
  proposals.setLastUpdated('2022-11-10');

  const serialized = JSON.stringify(proposals);
  const deserialized = Object.assign(new Proposals(), JSON.parse(serialized));

  expect(proposals.getCustomerServiceNumber()).toBe(
    deserialized.getCustomerServiceNumber()
  );
  expect(proposals.getType()).toBe(deserialized.getType());
  expect(proposals.getProduct()).toBe(deserialized.getProduct());
  expect(proposals.getProductId()).toBe(deserialized.getProductId());
  expect(proposals.isHasDocuments()).toBe(deserialized.isHasDocuments());
  expect(proposals.isHasContracts()).toBe(deserialized.isHasContracts());
  expect(proposals.getLogo()).toBe(deserialized.getLogo());
  expect(proposals.getLastStatus()).toBe(deserialized.getLastStatus());
  expect(proposals.getPendentDocuments()).toBe(
    deserialized.getPendentDocuments()
  );
  expect(proposals.getDateCreated()).toBe(deserialized.getDateCreated());
  expect(proposals.getLastUpdated()).toBe(deserialized.getLastUpdated());
});
