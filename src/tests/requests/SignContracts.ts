import { Contract, LogData, AcceptedCheckSumBody } from '../../domains';
import { Scopes } from '../../domains/enums';
import { GetContracts } from '../../requests/GetContracts';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
import { OSC } from '../../..';

const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const testingSignContracts = async () => {
  const instance = OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'default'
  );
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

  const pipelineGetContracts = JSON.parse(
    await instance?.getContract('20221215124755537004100')
  );

  const checksum = pipelineGetContracts.contracts.map(
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
    const pipeline = instance?.postContract(
      contract,
      '20221215124755537004100'
    );
    pipeline?.then((data) => {
      console.log(data);
    });
  }, 10000);
};

testingSignContracts();
