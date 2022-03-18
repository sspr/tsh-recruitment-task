import { Box } from '@mui/material';

import { productItemsMock } from 'api/mock/productsMock';
import { ProductItem } from './productItem/ProductItem';

export const Products = () => {
  return (
    <>
      <Box>
        <ProductItem productDetails={productItemsMock[0]} />
      </Box>
    </>
  );
};
