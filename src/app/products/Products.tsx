import { Box, Grid } from '@mui/material';

import { productItemsMock } from 'api/mock/productsMock';
import { ProductItem } from './productItem/ProductItem';
import { styles } from './Products.styles';

export const Products = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Grid container rowSpacing={{ xs: 3, sm: 4 }} columnSpacing={3}>
          {productItemsMock.map((item) => (
            <Grid columnSpacing={0} item xs={12} sm={3} key={item.name}>
              <ProductItem productDetails={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
