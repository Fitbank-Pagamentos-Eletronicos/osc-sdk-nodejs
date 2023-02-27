import {
  Proposal,
  Identity,
  Address,
  Vehicle,
  ConsumerUnit,
  Business,
  Bank,
  Reference,
  Products
} from '../../domains/';
import {
  Banks,
  Gender,
  State,
  Nationality,
  Education,
  RelationshipStatus,
  IdentityType,
  IdentityIssuer,
  HomeType,
  HomeSince,
  Occupation,
  EmploymentSince,
  AccountType,
  ProductType
} from '../../domains/enums';

test('Proposal Serialize + Deserialize', () => {
  let proposal = new Proposal();

  proposal.setMother('Maria');
  proposal.setGender(Gender[Gender.MASCULINO]);
  proposal.setNationality(Nationality[Nationality.BRASILEIRO]);
  proposal.setHometownState(State.CE);
  proposal.setEducation(Education[Education.ENSINO_SUPERIOR_INCOMPLETO]);
  proposal.setRelationshipStatus(RelationshipStatus[RelationshipStatus.CASADO]);
  proposal.setPhoneLandline('8587654321');

  proposal.setIdentity(
    (() => {
      let identity = new Identity();

      identity.setType(IdentityType[IdentityType.CARTEIRA_OAB]);
      identity.setNumber('400946750');
      identity.setIssuer(IdentityIssuer[IdentityIssuer.CREA]);
      identity.setState(State.CE);
      identity.setIssuingDate('2009-08-08');
      return identity;
    })()
  );

  proposal.setAddress(
    (() => {
      let address = new Address();

      address.setZipCode('60177240');
      address.setAddress('Rua do Feijão');
      address.setNumber('2022');
      address.setComplement('Casa');
      address.setDistrict('Bairro do Arroz');
      address.setState(State.CE);
      address.setCity('Macarrão');
      address.setHomeType(HomeType[HomeType.PROPRIA_FINANCIADA]);
      address.setHomeSince(HomeSince[HomeSince.MENOR_6_MESES]);
      return address;
    })()
  );

  proposal.setVehicle(
    (() => {
      let vehicle = new Vehicle();

      vehicle.setLicensePlate('HUZ-8518');
      return vehicle;
    })()
  );

  proposal.setConsumerUnit(
    (() => {
      const consumerUnit = new ConsumerUnit();

      consumerUnit.setNumber('1914');
      return consumerUnit;
    })()
  );

  proposal.setBusiness(
    (() => {
      const business = new Business();

      business.setOccupation(Occupation[Occupation.AUTONOMO]);
      business.setProfession('Desenvolvedor');
      business.setCompanyName('FitBank 450');
      business.setPhone('85987654321');
      business.setIncome('1000');
      business.setEmploymentSince(
        EmploymentSince[EmploymentSince.BETWEEN_FIVE_AND_TEN_YEARS]
      );
      business.setPayday('05');
      business.setBenefitNumber('10');
      business.setZipCode('60177240');
      business.setAddress('Rua do Feijão');
      business.setNumber('2022');
      business.setComplement('Casa');
      business.setDistrict('Bairro do Arroz');
      business.setState(State.CE);
      business.setCity('Macarrão');
      return business;
    })()
  );

  proposal.setBank(
    (() => {
      let bank = new Bank();

      bank.setBank(Banks.B450);
      bank.setType(AccountType[AccountType.CONTA_CORRENTE_CONJUNTA]);
      bank.setAgency('2093');
      bank.setAccount('1018548-8');
      return bank;
    })()
  );

  proposal.setReference(
    (() => {
      let reference = new Reference();

      reference.setName('João');
      reference.setPhone('85987654321');

      return [reference];
    })()
  );

  proposal.setProducts(
    (() => {
      const products = new Products();
      products.setType(ProductType[ProductType.CARD]);

      return [products];
    })()
  );
  const serialized = JSON.stringify(proposal);
  const deserialized = Object.assign(new Proposal(), JSON.parse(serialized));

  expect(proposal.getMother()).toBe(deserialized.getMother());
  expect(proposal.getGender()).toBe(deserialized.getGender());
  expect(proposal.getNationality()).toBe(deserialized.getNationality());
  expect(proposal.getHometownState()).toBe(deserialized.getHometownState());
  expect(proposal.getHometown()).toBe(deserialized.getHometown());
  expect(proposal.getEducation()).toBe(deserialized.getEducation());
  expect(proposal.getRelationshipStatus()).toBe(
    deserialized.getRelationshipStatus()
  );
  expect(proposal.getPhoneLandline()).toBe(deserialized.getPhoneLandline());
  expect(proposal.getIdentity()).toEqual(deserialized.getIdentity());
  expect(proposal.getAddress()).toEqual(deserialized.getAddress());
  expect(proposal.getVehicle()).toEqual(deserialized.getVehicle());
  expect(proposal.getConsumerUnit()).toEqual(deserialized.getConsumerUnit());
  expect(proposal.getBusiness()).toEqual(deserialized.getBusiness());
  expect(proposal.getBank()).toEqual(deserialized.getBank());
  expect(proposal.getReference()).toEqual(deserialized.getReference());
  expect(proposal.getProducts()).toEqual(deserialized.getProducts());
});
