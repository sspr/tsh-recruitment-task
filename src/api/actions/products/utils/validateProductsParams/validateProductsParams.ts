import { ProductsParams } from '../../products.types';

export const validateProductsParams = (
  params: Record<string, string>
): Partial<ProductsParams> => {
  const validateNumber = (numberToValidate: string | undefined) =>
    numberToValidate &&
    Number.isInteger(Number(numberToValidate)) &&
    Number(numberToValidate) > 0
      ? Number(numberToValidate)
      : undefined;
  const validateBoolean = (booleanToValidate: string | undefined) =>
    booleanToValidate === 'true'
      ? true
      : booleanToValidate === 'false'
      ? false
      : undefined;

  const validatedParams = {
    limit: validateNumber(params.limit),
    page: validateNumber(params.page),
    search: params.search ? params.search : undefined,
    active: validateBoolean(params.active),
    promo: validateBoolean(params.promo),
  };

  return Object.fromEntries(
    Object.entries(validatedParams).filter(([, value]) => value !== undefined)
  );
};
