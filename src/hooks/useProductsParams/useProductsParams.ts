import { useContext } from 'react';

import { ProductsContextValuesTypes } from 'context/products/productsContext/ProductsContext.types';
import { ProductsContext } from 'context/products/productsContext/ProductsContext';

export const useProductsParams = (): ProductsContextValuesTypes => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error(
      'useProductsParams must be used withing ProductsContextController'
    );
  }

  return {
    ...context,
  };
};
