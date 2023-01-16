import {
  ProposalBankAccount,
  IdentifySimpleBody,
  AddressSimpleBody,
  BusinessSimpleBody,
  ProductBankAccount
} from '../../domains/';
import {
  Gender,
  State,
  Nationality,
  RelationshipStatus,
  IdentityType,
  Occupation,
  ProductType
} from '../../domains/enums';

test('ProposalBankAccount Serialize + Deserialize', () => {
  let proposalBankAccount = new ProposalBankAccount();

  proposalBankAccount.setMother('Maria');
  proposalBankAccount.setGender(Gender[Gender.FEMININO]);
  proposalBankAccount.setNationality(Nationality[Nationality.BRASILEIRO]);
  proposalBankAccount.setHometownState(State.CE);
  proposalBankAccount.setRelationshipStatus(
    RelationshipStatus[RelationshipStatus.CASADO]
  );

  proposalBankAccount.setIdentity(
    (() => {
      const identity = new IdentifySimpleBody();

      identity.setType(IdentityType[IdentityType.CARTEIRA_CRC]);
      identity.setNumber('400946750');
      return identity;
    })()
  );

  proposalBankAccount.setAddress(
    (() => {
      const addressSimpleBody = new AddressSimpleBody();

      addressSimpleBody.setZipCode('60861-105');
      addressSimpleBody.setAddress('Rua do Feijão');
      addressSimpleBody.setNumber('2022');
      addressSimpleBody.setComplement('Casa');
      addressSimpleBody.setDistrict('Bairro do Arroz');
      addressSimpleBody.setState(State['CE']);
      addressSimpleBody.setCity('Macarrão');
      return addressSimpleBody;
    })()
  );

  proposalBankAccount.setBusiness(
    (() => {
      const businessSimpleBody = new BusinessSimpleBody();

      businessSimpleBody.setOccupation(Occupation[Occupation.AUTONOMO]);
      businessSimpleBody.setIncome('1000');
      return businessSimpleBody;
    })()
  );

  proposalBankAccount.setProducts(
    (() => {
      let products = new ProductBankAccount();
      products.setType(ProductType[ProductType.CAAS]);
      return [products];
    })()
  );

  const serialized = JSON.stringify(proposalBankAccount);
  const deserialized = Object.assign(
    new ProposalBankAccount(),
    JSON.parse(serialized)
  );

  expect(proposalBankAccount.getMother()).toBe(deserialized.getMother());
  expect(proposalBankAccount.getGender()).toBe(deserialized.getGender());
  expect(proposalBankAccount.getNationality()).toBe(
    deserialized.getNationality()
  );
  expect(proposalBankAccount.getHometownState()).toBe(
    deserialized.getHometownState()
  );
  expect(proposalBankAccount.getRelationshipStatus()).toBe(
    deserialized.getRelationshipStatus()
  );
  expect(proposalBankAccount.getIdentity()).toEqual(deserialized.getIdentity());
  expect(proposalBankAccount.getAddress()).toEqual(deserialized.getAddress());
  expect(proposalBankAccount.getBusiness()).toEqual(deserialized.getBusiness());
  expect(proposalBankAccount.getProducts()).toEqual(deserialized.getProducts());
});
