import { ProductCard } from '../../domains/ProductCard';
import { ProductType, Network } from '../../domains/enums';

test('ProductCard Serialize + Deserialize', () => {
  const productCard = new ProductCard();

  productCard.setType(ProductType[ProductType.WORKING_CAPITAL]);
  productCard.setPayDay('ProductCard');
  productCard.setNetwork(Network[Network.VISA]);

  const serialized = JSON.stringify(productCard);
  const deserialized = Object.assign(new ProductCard(), JSON.parse(serialized));

  expect(productCard.getType()).toBe(deserialized.getType());
  expect(productCard.getPayDay()).toBe(deserialized.getPayDay());
  expect(productCard.getNetwork()).toBe(deserialized.getNetwork());
});
