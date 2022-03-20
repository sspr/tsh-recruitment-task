import { Grid, SvgIcon, Typography } from '@mui/material';

import { MessageCard, SiteContentWrapper, Spinner } from 'ui';
import { ProductItem } from './productItem/ProductItem';
import { ProductsProps } from './Products.types';
import { ReactComponent as BlankSheet } from 'assets/images/blankSheet.svg';
import { styles } from './Products.styles';

export const Products = ({ data, isError, isLoading }: ProductsProps) => {
  if (isLoading) {
    return (
      <MessageCard>
        <Spinner />
      </MessageCard>
    );
  }

  if (isError || !data) {
    return (
      <MessageCard>
        <Typography variant="h3">Oooops... Something went wrong</Typography>
        <Typography variant="body1" sx={styles.message}>
          Please try agin later
        </Typography>
      </MessageCard>
    );
  }

  if (data.meta.totalItems === 0) {
    return (
      <MessageCard>
        <SvgIcon viewBox="0 0 38 48" sx={styles.blankSheetIcon}>
          <BlankSheet />
        </SvgIcon>
        <Typography variant="h3">Ooops… It’s empty here</Typography>
        <Typography variant="body1" sx={styles.message}>
          There are no products on the list
        </Typography>
      </MessageCard>
    );
  }

  return (
    <SiteContentWrapper>
      <Grid container rowSpacing={{ xs: 3, sm: 4 }} columnSpacing={3}>
        {data.items.map((item) => (
          <Grid columnSpacing={0} item xs={12} sm={3} key={item.name}>
            <ProductItem productDetails={item} />
          </Grid>
        ))}
      </Grid>
    </SiteContentWrapper>
  );
};
