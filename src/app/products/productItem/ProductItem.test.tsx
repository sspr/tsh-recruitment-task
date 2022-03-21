import { productItemsMock } from 'api/mock/productsMock';
import { theme } from 'assets/styles/theme';
import { render } from 'tests';
import { ProductItem } from './ProductItem';

describe('ProductItem component', () => {
  it('renders product item correctly', () => {
    const { getByText } = render(
      <ProductItem productDetails={{ ...productItemsMock[0], active: true }} />
    );

    expect(getByText(productItemsMock[0].name)).toBeInTheDocument();
    expect(getByText(productItemsMock[0].description)).toBeInTheDocument();
    expect(getByText(/promo/i)).toBeInTheDocument();
    expect(getByText(/show details/i)).toBeInTheDocument();
  });

  it('renders product item correctly, when product is not active', () => {
    const { getByText, queryByText } = render(
      <ProductItem productDetails={{ ...productItemsMock[0], active: false }} />
    );

    expect(getByText(/unavailable/i)).toBeInTheDocument();
    expect(getByText(/unavailable/i)).toBeDisabled();
    expect(getByText(/unavailable/i)).toHaveStyle({
      backgroundColor: theme.color.text.secondary,
    });
    expect(queryByText(/promo/i)).not.toBeInTheDocument();
  });
});
