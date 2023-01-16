import { Products } from '../../domains/';
import { ProductType } from '../../domains/enums';

test('Products Serialize + Deserialize', () => {
  const products = new Products();

  products.setType(ProductType[ProductType.LOAN]);

  const serialized = JSON.stringify(products);
  const deserialized = Object.assign(new Products(), JSON.parse(serialized));

  expect(products.getType()).toBe(deserialized.getType());
});
