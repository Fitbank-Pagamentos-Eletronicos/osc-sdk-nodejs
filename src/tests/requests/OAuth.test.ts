import { OAuth } from '../../requests/OAuth';
import { Auth } from '../../domains/Auth';
import { Scopes } from '../../domains/enums';
import { AuthSucess } from '../../domains/AuthSucess';

test('the data is equal to Auth', () => {
  const auth = new Auth();
  auth.setClient_id('iuri.mendes--------bde4-84fb8eb9865e');
  auth.setClient_secret(
    '2e1995260d53d2b028a2a47553bd823042c589226e15d4994a466a97ce692271'
  );
  auth.setScopes(Scopes.api_external);

  const authSuccess = new AuthSucess();
  authSuccess.setExpire_at(new Date().toString());
  authSuccess.setAccess_token('token');

  return OAuth(auth).then((data) => {
    expect(JSON.parse(data)).toMatchObject({
      access_token: expect.any(String),
      expire_at: expect.any(String)
    });
  });
});
