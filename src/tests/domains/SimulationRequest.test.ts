import { SimulationRequest } from '../../domains/';
import { ProductType } from '../../domains/enums';

test('SimulationRequest Serialize + Deserialize', () => {
  const simulationRequest = new SimulationRequest();

  simulationRequest.setType(ProductType[ProductType.CARD]);
  simulationRequest.setReleasedDate('2023-01-16');
  simulationRequest.setDueDate('2023-01-20');
  simulationRequest.setInstallments(20);
  simulationRequest.setMonthly_Tax(12);
  simulationRequest.setCadValue(20223);
  simulationRequest.setValue(26265);

  const serialized = JSON.stringify(simulationRequest);
  const deserialized = Object.assign(
    new SimulationRequest(),
    JSON.parse(serialized)
  );

  expect(simulationRequest.getType()).toBe(deserialized.getType());
  expect(simulationRequest.getReleasedDate()).toBe(
    deserialized.getReleasedDate()
  );
  expect(simulationRequest.getDueDate()).toBe(deserialized.getDueDate());
  expect(simulationRequest.getInstallments()).toBe(
    deserialized.getInstallments()
  );
  expect(simulationRequest.getMonthly_Tax()).toBe(
    deserialized.getMonthly_Tax()
  );
  expect(simulationRequest.getCadValue()).toBe(deserialized.getCadValue());
  expect(simulationRequest.getValue()).toBe(deserialized.getValue());
});
