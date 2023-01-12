import { AuthSuccess } from '../../domains';

test('Auth Serialize + Deserialize', () => {
  const authSuccess = new AuthSuccess();
  authSuccess.setAccess_token('token');
  authSuccess.setExpire_at('2022-10-22T14:10:20.123Z');

  const serialized = JSON.stringify(authSuccess);
  const deserialized = Object.assign(new AuthSuccess(), JSON.parse(serialized));

  expect(authSuccess.getAccess_token()).toBe(deserialized.getAccess_token());
  expect(authSuccess.getExpire_at()).toBe(deserialized.getExpire_at());
});
