import { SignContracts } from '../../requests/SignContracts';
import { Auth } from '../../domains/Auth';
import { Scopes } from '../../domains/enums';
import { Contract } from '../../domains/Contract';
import { LogData } from '../../domains/LogData';
import { GetContracts } from '../../requests/GetContracts';

test('the data is equal to SignContracts', async () => {
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

  const auth = new Auth();
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
  contract.setAcceptedCheckSum(checksum);

  return setTimeout(() => {
    SignContracts(contract, '20221215124755537004100', auth).then(
      async (data) => {
        await expect(JSON.parse(await data)).toMatchObject({
          acceptedCheckSum: expect.any(String)
        });
      }
    );
  }, 10000);
});

test('the data is already assigned', async () => {
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

  const auth = new Auth();
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
  contract.setAcceptedCheckSum(checksum);

  return setTimeout(() => {
    SignContracts(contract, '20221215124755537004100', auth).then(
      async (data) => {
        await expect(JSON.parse(await data)).toMatchObject({
          code: expect.any(String),
          errors: expect.any(Array),
          size: 0
        });
      }
    );
  }, 10000);
});
