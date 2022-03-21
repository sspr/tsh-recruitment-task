import { ProductsParams } from 'api/types';

export type HeaderProps = {
  onFilterChange: (param: Partial<ProductsParams>) => void;
  productsParams: ProductsParams;
};
