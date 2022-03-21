import { ProductsParams } from '../../products.types';
import { getProductsUrl } from './getProductsUrl';

describe('getProductsUrl function', () => {
  it('converts search params to query string correctly', () => {
    const params: ProductsParams = {
      limit: 12,
      page: 1,
      search: 'test',
      promo: undefined,
      active: true,
    };

    const queryString = getProductsUrl(params);

    expect(queryString).toStrictEqual(
      '/products?limit=12&page=1&search=test&active=true'
    );
  });
});
