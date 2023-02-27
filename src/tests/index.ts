import * as Collections from 'typescript-collections';
import { OSC } from '../../index';
import {
  SignupMatch,
  LogData,
  Proposal,
  Identity,
  Address,
  Vehicle,
  ConsumerUnit,
  Business,
  Bank,
  Reference
} from '../domains/';
import { ProductAuto } from '../domains/ProductAuto';
import { ProductLoan } from '../domains/ProductLoan';
import { ProductCard } from '../domains/ProductCard';
import { ProductHome } from '../domains/ProductHome';
import {
  AccountType,
  Banks,
  Education,
  Gender,
  HomeSince,
  HomeType,
  IdentityIssuer,
  IdentityType,
  Nationality,
  Network,
  Occupation,
  ProductType,
  RealEstateType,
  RelationshipStatus,
  Scopes,
  State
} from '../domains/enums';
import path, { resolve } from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();
dotenv.config({ path: resolve(__dirname, '../../../.env') });

const testing = async () => {
  const instance = OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'default'
  );

  OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'Beans'
  );

  OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'Pasta'
  );

  OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    'Rice'
  );

  OSC.createInstance(
    process.env.client_id,
    process.env.client_secret,
    Scopes.api_external,
    ' EstA é UMA strINg dE TESTE !@#$%¨&*()_-+={}[]ºª§¬¢£³²¹<> 0123456789 ÁÉÍÓÚ ÂÊÎÔÛÇç '
  ); //ThIs iS a TesT sTrInG

  const instances = new Collections.LinkedList<OSC>();
  instances.add(OSC.getInstance('Rice')!);
  instances.add(OSC.getInstance('Beans')!);
  instances.add(OSC.getInstance('Pasta')!);
  instances.add(OSC.getInstance()!);

  // Here you can try to find an instance that doesn't exist. So will return an error.
  // instances.add(OSC.getInstance('wrong name')!);

  instances.forEach((e) => console.log(e));
  // console.log(await instance?.getToken());

  const signupMatch = new SignupMatch();

  signupMatch.setCpf('11111111111');
  signupMatch.setName('John Johne ');
  signupMatch.setBirthday('1990-11-08');
  signupMatch.setEmail('email@gmail.com');
  signupMatch.setPhone('85987654321');
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
      productHome.setValue(4555);
      productHome.setInstallments(5);
      productHome.setRealEstateType(RealEstateType.house);
      productHome.setRealEstateValue(6);
      productHome.setOutstandingBalance(88);

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
      reference.setPhone('85987654321');

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
};
testing();
