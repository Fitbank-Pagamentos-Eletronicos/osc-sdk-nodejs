import { Loan } from '../../domains/Loan';
import { ProductType, PendentDocuments } from '../../domains/enums';

test('Loan Serialize + Deserialize', () => {
  const loan = new Loan();

  loan.setCustomerServiceNumber('1914');
  loan.setType(ProductType[ProductType.CARD]);
  loan.setProduct('Feijão');
  loan.setProductId('1996');
  loan.setHasDocuments(true);
  loan.setHasContracts(false);
  loan.setLogo('Logo FitBank');
  loan.setPendentDocuments(PendentDocuments[PendentDocuments.IDENTITY_BACK]);
  loan.setDateCreated('2022-10-22T14:10:20.123Z');
  loan.setLastUpdated('2022-10-23T14:10:20.123Z');
  loan.setValue(2000);
  loan.setInstallments(12);
  loan.setMonthlyTax(2);
  loan.setIofValue(100);
  loan.setGrossValue(1500);
  loan.setFirstPaymentDate('2022-11-22T14:10:20.123Z');
  loan.setCet(2500);
  loan.setReleasedDate('2022-10-25T14:10:20.123Z');

  const serialized = JSON.stringify(loan);
  const deserialized = Object.assign(new Loan(), JSON.parse(serialized));

  expect(loan.getCustomerServiceNumber()).toBe(
    deserialized.getCustomerServiceNumber()
  );
  expect(loan.getType()).toBe(deserialized.getType());
  expect(loan.getProduct()).toBe(deserialized.getProduct());
  expect(loan.getProductId()).toBe(deserialized.getProductId());
  expect(loan.isHasDocuments()).toBe(deserialized.isHasDocuments());
  expect(loan.isHasContracts()).toBe(deserialized.isHasContracts());
  expect(loan.getLogo()).toBe(deserialized.getLogo());
  expect(loan.getLastStatus()).toBe(deserialized.getLastStatus());
  expect(loan.getPendentDocuments()).toBe(deserialized.getPendentDocuments());
  expect(loan.getDateCreated()).toBe(deserialized.getDateCreated());
  expect(loan.getLastUpdated()).toBe(deserialized.getLastUpdated());
  expect(loan.getValue()).toBe(deserialized.getValue());
  expect(loan.getInstallments()).toBe(deserialized.getInstallments());
  expect(loan.getMonthlyTax()).toBe(deserialized.getMonthlyTax());
  expect(loan.getIofValue()).toBe(deserialized.getIofValue());
  expect(loan.getGrossValue()).toBe(deserialized.getGrossValue());
  expect(loan.getFirstPaymentDate()).toBe(deserialized.getFirstPaymentDate());
  expect(loan.getCet()).toBe(deserialized.getCet());
  expect(loan.getReleasedDate()).toBe(deserialized.getReleasedDate());
});
