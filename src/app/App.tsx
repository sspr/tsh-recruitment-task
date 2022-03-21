import { useProductsParams } from 'hooks';
import { AppRoutes } from 'routing/AppRoutes';
import { Header } from 'ui';

export const App = () => {
  const { setProductsParams, productsParams } = useProductsParams();

  return (
    <>
      <Header
        productsParams={productsParams}
        onFilterChange={(params) => {
          setProductsParams({ ...params, page: 1 });
        }}
      />
      <AppRoutes />
    </>
  );
};
