import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ProductsParams } from 'api/types';
import { ProductsContext } from '../productsContext/ProductsContext';
import { ProductsContextControllerProps } from './ProductsContextController.types';
import { defaultProductParams } from '../defaultProductsParams';
import { getProductsUrlParams } from 'api/actions/products/utils/getProductsUrlParams/getProductsUrlParams';
import { validateProductsParams } from 'api/actions/products/utils/validateProductsParams/validateProductsParams';

export const ProductsContextController = ({
  children,
}: ProductsContextControllerProps) => {
  const history = useHistory();
  const location = useLocation();

  const urlParams = new URLSearchParams(location.search);
  const urlParamsObject = validateProductsParams(Object.fromEntries(urlParams));

  const [productsParams, setProductsParams] = useState<ProductsParams>({
    ...defaultProductParams,
    ...urlParamsObject,
  });

  useEffect(() => {
    if (location.pathname === '/') {
      history.replace({
        search: getProductsUrlParams(productsParams),
      });
    }
  }, [productsParams, location.pathname]);

  useEffect(() => {
    setProductsParams({
      ...defaultProductParams,
      ...urlParamsObject,
    });
  }, [location.search]);

  return (
    <ProductsContext.Provider
      value={{
        searchQuery: getProductsUrlParams(productsParams),
        setProductsParams: (params: Partial<ProductsParams>) => {
          setProductsParams((prevState) => ({ ...prevState, ...params }));
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
