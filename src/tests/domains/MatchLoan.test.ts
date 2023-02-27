import { MatchLoan } from '../../domains/MatchLoan';

test('MatchLoan Serialize + Deserialize', () => {
  const matchLoan = new MatchLoan();

  matchLoan.setProductId(2020);
  matchLoan.setName('Ana Feijão');
  matchLoan.setLogo('Logo Banco Zap');
  matchLoan.setMinValue(1500);
  matchLoan.setMaxValue(2500);
  matchLoan.setMinInstallment(10);
  matchLoan.setMaxInstallment(20);
  matchLoan.setMonthlyTax(8);

  const serialized = JSON.stringify(matchLoan);
  const deserialized = Object.assign(new MatchLoan(), JSON.parse(serialized));

  expect(matchLoan.getProductId()).toBe(deserialized.getProductId());
  expect(matchLoan.getName()).toBe(deserialized.getName());
  expect(matchLoan.getLogo()).toBe(deserialized.getLogo());
  expect(matchLoan.getMinValue()).toBe(deserialized.getMinValue());
  expect(matchLoan.getMaxValue()).toBe(deserialized.getMaxValue());
  expect(matchLoan.getMinInstallment()).toBe(deserialized.getMinInstallment());
  expect(matchLoan.getMaxInstallment()).toBe(deserialized.getMaxInstallment());
  expect(matchLoan.getMonthlyTax()).toBe(deserialized.getMonthlyTax());
});
