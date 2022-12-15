import { GetContracts } from '../../requests/GetContracts';
import { Auth } from '../../domains/Auth';
import { Scopes } from '../../domains/enums';

const testingGetContracts = async () => {
  const auth = new Auth();
  auth.setClient_id('iuri.mendes--------bde4-84fb8eb9865e');
  auth.setClient_secret(
    '2e1995260d53d2b028a2a47553bd823042c589226e15d4994a466a97ce692271'
  );
  auth.setScopes(Scopes.api_external);

  setTimeout(() => {
    GetContracts('20221213170333387004500', auth).then((res) => {
      console.log(res);
    });
  }, 10000);
};

testingGetContracts();
