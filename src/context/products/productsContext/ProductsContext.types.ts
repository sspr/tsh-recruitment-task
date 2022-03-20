import { ProductsParams } from 'api/types';

export type ProductsContextValuesTypes = {
  setProductsParams: (params: Partial<ProductsParams>) => void;
  searchQuery: string;
};
