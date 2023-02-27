import { SimpleSignUpRequest } from '../../requests/SimpleSignUpRequest';
import { Authorization, LogData, SimpleSignUp } from '../../domains/';
import { Scopes } from '../../domains/enums';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
import { OSC } from '../../..';

const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const testingSimpleSignUp = async () => {
  const instance = OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'default'
  );
  const simpleSignUp = new SimpleSignUp();

  simpleSignUp.setCpf('11111111111');
  simpleSignUp.setName('Iuri Mendes');
  simpleSignUp.setBirthday('1990-11-08');
  simpleSignUp.setEmail('email@gmail.com');
  simpleSignUp.setPhone('11987654321');
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

  const pipeline = instance?.simpleSignUp(simpleSignUp);
  pipeline?.then((data) => {
    console.log(data);
  });
};

testingSimpleSignUp();
