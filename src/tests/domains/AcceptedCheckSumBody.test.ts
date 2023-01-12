import { AcceptedCheckSumBody } from '../../domains';

test('AcceptedCheckSumBody Serialize + Deserialize', () => {
  const acceptedCheckSumBody = new AcceptedCheckSumBody();
  acceptedCheckSumBody.setAcceptedCheckSum('ok');

  const serialized = JSON.stringify(acceptedCheckSumBody);
  const deserialized = Object.assign(
    new AcceptedCheckSumBody(),
    JSON.parse(serialized)
  );

  expect(acceptedCheckSumBody.getAcceptedCheckSum()).toBe(
    deserialized.getAcceptedCheckSum()
  );
});
