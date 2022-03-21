import { useLocation } from 'react-router-dom';

import { useProductsParams } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';
import { Header } from 'ui';
import { AppRoute } from 'routing/AppRoute.enum';

export const App = () => {
  const { setProductsParams, productsParams } = useProductsParams();
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== AppRoute.Login && (
        <Header
          productsParams={productsParams}
          onFilterChange={(params) => {
            setProductsParams({ ...params, page: 1 });
          }}
        />
      )}
      <AppRoutes />
    </>
  );
};
