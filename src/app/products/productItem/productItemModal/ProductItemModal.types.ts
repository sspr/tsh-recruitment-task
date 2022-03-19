import { ProductItem } from 'api/types';

export type ProductItemModalProps = {
  productDetails: Pick<ProductItem, 'name' | 'description' | 'image' | 'promo'>;
  isOpened: boolean;
  onClose: VoidFunction;
};
