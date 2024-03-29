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
import {
  Proposal,
  Identity,
  Address,
  Vehicle,
  Bank,
  Reference,
  Business,
  ConsumerUnit,
  LogData,
  SimpleSignUp
} from '../../domains/';
import { ProductAuto } from '../../domains/ProductAuto';
import { ProductCard } from '../../domains/ProductCard';
import { ProductLoan } from '../../domains/ProductLoan';
import { ProductHome } from '../../domains/ProductHome';
import path, { resolve } from 'path';
import dotenv from 'dotenv';
import { OSC } from '../../..';

const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const testingSimpleProposalRequest = async () => {
  const instance = OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'default'
  );
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

  const pipelineSimpleSignUp = JSON.parse(
    await instance?.simpleSignUp(simpleSignUp)
  );
  const id = pipelineSimpleSignUp.id;

  setTimeout(() => {
    const pipeline = instance?.simpleProposal(proposal, id);
    pipeline?.then((data) => {
      console.log(data);
    });
  }, 10000);
};

testingSimpleProposalRequest();
