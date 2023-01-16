import { MatchAuto } from '../../domains/MatchAuto';

test('MatchAuto Serialize + Deserialize', () => {
  const matchAuto = new MatchAuto();

  matchAuto.setProductId(2020);
  matchAuto.setName('Ana Feijão');
  matchAuto.setLogo('Logo Banco Zap');
  matchAuto.setMinValue(1500);
  matchAuto.setMaxValue(2500);
  matchAuto.setMinInstallment(10);
  matchAuto.setMaxInstallment(20);
  matchAuto.setMonthlyTax(8);

  const serialized = JSON.stringify(matchAuto);
  const deserialized = Object.assign(new MatchAuto(), JSON.parse(serialized));

  expect(matchAuto.getProductId()).toBe(deserialized.getProductId());
  expect(matchAuto.getName()).toBe(deserialized.getName());
  expect(matchAuto.getLogo()).toBe(deserialized.getLogo());
  expect(matchAuto.getMinValue()).toBe(deserialized.getMinValue());
  expect(matchAuto.getMaxValue()).toBe(deserialized.getMaxValue());
  expect(matchAuto.getMinInstallment()).toBe(deserialized.getMinInstallment());
  expect(matchAuto.getMaxInstallment()).toBe(deserialized.getMaxInstallment());
  expect(matchAuto.getMonthlyTax()).toBe(deserialized.getMonthlyTax());
});
