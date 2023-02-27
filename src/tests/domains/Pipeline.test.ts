import { Pipeline, Matches, Proposals } from '../../domains';
import { ProductType, PendentDocuments } from '../../domains/enums';

test('Pipeline Serialize + Deserialize', () => {
  const pipeline = new Pipeline();

  pipeline.setId('001');
  pipeline.setStatus('Online');
  pipeline.setCpf(11111111111);
  pipeline.setName('John Doe');
  pipeline.setDateCreated('2022-10-22T14:10:20.123Z');
  pipeline.setLastUpdated('2022-10-23T14:10:20.123Z');
  pipeline.setMatches(
    (() => {
      const matches = new Matches();
      matches.setLogo('Logo');
      matches.setName('Name');
      matches.setProductId(2023);

      return [matches];
    })()
  );

  pipeline.setProposals(
    (() => {
      const proposals = new Proposals();
      proposals.setCustomerServiceNumber('1914');
      proposals.setType(ProductType[ProductType.CARD]);
      proposals.setProduct('Feijão');
      proposals.setProductId('1996');
      proposals.setHasDocuments(true);
      proposals.setHasContracts(false);
      proposals.setLogo('Logo FitBank');
      proposals.setPendentDocuments(
        PendentDocuments[PendentDocuments.IDENTITY_BACK]
      );
      proposals.setDateCreated('2022-10-22T14:10:20.123Z');
      proposals.setLastUpdated('2022-10-23T14:10:20.123Z');

      return [proposals];
    })()
  );

  const serialized = JSON.stringify(pipeline);
  const deserialized = Object.assign(new Pipeline(), JSON.parse(serialized));

  expect(pipeline.getId()).toBe(deserialized.getId());
  expect(pipeline.getStatus()).toBe(deserialized.getStatus());
  expect(pipeline.getCpf()).toBe(deserialized.getCpf());
  expect(pipeline.getName()).toBe(deserialized.getName());
  expect(pipeline.getDateCreated()).toBe(deserialized.getDateCreated());
  expect(pipeline.getLastUpdated()).toBe(deserialized.getLastUpdated());
  expect(pipeline.getMatches()).toEqual(deserialized.getMatches());
  expect(pipeline.getProposals()).toEqual(deserialized.getProposals());
});
