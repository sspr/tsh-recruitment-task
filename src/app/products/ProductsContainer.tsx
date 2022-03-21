import { createGetProductsAction } from 'api/actions/products/products.actions';
import { useQuery } from 'api/hooks/useQuery';
import { ProductsResponse } from 'api/types';
import { Products } from './Products';
import { useProductsParams } from 'hooks/useProductsParams/useProductsParams';

export const ProductsContainer = () => {
  const { productsParams } = useProductsParams();

  const { data, isLoading, isError } = useQuery<ProductsResponse>(
    createGetProductsAction(productsParams)
  );

  return <Products data={data} isError={isError} isLoading={isLoading} />;
};
