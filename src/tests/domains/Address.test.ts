import { Address } from '../../domains';
import { State, HomeType, HomeSince } from '../../domains/enums';

test('Address Serialize + Deserialize', () => {
  const address = new Address();

  address.setZipCode('60861-105');
  address.setAddress('Rua do Feijão');
  address.setNumber('2022');
  address.setComplement('Casa');
  address.setDistrict('Bairro do Arroz');
  address.setState(State['CE']);
  address.setCity('Macarrão');
  address.setHomeType(HomeType[HomeType.PROPRIA_FINANCIADA]);
  address.setHomeSince(HomeSince[HomeSince.MENOR_6_MESES]);

  const serialized = JSON.stringify(address);
  const deserialized = Object.assign(new Address(), JSON.parse(serialized));

  expect(address.getZipCode()).toBe(deserialized.getZipCode());
  expect(address.getAddress()).toBe(deserialized.getAddress());
  expect(address.getNumber()).toBe(deserialized.getNumber());
  expect(address.getComplement()).toBe(deserialized.getComplement());
  expect(address.getDistrict()).toBe(deserialized.getDistrict());
  expect(address.getState()).toBe(deserialized.getState());
  expect(address.getCity()).toBe(deserialized.getCity());
  expect(address.getHomeType()).toBe(deserialized.getHomeType());
  expect(address.getHomeSince()).toBe(deserialized.getHomeSince());
});
