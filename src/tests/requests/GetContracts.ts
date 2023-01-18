import { Authorization } from '../../domains/';
import { Scopes } from '../../domains/enums';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
import { OSC } from '../../..';
const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const testingGetContracts = async () => {
  const instance = OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'default'
  );

  const pipeline = instance?.getContract('20221213170333387004500');
  pipeline?.then((data) => {
    console.log(data);
  });
};

testingGetContracts();
