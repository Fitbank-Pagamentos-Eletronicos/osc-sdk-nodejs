import { AddressSimpleBody } from '../../domains';
import { State } from '../../domains/enums';

test('Address Serialize + Deserialize', () => {
  const addressSimpleBody = new AddressSimpleBody();

  addressSimpleBody.setZipCode('60861-105');
  addressSimpleBody.setAddress('Rua do Feijão');
  addressSimpleBody.setNumber('2022');
  addressSimpleBody.setComplement('Casa');
  addressSimpleBody.setDistrict('Bairro do Arroz');
  addressSimpleBody.setState(State['CE']);
  addressSimpleBody.setCity('Macarrão');

  const serialized = JSON.stringify(addressSimpleBody);
  const deserialized = Object.assign(
    new AddressSimpleBody(),
    JSON.parse(serialized)
  );

  expect(addressSimpleBody.getZipCode()).toBe(deserialized.getZipCode());
  expect(addressSimpleBody.getAddress()).toBe(deserialized.getAddress());
  expect(addressSimpleBody.getNumber()).toBe(deserialized.getNumber());
  expect(addressSimpleBody.getComplement()).toBe(deserialized.getComplement());
  expect(addressSimpleBody.getDistrict()).toBe(deserialized.getDistrict());
  expect(addressSimpleBody.getState()).toBe(deserialized.getState());
  expect(addressSimpleBody.getCity()).toBe(deserialized.getCity());
});
