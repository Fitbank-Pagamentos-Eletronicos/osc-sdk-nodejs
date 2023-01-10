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
import { ProposalsRequest } from '../../requests/ProposalsRequest';
import { SignupMatchRequest } from '../../requests/SignupMatchRequest';
import { LogData } from '../../domains/LogData';
import { SignupMatch } from '../../domains/SignupMatch';
import { Pipeline } from '../../domains/Pipeline';
import moment from 'moment';

test('the data is equal to GetContracts', async () => {
  const proposal = new Proposal();

  proposal.setMother('Fulana Mãe');
  proposal.setGender(Gender.MASCULINO);
  proposal.setNationality(Nationality.BRASILEIRO);
  proposal.setHometownState(State.GO);
  proposal.setHometown('Goiânia');
  proposal.setEducation(Education.POS_GRADUACAO);
  proposal.setRelationshipStatus(RelationshipStatus.CASADO);
  proposal.setPhoneLandline('6232345678');

  proposal.setIdentity(
    (() => {
      const identity = new Identity();

      identity.setType(IdentityType.RG);
      identity.setNumber('123456');
      identity.setIssuer(IdentityIssuer.SSP);
      identity.setState(State.GO);
      identity.setIssuingDate('2010-01-01');
      return identity;
    })()
  );

  proposal.setAddress(
    (() => {
      const address = new Address();

      address.setZipCode('74000000');
      address.setAddress('Cidade de Goiânia');
      address.setNumber('0');
      address.setComplement('toda a cidade');
      address.setDistrict('geral');
      address.setState(State.GO);
      address.setCity('Goiânia');
      address.setHomeType(HomeType.ALUGADA);
      address.setHomeSince(HomeSince.MAIOR_2_ANOS);
      return address;
    })()
  );

  proposal.setVehicle(
    (() => {
      const vehicle = new Vehicle();

      vehicle.setLicensePlate('XXX0000');
      return vehicle;
    })()
  );

  proposal.setConsumerUnit(
    (() => {
      const consumerUnit = new ConsumerUnit();

      consumerUnit.setNumber('000000000');
      return consumerUnit;
    })()
  );

  proposal.setBusiness(
    (() => {
      const business = new Business();

      business.setOccupation(Occupation.ASSALARIADO);
      business.setProfession('ADMINISTRADOR');
      business.setCompanyName('Abobrinha');
      business.setPhone('6239413142');
      business.setIncome('1500');
      business.setPayday('1');
      business.setBenefitNumber('');
      business.setZipCode('74000000');
      business.setAddress('Cidade de Goiânia');
      business.setNumber('1');
      business.setComplement('toda a cidade');
      business.setDistrict('geral');
      business.setState(State.GO);
      business.setCity('Goiânia');
      return business;
    })()
  );

  proposal.setBank(
    (() => {
      const bank = new Bank();

      bank.setBank(Banks.B450);
      bank.setType(AccountType.CONTA_CORRENTE_INDIVIDUAL);
      bank.setAgency('0001');
      bank.setAccount('5647891');
      return bank;
    })()
  );

  proposal.setReference(
    (() => {
      const reference = new Reference();

      reference.setName('Joana Maria');
      reference.setPhone('11987654321');

      return [reference];
    })()
  );

  proposal.setProducts(
    (() => {
      const productLoan = new ProductLoan();
      productLoan.setType(ProductType.LOAN);
      productLoan.setValue(7000);
      productLoan.setInstallments(12);

      const productCard = new ProductCard();
      productCard.setType(ProductType.CARD);
      productCard.setNetwork(Network.MASTERCARD);
      productCard.setPayDay('15');

      const productAuto = new ProductAuto();
      productAuto.setType(ProductType.REFINANCING_AUTO);
      productAuto.setValue(30000);
      productAuto.setVehicleBrand('Fiat');
      productAuto.setVehicleModel('Mobi');
      productAuto.setInstallments(12);
      productAuto.setVehicleModelYear('2010');
      productAuto.setCodeFipe('038003-2');
      productAuto.setVehicleFipeValue(28000);

      const productHome = new ProductHome();
      productHome.setType(ProductType.REFINANCING_HOME);
      productHome.setValue(150000);
      productHome.setInstallments(12);
      productHome.setRealEstateType(RealEstateType.house);
      productHome.setRealEstateValue(148000);
      productHome.setOutstandingBalance(50000);

      return [productAuto, productCard, productLoan, productHome];
    })()
  );

  const signupMatch = new SignupMatch();

  signupMatch.setCpf('12557128309');
  signupMatch.setName('Michael Scott');
  signupMatch.setBirthday('1990-11-08');
  signupMatch.setEmail('test9@gmail.com');
  signupMatch.setPhone('85932399907');
  signupMatch.setZipCode('60177240');
  signupMatch.setEducation(Education[Education.POS_GRADUACAO]);
  signupMatch.setBanks(Banks.B450);
  signupMatch.setOccupation(Occupation[Occupation.ASSALARIADO]);
  signupMatch.setIncome(2000);
  signupMatch.setHasCreditCard(true);
  signupMatch.setHasRestriction(false);
  signupMatch.setHasOwnHouse(false);
  signupMatch.setHasVehicle(false);

  signupMatch.setProducts(
    (() => {
      const productLoan = new ProductLoan();
      productLoan.setInstallments(12);
      productLoan.setValue(7000);
      productLoan.setType(ProductType.LOAN);

      const productCard = new ProductCard();
      productCard.setType(ProductType.CARD);
      productCard.setPayDay('12');
      productCard.setNetwork(Network.MASTERCARD);

      const productAuto = new ProductAuto();
      productAuto.setType(ProductType.REFINANCING_AUTO);
      productAuto.setValue(30000);
      productAuto.setVehicleBrand('Fiat');
      productAuto.setVehicleFipeValue(20);
      productAuto.setVehicleModel('Uno');
      productAuto.setVehicleModelYear('2022');
      productAuto.setCodeFipe('038003-2');
      productAuto.setInstallments(12);

      const productHome = new ProductHome();
      productHome.setType(ProductType.REFINANCING_HOME);
      productHome.setValue(150000);
      productHome.setInstallments(12);
      productHome.setRealEstateType(RealEstateType.house);
      productHome.setRealEstateValue(148000);
      productHome.setOutstandingBalance(50000);

      return [productAuto, productCard, productLoan, productHome];
    })()
  );

  signupMatch.setLogData(
    (() => {
      let logData = new LogData();

      logData.setIp('192.158.1.38');
      logData.setLatitude(38.895);
      logData.setLongitude(-77.0364);
      logData.setMac('00:00:5e:00:53:af');
      logData.setOccurrenceDate('2019-08-21T14:31:17.459Z');
      logData.setUserAgent('Test Agent');
      return logData;
    })()
  );

  const auth = new Auth();
  auth.setClient_id(process.env.client_id);
  auth.setClient_secret(process.env.client_secret);
  auth.setScopes(Scopes.api_external);

  const signUpMatchRequest = JSON.parse(
    await SignupMatchRequest(signupMatch, auth)
  );
  const id = signUpMatchRequest.id;

  const pipeline = new Pipeline();
  pipeline.setId('id');
  pipeline.setName('Michael Scott');
  pipeline.setStatus('PROPOSAL_ANALISIS');
  pipeline.setCpf(12557128309);
  pipeline.setDateCreated(moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'));
  pipeline.setLastUpdated(moment().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'));

  return setTimeout(() => {
    ProposalsRequest(proposal, id, auth).then(async (data) => {
      await expect(JSON.parse(await data)).toMatchObject({
        cpf: pipeline.getCpf(),
        name: pipeline.getName(),
        status: pipeline.getStatus(),
        dateCreated: expect.any(String),
        lastUpdated: expect.any(String)
      });
    });
  }, 10000);
});
