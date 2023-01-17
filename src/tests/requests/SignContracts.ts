import { SignContracts } from '../../requests/SignContracts';
import {
  Authorization,
  Contract,
  LogData,
  AcceptedCheckSumBody
} from '../../domains';
import { Scopes } from '../../domains/enums';
import { GetContracts } from '../../requests/GetContracts';
import path, { resolve } from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const testingSignContracts = async () => {
  const contract = new Contract();

  contract.setLogData(
    (() => {
      const logData = new LogData();

      logData.setIp('1.0.0.0');
      logData.setLatitude(-16.6982283);
      logData.setLongitude(-49.2581201);
      logData.setMac('00:00:00:00:00:00');
      logData.setOccurrenceDate('2022-12-14T10:20:17.459Z');
      logData.setUserAgent('Test Agent');
      return logData;
    })()
  );

  const auth = new Authorization();

  auth.setClient_id(process.env.client_id);
  auth.setClient_secret(process.env.client_secret);
  auth.setScopes(Scopes.api_external);

  const getContractsRequest = JSON.parse(
    await GetContracts('20221215124755537004100', auth).then(
      (contracts: string) => {
        return contracts;
      }
    )
  );

  const checksum = getContractsRequest.contracts.map(
    (checksum: any) => checksum.checksum
  );

  contract.setAcceptedCheckSum(
    (() => {
      const acceptedCheckSumBody = new AcceptedCheckSumBody();
      acceptedCheckSumBody.setAcceptedCheckSum(checksum);
      return [acceptedCheckSumBody];
    })()
  );

  setTimeout(() => {
    SignContracts(contract, '20221215124755537004100', auth).then((res) => {
      console.log(res);
    });
  }, 10000);
};

testingSignContracts();
