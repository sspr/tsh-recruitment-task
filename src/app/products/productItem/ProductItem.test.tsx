import { productItemsMock } from 'api/mock/productsMock';
import { theme } from 'assets/styles/theme';
import { render, screen } from 'tests';
import { ProductItem } from './ProductItem';

describe('ProductItem component', () => {
  it('renders product item correctly', () => {
    render(
      <ProductItem productDetails={{ ...productItemsMock[0], active: true }} />
    );

    expect(screen.getByText(productItemsMock[0].name)).toBeInTheDocument();
    expect(
      screen.getByText(productItemsMock[0].description)
    ).toBeInTheDocument();
    expect(screen.getByText(/promo/i)).toBeInTheDocument();
    expect(screen.getByText(/show details/i)).toBeInTheDocument();
  });

  it('renders product item correctly, when product is not active', () => {
    render(
      <ProductItem productDetails={{ ...productItemsMock[0], active: false }} />
    );

    expect(screen.getByText(/unavailable/i)).toBeInTheDocument();
    expect(screen.getByText(/unavailable/i)).toBeDisabled();
    expect(screen.getByText(/unavailable/i)).toHaveStyle({
      backgroundColor: theme.color.text.secondary,
    });
    expect(screen.queryByText(/promo/i)).not.toBeInTheDocument();
  });
});
