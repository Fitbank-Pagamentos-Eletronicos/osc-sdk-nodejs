import { GetContract, ContractBody } from '../../domains';

test('GetContract Serialize + Deserialize', () => {
  const getContract = new GetContract();

  getContract.setCustomerServiceNumber('001');
  getContract.setContracts(
    (() => {
      const contractBody = new ContractBody();
      contractBody.setChecksum('checked');
      contractBody.setContract('contract');
      return [contractBody];
    })()
  );

  const serialized = JSON.stringify(getContract);
  const deserialized = Object.assign(new GetContract(), JSON.parse(serialized));

  expect(getContract.getCustomerServiceNumber()).toBe(
    deserialized.getCustomerServiceNumber()
  );
  expect(getContract.getContracts()).toEqual(deserialized.getContracts());
});
