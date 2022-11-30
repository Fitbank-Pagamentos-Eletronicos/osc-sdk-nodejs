import { SimpleSignUpRequest } from '../../requests/SimpleSignUpRequest';
import { SimpleSignUp } from '../../domains/SimpleSignUp';

import { LogData } from '../../domains/LogData';
import { Scopes } from '../../domains/enums';
import { Auth } from '../../domains/Auth';

const simpleSignUp = new SimpleSignUp();

simpleSignUp.setCpf('60343933373');
simpleSignUp.setName('Iuri Mendes');
simpleSignUp.setBirthday('1990-11-08');
simpleSignUp.setEmail('email@gmail.com');
simpleSignUp.setPhone('85912345678');
simpleSignUp.setZipCode('60177240');
simpleSignUp.setHasCreditCard(true);
simpleSignUp.setHasRestriction(false);
simpleSignUp.setHasOwnHouse(false);
simpleSignUp.setHasVehicle(false);
simpleSignUp.setHasAndroid(true);

simpleSignUp.setLogData(
  (() => {
    const logData = new LogData();

    logData.setLatitude(38.895);
    logData.setLongitude(-77.0364);
    logData.setOccurrenceDate('2022-10-22T14:10:20.123Z');
    logData.setUserAgent('Test Agent');
    logData.setIp('192.158.1.38');
    logData.setMac('00:00:5e:00:53:af');
    return logData;
  })()
);

const auth = new Auth();
auth.setClient_id('4dbe3aa7-8ce9-43a4-9298-73b700e712bb');
auth.setClient_secret(
  '1b364af124250aa09461f33161c3d96e551d822080fe1bd977aa66d7ec9378c8'
);
auth.setScopes(Scopes.api_external);

SimpleSignUpRequest(simpleSignUp, auth).then((res) => {
  console.log(res);
});
