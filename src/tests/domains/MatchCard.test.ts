import { MatchCard } from '../../domains/MatchCard';
import { Network } from '../../domains/enums';

test('MatchCard Serialize + Deserialize', () => {
  const matchCard = new MatchCard();

  matchCard.setProductId(2020);
  matchCard.setName('Ana Feijão');
  matchCard.setLogo('Logo Banco Zap');
  matchCard.setAnnuity(2026);
  matchCard.setNetwork(Network[Network.MASTERCARD]);

  const serialized = JSON.stringify(matchCard);
  const deserialized = Object.assign(new MatchCard(), JSON.parse(serialized));

  expect(matchCard.getProductId()).toBe(deserialized.getProductId());
  expect(matchCard.getName()).toBe(deserialized.getName());
  expect(matchCard.getLogo()).toBe(deserialized.getLogo());
  expect(matchCard.getAnnuity()).toBe(deserialized.getAnnuity());
  expect(matchCard.getNetwork()).toBe(deserialized.getNetwork());
});
