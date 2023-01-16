import { IdentifySimpleBody } from '../../domains';
import { IdentityType } from '../../domains/enums';

test('IdentifySimpleBody Serialize + Deserialize', () => {
  const identifySimpleBody = new IdentifySimpleBody();

  identifySimpleBody.setType(IdentityType[IdentityType.CARTEIRA_OAB]);
  identifySimpleBody.setNumber('2023');

  const serialized = JSON.stringify(identifySimpleBody);
  const deserialized = Object.assign(
    new IdentifySimpleBody(),
    JSON.parse(serialized)
  );

  expect(identifySimpleBody.getType()).toBe(deserialized.getType());
  expect(identifySimpleBody.getNumber()).toBe(deserialized.getNumber());
});
