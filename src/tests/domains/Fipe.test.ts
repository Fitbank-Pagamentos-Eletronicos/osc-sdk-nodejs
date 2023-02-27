import { Fipe, VehicleBody } from '../../domains';

test('Fipe Serialize + Deserialize', () => {
  const fipe = new Fipe();

  fipe.setLastUpdate('2022-10-22T14:10:20.123Z');

  fipe.setVehicle(
    (() => {
      const vehicleBody = new VehicleBody();
      vehicleBody.setVehicleBrand('DMC');
      vehicleBody.setCodeFipe('0001');
      vehicleBody.setVehicleFipeValue('2023');
      vehicleBody.setVehicleType('Type');
      vehicleBody.setVehicleYear('1981');
      return [vehicleBody];
    })()
  );

  const serialized = JSON.stringify(fipe);
  const deserialized = Object.assign(new Fipe(), JSON.parse(serialized));

  expect(fipe.getLastUpdate()).toBe(deserialized.getLastUpdate());
  expect(fipe.getVehicle()).toEqual(deserialized.getVehicle());
});
