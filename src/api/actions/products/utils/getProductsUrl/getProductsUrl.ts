import { ProductsParams } from '../../products.types';

export const getProductsUrl = (params: ProductsParams): string => {
  const validatedParams = Object.fromEntries(
    Object.entries(params)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])
  );
  const searchParams = new URLSearchParams(validatedParams);

  return `/products?${searchParams.toString()}`;
};
