import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Rating,
  SvgIcon,
} from '@mui/material';
import { useState } from 'react';

import { ProductItemModal } from './productItemModal/ProductItemModal';
import { ReactComponent as Star } from 'assets/images/star.svg';
import { ReactComponent as EmptyStar } from 'assets/images/emptyStar.svg';
import { Chip } from 'ui';
import { styles } from './ProductItem.styles';
import { ProductItemProps } from './ProductItem.types';

export const ProductItem = ({ productDetails }: ProductItemProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <Card sx={styles.itemWrapper}>
        <CardMedia
          component="img"
          height="170"
          image={productDetails.image}
          alt={productDetails.name}
          sx={!productDetails.active ? styles.mediaUnavailable : undefined}
        />
        {productDetails.promo && productDetails.active ? (
          <Chip text="Promo" />
        ) : null}
        <Box sx={styles.contentWrapper}>
          <CardContent>
            <Typography variant="h3">{productDetails.name}</Typography>
            <Typography variant="body1" sx={styles.description}>
              {productDetails.description}
            </Typography>
          </CardContent>
          <CardActions sx={styles.actionsWrapper}>
            <Rating
              value={productDetails.rating}
              size="small"
              readOnly
              icon={
                <SvgIcon
                  viewBox="0 0 20 19"
                  sx={{ ...styles.starIcon, ...styles.filledStar }}
                >
                  <Star />
                </SvgIcon>
              }
              emptyIcon={
                <SvgIcon
                  viewBox="0 0 20 19"
                  sx={{ ...styles.starIcon, ...styles.emptyStar }}
                >
                  <EmptyStar />
                </SvgIcon>
              }
            />
            <Button
              variant="contained"
              sx={styles.button}
              disabled={!productDetails.active}
              onClick={() => setIsModalOpened(true)}
            >
              {productDetails.active ? 'Show details' : 'Unavailable'}
            </Button>
          </CardActions>
        </Box>
      </Card>
      <ProductItemModal
        productDetails={{
          description: productDetails.description,
          image: productDetails.image,
          name: productDetails.name,
          promo: productDetails.promo,
        }}
        isOpened={isModalOpened}
        onClose={() => {
          setIsModalOpened((prevState) => !prevState);
        }}
      />
    </>
  );
};
