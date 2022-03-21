import { defaultProductParams } from 'context/products/defaultProductsParams';
import { render, fireEvent } from 'tests';
import { Header } from './Header';

describe('Header component', () => {
  it('renders page title, search bar, filter labels and login button correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <Header onFilterChange={() => {}} productsParams={defaultProductParams} />
    );

    expect(getByText(/join\.tsh\.io/i)).toBeInTheDocument();
    expect(getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(getByText(/active/i)).toBeInTheDocument();
    expect(getByText(/promo/i)).toBeInTheDocument();
  });

  it('fires callback correctly when checkbox is clicked', () => {
    const mockOnFilterChange = jest.fn();

    const { getByText } = render(
      <Header
        onFilterChange={mockOnFilterChange}
        productsParams={defaultProductParams}
      />
    );

    getByText(/active/i).click();
    getByText(/promo/i).click();
    getByText(/active/i).click();

    expect(mockOnFilterChange).toHaveBeenCalledTimes(3);
  });

  it('fires callback correctly when input form is submitted', () => {
    const mockOnFilterChange = jest.fn();

    const { getAllByRole, getByPlaceholderText } = render(
      <Header
        onFilterChange={mockOnFilterChange}
        productsParams={defaultProductParams}
      />
    );

    getAllByRole('button')[0].click();
    fireEvent.change(getByPlaceholderText(/search/i), {
      target: { value: 'pizza' },
    });
    getAllByRole('button')[0].click();

    expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
  });
});
