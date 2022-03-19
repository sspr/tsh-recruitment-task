import { Action } from '../../types';

export const createGetProductsAction = (queryString: string): Action => ({
  method: 'GET',
  url: `/products${queryString}`,
});
