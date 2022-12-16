import { SignContracts } from '../../requests/SignContracts';
import { Auth } from '../../domains/Auth';
import { Scopes } from '../../domains/enums';
import { Contract } from '../../domains/Contract';
import { LogData } from '../../domains/LogData';
import { GetContracts } from '../../requests/GetContracts';

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

  const auth = new Auth();
  auth.setClient_id('iuri.mendes--------bde4-84fb8eb9865e');
  auth.setClient_secret(
    '2e1995260d53d2b028a2a47553bd823042c589226e15d4994a466a97ce692271'
  );
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
  contract.setAceptedCheckSum(checksum);

  setTimeout(() => {
    SignContracts(contract, '20221215124755537004100', auth).then((res) => {
      console.log(res);
    });
  }, 10000);
};

testingSignContracts();
