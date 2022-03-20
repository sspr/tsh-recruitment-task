import { createContext } from 'react';

import { ProductsContextValuesTypes } from './ProductsContext.types';

export const ProductsContext = createContext<
  ProductsContextValuesTypes | undefined
>(undefined);
