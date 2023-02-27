import { Card } from '../../domains/Card';
import {
  ProductType,
  CreditStatus,
  PendentDocuments,
  Network
} from '../../domains/enums';

test('Card Serialize + Deserialize', () => {
  const card = new Card();

  card.setCustomerServiceNumber('1910');
  card.setType(ProductType[ProductType.LOAN]);
  card.setProduct('Arroz');
  card.setProductId('1996');
  card.setHasDocuments(false);
  card.setHasContracts(true);
  card.setLogo('Logo');
  card.setLastStatus(CreditStatus[CreditStatus.CONTRATADO]);
  card.setPendentDocuments(PendentDocuments[PendentDocuments.ADDRESS_PROOF]);
  card.setDateCreated('2022-11-09');
  card.setLastUpdated('2022-11-10');
  card.setInternational(true);
  card.setAnnuity(120);
  card.setNetwork(Network[Network.MASTERCARD]);
  card.setPrepaid(true);
  card.setDigitalAccount(false);

  const serialized = JSON.stringify(card);
  const deserialized = Object.assign(new Card(), JSON.parse(serialized));

  expect(card.getCustomerServiceNumber()).toBe(
    deserialized.getCustomerServiceNumber()
  );
  expect(card.getType()).toBe(deserialized.getType());
  expect(card.getProduct()).toBe(deserialized.getProduct());
  expect(card.getProductId()).toBe(deserialized.getProductId());
  expect(card.isHasDocuments()).toBe(deserialized.isHasDocuments());
  expect(card.isHasContracts()).toBe(deserialized.isHasContracts());
  expect(card.getLogo()).toBe(deserialized.getLogo());
  expect(card.getLastStatus()).toBe(deserialized.getLastStatus());
  expect(card.getPendentDocuments()).toBe(deserialized.getPendentDocuments());
  expect(card.getDateCreated()).toBe(deserialized.getDateCreated());
  expect(card.getLastUpdated()).toBe(deserialized.getLastUpdated());
  expect(card.isInternational()).toBe(deserialized.isInternational());
  expect(card.getAnnuity()).toBe(deserialized.getAnnuity());
  expect(card.getNetwork()).toBe(deserialized.getNetwork());
  expect(card.isPrepaid()).toBe(deserialized.isPrepaid());
  expect(card.isDigitalAccount()).toBe(deserialized.isDigitalAccount());
});
