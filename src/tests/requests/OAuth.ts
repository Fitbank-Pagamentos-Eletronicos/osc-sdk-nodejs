import { Scopes } from '../../domains/enums';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
import { OSC } from '../../..';

const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const instance = OSC.createInstance(
  process.env.client_id,
  process.env.client_secret,
  Scopes.api_external,
  'default'
);

const pipeline = instance?.getToken();
pipeline?.then((data) => {
  console.log(data);
});
