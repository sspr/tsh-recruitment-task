import { validateProductsParams } from './validateProductsParams';

describe('validateProductsParams function', () => {
  it('validates params correctly', () => {
    const params: Record<string, string> = {
      limit: '12',
      page: '0',
      search: 'test',
      promo: 'undefined',
      active: 'true',
      wrongParam: 'pizza',
    };

    const queryString = validateProductsParams(params);

    expect(queryString).toStrictEqual({
      limit: 12,
      search: 'test',
      active: true,
    });
  });
});
