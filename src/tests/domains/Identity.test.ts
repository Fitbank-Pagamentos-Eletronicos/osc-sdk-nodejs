import { Identity } from '../../domains/';
import { State, IdentityType, IdentityIssuer } from '../../domains/enums';

test('Identity Serialize + Deserialize', () => {
  const identity = new Identity();

  identity.setType(IdentityType[IdentityType.CARTEIRA_OAB]);
  identity.setNumber('400946750');
  identity.setIssuer(IdentityIssuer[IdentityIssuer.CREA]);
  identity.setState(State.CE);
  identity.setIssuingDate('2009-08-08');

  const serialized = JSON.stringify(identity);
  const deserialized = Object.assign(new Identity(), JSON.parse(serialized));

  expect(identity.getType()).toBe(deserialized.getType());
  expect(identity.getNumber()).toBe(deserialized.getNumber());
  expect(identity.getIssuer()).toBe(deserialized.getIssuer());
  expect(identity.getState()).toBe(deserialized.getState());
  expect(identity.getIssuingDate()).toBe(deserialized.getIssuingDate());
});
