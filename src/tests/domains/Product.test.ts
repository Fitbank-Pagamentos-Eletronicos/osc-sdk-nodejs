import { Product } from '../../domains/';

test('Product Serialize + Deserialize', () => {
  product.setProductId(1996);
  product.setName('João');
  product.setLogo('Logo FitBank');

  const serialized = JSON.stringify(product);
  const deserialized = Object.assign(new Product(), JSON.parse(serialized));

  expect(product.getProductId()).toBe(deserialized.getProductId());
  expect(product.getName()).toBe(deserialized.getName());
  expect(product.getLogo()).toBe(deserialized.getLogo());
});

const product = new Product();
