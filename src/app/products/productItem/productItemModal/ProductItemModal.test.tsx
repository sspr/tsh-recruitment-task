import { productItemsMock } from 'api/mock/productsMock';
import { render, screen } from 'tests';
import { ProductItemModal } from './ProductItemModal';

describe('ProductItemModal component', () => {
  it('renders product item modal correctly', () => {
    render(
      <ProductItemModal
        productDetails={{
          image: productItemsMock[0].image,
          name: productItemsMock[0].name,
          description: productItemsMock[0].description,
          promo: true,
        }}
        isOpened={true}
        onClose={() => {}}
      />
    );

    expect(screen.getByText(productItemsMock[0].name)).toBeInTheDocument();
    expect(
      screen.getByText(productItemsMock[0].description)
    ).toBeInTheDocument();
    expect(screen.getByText(/promo/i)).toBeInTheDocument();
  });

  it('fires callback correctly, when close button is clicked', () => {
    const mockOnClose = jest.fn();

    render(
      <ProductItemModal
        productDetails={{
          image: productItemsMock[0].image,
          name: productItemsMock[0].name,
          description: productItemsMock[0].description,
          promo: true,
        }}
        isOpened={true}
        onClose={mockOnClose}
      />
    );

    screen.getByRole('button').click();

    expect(mockOnClose).toHaveBeenCalled();
  });
});
