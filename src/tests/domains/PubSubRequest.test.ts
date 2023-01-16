import { PubSubRequest } from '../../domains/';
import { ProductType } from '../../domains/enums';

test('PubSubRequest Serialize + Deserialize', () => {
  const pubSubRequest = new PubSubRequest();

  pubSubRequest.setProject_id('5255252');
  pubSubRequest.setService_account('5848484a85s1as58');
  pubSubRequest.setSubscription_id('osdmoismamsfd,v');
  pubSubRequest.setTopic_id('kjsoaksoako');

  const serialized = JSON.stringify(pubSubRequest);
  const deserialized = Object.assign(
    new PubSubRequest(),
    JSON.parse(serialized)
  );

  expect(pubSubRequest.getProject_id()).toBe(deserialized.getProject_id());
  expect(pubSubRequest.getService_account()).toBe(
    deserialized.getService_account()
  );
  expect(pubSubRequest.getSubscription_id()).toBe(
    deserialized.getSubscription_id()
  );
  expect(pubSubRequest.getTopic_id()).toBe(deserialized.getTopic_id());
});
