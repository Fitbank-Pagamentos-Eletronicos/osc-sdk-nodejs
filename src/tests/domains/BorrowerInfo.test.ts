import { BorrowerInfo } from '../../domains/';

test('BorrowerInfo Serialize + Deserialize', () => {
  const borrowerInfo = new BorrowerInfo();
  borrowerInfo.setIsBlocked(true);
  borrowerInfo.setIsRegistered(false);

  const serialized = JSON.stringify(borrowerInfo);
  const deserialized = Object.assign(
    new BorrowerInfo(),
    JSON.parse(serialized)
  );

  expect(borrowerInfo.isIsBlocked()).toBe(deserialized.isIsBlocked());
  expect(borrowerInfo.isIsRegistered()).toBe(deserialized.isIsRegistered());
});
