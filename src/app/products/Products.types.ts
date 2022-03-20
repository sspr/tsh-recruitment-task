import { ProductsResponse } from 'api/actions/products/products.types';

export type ProductsProps = {
  data: ProductsResponse | undefined;
  isLoading: boolean;
  isError: boolean;
};
