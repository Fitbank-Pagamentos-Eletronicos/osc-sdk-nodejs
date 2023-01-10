import { SimpleSignUpRequest } from '../../requests/SimpleSignUpRequest';
import { SimpleProposalRequest } from '../../requests/SimpleProposalRequest';
import { Proposal } from '../../domains/Proposal';
import {
  Banks,
  Gender,
  State,
  Scopes,
  Nationality,
  Education,
  RelationshipStatus,
  IdentityType,
  IdentityIssuer,
  HomeType,
  HomeSince,
  Occupation,
  AccountType,
  ProductType,
  Network,
  RealEstateType
} from '../../domains/enums';
import { Identity } from '../../domains/Identity';
import { Address } from '../../domains/Address';
import { Vehicle } from '../../domains/Vehicle';
import { Bank } from '../../domains/Bank';
import { Reference } from '../../domains/Reference';
import { ProductAuto } from '../../domains/ProductAuto';
import { ProductCard } from '../../domains/ProductCard';
import { ProductLoan } from '../../domains/ProductLoan';
import { ProductHome } from '../../domains/ProductHome';
import { Business } from '../../domains/Business';
import { ConsumerUnit } from '../../domains/ConsumerUnit';
import { Auth } from '../../domains/Auth';
import { LogData } from '../../domains/LogData';
import { SimpleSignUp } from '../../domains/SimpleSignUp';
import { Pipeline } from '../../domains/Pipeline';
import moment from 'moment';

test('the data is equal to Simple SignUp', async () => {
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
  auth.setClient_id(process.env.client_id);
  auth.setClient_secret(process.env.client_secret);
  auth.setScopes(Scopes.api_external);

  const pipeline = new Pipeline();
  pipeline.setId('id');
  pipeline.setName('Iuri Mendes');
  pipeline.setStatus('SIGNUP_ANALISIS');
  pipeline.setCpf(60343933373);
  pipeline.setDateCreated(moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'));
  pipeline.setLastUpdated(moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'));

  SimpleSignUpRequest(simpleSignUp, auth).then(async (data) => {
    await expect(JSON.parse(await data)).toMatchObject({
      id: expect.any(String),
      cpf: pipeline.getCpf(),
      name: pipeline.getName(),
      status: pipeline.getStatus(),
      dateCreated: expect.any(String),
      lastUpdated: expect.any(String)
    });
  });
});
