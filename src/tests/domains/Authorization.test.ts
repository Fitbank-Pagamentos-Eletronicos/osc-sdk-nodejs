import { Authorization } from '../../domains/Authorization';
import { Scopes } from '../../domains/enums';

test('Auth Serialize + Deserialize', () => {
  const authTest = new Authorization();
  authTest.setClient_id('4');
  authTest.setClient_secret('password');
  authTest.setScopes(Scopes.api_external);

  const serialized = JSON.stringify(authTest);
  const deserialized = Object.assign(
    new Authorization(),
    JSON.parse(serialized)
  );

  expect(authTest.getClient_id()).toBe(deserialized.getClient_id());
  expect(authTest.getClient_secret()).toBe(deserialized.getClient_secret());
  expect(authTest.getScopes()).toBe(deserialized.getScopes());
});
