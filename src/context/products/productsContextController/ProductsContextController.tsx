import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ProductsParams } from 'api/types';
import { ProductsContext } from '../productsContext/ProductsContext';
import { ProductsContextControllerProps } from './ProductsContextController.types';
import {
  defaultProductParams,
  mobileDefaultProductParams,
} from '../defaultProductsParams';
import { validateProductsParams } from '../utils/validateProductsParams/validateProductsParams';
import { useIsScreenMobile } from 'hooks';

export const ProductsContextController = ({
  children,
}: ProductsContextControllerProps) => {
  const history = useHistory();
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const urlParamsObject = validateProductsParams(Object.fromEntries(urlParams));

  const isScreenMobile = useIsScreenMobile();

  const initialParams = isScreenMobile
    ? { ...mobileDefaultProductParams, ...urlParamsObject }
    : { ...defaultProductParams, ...urlParamsObject };

  const [productsParams, setProductsParams] =
    useState<ProductsParams>(initialParams);

  useEffect(() => {
    if (location.pathname === '/') {
      const searchParams = new URLSearchParams(
        Object.fromEntries(
          Object.entries(productsParams)
            .filter(([, value]) => value !== undefined)
            .map(([key, value]) => [key, String(value)])
        )
      );

      history.replace({
        search: searchParams.toString(),
      });
    }
  }, [productsParams, location.pathname]);

  useEffect(() => {
    setProductsParams(initialParams);
  }, [location.search]);

  return (
    <ProductsContext.Provider
      value={{
        productsParams,
        setProductsParams: (params: Partial<ProductsParams>) => {
          setProductsParams((prevState) => ({ ...prevState, ...params }));
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
