import { OAuth } from '../../requests/OAuth';
import { Authorization } from '../../domains/Authorization';
import { Scopes } from '../../domains/enums';
import { AuthSuccess } from '../../domains/AuthSuccess';

test('the data is equal to Auth', () => {
  const auth = new Authorization();
  auth.setClient_id(process.env.client_id);
  auth.setClient_secret(process.env.client_secret);
  auth.setScopes(Scopes.api_external);

  const authSuccess = new AuthSuccess();
  authSuccess.setExpire_at(new Date().toString());
  authSuccess.setAccess_token('token');

  return OAuth(auth).then((data) => {
    expect(JSON.parse(data)).toMatchObject({
      access_token: expect.any(String),
      expire_at: expect.any(String)
    });
  });
});
