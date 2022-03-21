import { productItemsMock } from 'api/mock/productsMock';
import { render } from 'tests';
import { ProductItemModal } from './ProductItemModal';

describe('ProductItemModal component', () => {
  it('renders product item modal correctly', () => {
    const { getByText } = render(
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

    expect(getByText(productItemsMock[0].name)).toBeInTheDocument();
    expect(getByText(productItemsMock[0].description)).toBeInTheDocument();
    expect(getByText(/promo/i)).toBeInTheDocument();
  });

  it('fires callback correctly, when close button is clicked', () => {
    const mockOnClose = jest.fn();

    const { getByRole } = render(
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

    getByRole('button').click();

    expect(mockOnClose).toHaveBeenCalled();
  });
});
