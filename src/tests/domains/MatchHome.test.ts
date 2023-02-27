import { MatchHome } from '../../domains/MatchHome';

test('MatchHome Serialize + Deserialize', () => {
  const matchHome = new MatchHome();

  matchHome.setProductId(2020);
  matchHome.setName('Ana Feijão');
  matchHome.setLogo('Logo Banco Zap');
  matchHome.setMinValue(1500);
  matchHome.setMaxValue(2500);
  matchHome.setMinInstallment(10);
  matchHome.setMaxInstallment(20);
  matchHome.setMonthlyTax(8);

  const serialized = JSON.stringify(matchHome);
  const deserialized = Object.assign(new MatchHome(), JSON.parse(serialized));

  expect(matchHome.getProductId()).toBe(deserialized.getProductId());
  expect(matchHome.getName()).toBe(deserialized.getName());
  expect(matchHome.getLogo()).toBe(deserialized.getLogo());
  expect(matchHome.getMinValue()).toBe(deserialized.getMinValue());
  expect(matchHome.getMaxValue()).toBe(deserialized.getMaxValue());
  expect(matchHome.getMinInstallment()).toBe(deserialized.getMinInstallment());
  expect(matchHome.getMaxInstallment()).toBe(deserialized.getMaxInstallment());
  expect(matchHome.getMonthlyTax()).toBe(deserialized.getMonthlyTax());
});
