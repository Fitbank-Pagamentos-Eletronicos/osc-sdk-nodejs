import { ContractBody } from '../../domains';

test('ContractBody Serialize + Deserialize', () => {
  const contractBody = new ContractBody();

  contractBody.setChecksum('checksum');
  contractBody.setContract('contract');

  const serialized = JSON.stringify(contractBody);
  const deserialized = Object.assign(
    new ContractBody(),
    JSON.parse(serialized)
  );

  expect(contractBody.getChecksum()).toBe(deserialized.getChecksum());
  expect(contractBody.getContract()).toBe(deserialized.getContract());
});
