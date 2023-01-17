import { GetContracts } from '../../requests/GetContracts';
import { Authorization } from '../../domains/';
import { Scopes } from '../../domains/enums';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const testingGetContracts = async () => {
  const auth = new Authorization();

  auth.setClient_id(process.env.client_id);
  auth.setClient_secret(process.env.client_secret);
  auth.setScopes(Scopes.api_external);

  setTimeout(() => {
    GetContracts('20221213170333387004500', auth).then((res) => {
      console.log(res);
    });
  }, 10000);
};

testingGetContracts();
