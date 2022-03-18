import {
  Card,
  CardContent,
  CardMedia,
  Modal,
  SvgIcon,
  Typography,
} from '@mui/material';

import { Chip } from 'ui';
import { CloseButton, styles } from './ProductItemModal.styles';
import { ProductItemModalProps } from './ProductItemModal.types';
import { ReactComponent as Cross } from 'assets/images/cross.svg';

export const ProductItemModal = ({
  productDetails,
  isOpened,
  onClose,
}: ProductItemModalProps) => {
  return (
    <Modal
      open={isOpened}
      onClose={onClose}
      sx={styles.modal}
      BackdropProps={{ style: styles.backdrop }}
    >
      <Card sx={styles.itemWrapper}>
        <CardMedia
          component="img"
          height="354"
          image={productDetails.image}
          alt={productDetails.name}
        />
        {productDetails.promo ? <Chip text="Promo" /> : null}
        <CardContent sx={styles.contentWrapper}>
          <Typography variant="h2">{productDetails.name}</Typography>
          <Typography variant="body2" sx={styles.description}>
            {productDetails.description}
          </Typography>
        </CardContent>
        <CloseButton onClick={onClose}>
          <SvgIcon viewBox="0 0 14 14" sx={styles.closeIcon}>
            <Cross />
          </SvgIcon>
        </CloseButton>
      </Card>
    </Modal>
  );
};
