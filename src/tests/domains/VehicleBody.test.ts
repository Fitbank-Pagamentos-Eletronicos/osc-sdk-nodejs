import { VehicleBody } from '../../domains/';

test('VehicleBody Serialize + Deserialize', () => {
  const vehicleBody = new VehicleBody();
  vehicleBody.setVehicleBrand('DMC');
  vehicleBody.setCodeFipe('0001');
  vehicleBody.setVehicleFipeValue('2023');
  vehicleBody.setVehicleType('Type');
  vehicleBody.setVehicleYear('1981');

  const serialized = JSON.stringify(vehicleBody);
  const deserialized = Object.assign(new VehicleBody(), JSON.parse(serialized));

  expect(vehicleBody.getVehicleBrand()).toBe(deserialized.getVehicleBrand());
  expect(vehicleBody.getVehicleModel()).toBe(deserialized.getVehicleModel());
  expect(vehicleBody.getCodeFipe()).toBe(deserialized.getCodeFipe());
  expect(vehicleBody.getVehicleFipeValue()).toBe(
    deserialized.getVehicleFipeValue()
  );
  expect(vehicleBody.getVehicleType()).toBe(deserialized.getVehicleType());
  expect(vehicleBody.getVehicleYear()).toBe(deserialized.getVehicleYear());
});
