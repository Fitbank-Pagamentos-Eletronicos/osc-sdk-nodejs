import { SignContract, AcceptedCheckSumBody } from '../../domains/';

test('SignContract Serialize + Deserialize', () => {
  const signContract = new SignContract();

  signContract.setAcceptedCheckSum(
    (() => {
      let acceptedCheckSumBody = new AcceptedCheckSumBody();

      acceptedCheckSumBody.setAcceptedCheckSum('checksum');
      return [acceptedCheckSumBody];
    })()
  );

  const serialized = JSON.stringify(signContract);
  const deserialized = Object.assign(
    new SignContract(),
    JSON.parse(serialized)
  );

  expect(signContract.getAcceptedCheckSum()).toEqual(
    deserialized.getAcceptedCheckSum()
  );
});
