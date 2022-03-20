import { ProductsParams } from '../../products.types';

export const getProductsUrlParams = (params: ProductsParams): string => {
  const validatedParams = Object.fromEntries(
    Object.entries(params)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])
  );
  const searchParams = new URLSearchParams(validatedParams);

  return `?${searchParams.toString()}`;
};
