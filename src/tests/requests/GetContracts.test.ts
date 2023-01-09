import { GetContracts } from '../../requests/GetContracts';
import { Auth } from '../../domains/Auth';
import { GetContract } from '../../domains/GetContract';
import { Scopes } from '../../domains/enums';

test('the data is equal to GetContracts', async () => {
  const auth = new Auth();
  auth.setClient_id(process.env.client_id);
  auth.setClient_secret(process.env.client_secret);
  auth.setScopes(Scopes.api_external);

  const getContract = new GetContract();
  getContract.setCustomerServiceNumber('20221213170333387004500');

  return setTimeout(() => {
    GetContracts('20221213170333387004500', auth).then((data) => {
      expect(JSON.parse(data)).toMatchObject({
        customerServiceNumber: getContract.getCustomerServiceNumber(),
        contracts: expect.any(Array)
      });
    });
  }, 10000);
});
