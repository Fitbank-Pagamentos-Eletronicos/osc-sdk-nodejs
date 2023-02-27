import { Vehicle } from '../../domains/';

test('Vehicle Serialize + Deserialize', () => {
  const vehicle = new Vehicle();

  vehicle.setLicensePlate('HUZ-8518');

  const serialized = JSON.stringify(vehicle);
  const deserialized = Object.assign(new Vehicle(), JSON.parse(serialized));

  expect(vehicle.getLicensePlate()).toBe(deserialized.getLicensePlate());
});
