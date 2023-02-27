import { Business } from '../../domains/';
import { State, Occupation, EmploymentSince } from '../../domains/enums';

test('Business Serialize + Deserialize', () => {
  const business = new Business();

  business.setOccupation(Occupation[Occupation.AUTONOMO]);
  business.setProfession('Desenvolvedor');
  business.setCompanyName('FitBank 450');
  business.setPhone('85987654321');
  business.setIncome('1000');
  business.setEmploymentSince(
    EmploymentSince[EmploymentSince.BETWEEN_ONE_AND_TWO_YEARS]
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

  const serialized = JSON.stringify(business);
  const deserialized = Object.assign(new Business(), JSON.parse(serialized));

  expect(business.getOccupation()).toBe(deserialized.getOccupation());
  expect(business.getProfession()).toBe(deserialized.getProfession());
  expect(business.getCompanyName()).toBe(deserialized.getCompanyName());
  expect(business.getPhone()).toBe(deserialized.getPhone());
  expect(business.getIncome()).toBe(deserialized.getIncome());
  expect(business.getEmploymentSince()).toBe(deserialized.getEmploymentSince());
  expect(business.getPayday()).toBe(deserialized.getPayday());
  expect(business.getBenefitNumber()).toBe(deserialized.getBenefitNumber());
  expect(business.getZipCode()).toBe(deserialized.getZipCode());
  expect(business.getAddress()).toBe(deserialized.getAddress());
  expect(business.getNumber()).toBe(deserialized.getNumber());
  expect(business.getComplement()).toBe(deserialized.getComplement());
  expect(business.getDistrict()).toBe(deserialized.getDistrict());
  expect(business.getState()).toBe(deserialized.getState());
  expect(business.getCity()).toBe(deserialized.getCity());
});
