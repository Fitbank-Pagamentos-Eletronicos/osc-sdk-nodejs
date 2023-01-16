import { OAuth } from '../../requests/OAuth';
import { Authorization } from '../../domains/';
import { Scopes } from '../../domains/enums';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const auth = new Authorization();

auth.setClient_id(process.env.client_id);
auth.setClient_secret(process.env.client_secret);
auth.setScopes(Scopes.api_external);

OAuth(auth).then((res) => {
  console.log(res);
});
