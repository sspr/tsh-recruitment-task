import { createGetProductsAction } from 'api/actions/products/products.actions';
import { defaultProductParams } from 'api/actions/products/utils/defaultProductsParams';
import { getProductsUrlParams } from 'api/actions/products/utils/getProductsUrlParams';
import { useQuery } from 'api/hooks/useQuery';
import { ProductsResponse } from 'api/types';
import { Products } from './Products';

export const ProductsContainer = () => {
  const { data, isLoading, error } = useQuery<ProductsResponse, Error>(
    createGetProductsAction(getProductsUrlParams(defaultProductParams))
  );

  return <Products data={data} error={error} isLoading={isLoading} />;
};
