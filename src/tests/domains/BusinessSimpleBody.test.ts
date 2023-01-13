import { BusinessSimpleBody } from '../../domains/';
import { Occupation } from '../../domains/enums';

test('Business Serialize + Deserialize', () => {
  const businessSimpleBody = new BusinessSimpleBody();

  businessSimpleBody.setOccupation(Occupation[Occupation.AUTONOMO]);

  businessSimpleBody.setIncome('1000');

  const serialized = JSON.stringify(businessSimpleBody);
  const deserialized = Object.assign(
    new BusinessSimpleBody(),
    JSON.parse(serialized)
  );

  expect(businessSimpleBody.getOccupation()).toBe(deserialized.getOccupation());
  expect(businessSimpleBody.getIncome()).toBe(deserialized.getIncome());
});
