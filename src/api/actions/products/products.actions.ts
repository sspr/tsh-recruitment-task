import { Action } from '../../types';
import { ProductsParams } from './products.types';
import { getProductsUrl } from './utils/getProductsUrl/getProductsUrl';

export const createGetProductsAction = (params: ProductsParams): Action => ({
  method: 'GET',
  url: getProductsUrl(params),
});
