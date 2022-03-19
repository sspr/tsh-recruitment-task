import { ProductsParams } from '../products.types';
import { getProductsUrlParams } from './getProductsUrlParams';

describe('getProductsUrlParams function', () => {
  it('search params to query string correctly', () => {
    const params: ProductsParams = {
      limit: 12,
      page: 1,
      search: 'test',
      promo: undefined,
      active: true,
    };

    const queryString = getProductsUrlParams(params);

    expect(queryString).toStrictEqual(
      '?limit=12&page=1&search=test&active=true'
    );
  });
});
