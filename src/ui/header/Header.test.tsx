import { defaultProductParams } from 'context/products/defaultProductsParams';
import { render, screen, fireEvent } from 'tests';
import { Header } from './Header';

describe('Header component', () => {
  it('renders page title, search bar, filter labels and login button correctly', () => {
    render(
      <Header onFilterChange={() => {}} productsParams={defaultProductParams} />
    );

    expect(screen.getByText(/join\.tsh\.io/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByText(/active/i)).toBeInTheDocument();
    expect(screen.getByText(/promo/i)).toBeInTheDocument();
  });

  it('fires callback correctly when checkbox is clicked', () => {
    const mockOnFilterChange = jest.fn();

    render(
      <Header
        onFilterChange={mockOnFilterChange}
        productsParams={defaultProductParams}
      />
    );

    screen.getByText(/active/i).click();
    screen.getByText(/promo/i).click();
    screen.getByText(/active/i).click();

    expect(mockOnFilterChange).toHaveBeenCalledTimes(3);
  });

  it('fires callback correctly when input form is submitted', () => {
    const mockOnFilterChange = jest.fn();

    render(
      <Header
        onFilterChange={mockOnFilterChange}
        productsParams={defaultProductParams}
      />
    );

    screen.getAllByRole('button')[0].click();
    fireEvent.change(screen.getByPlaceholderText(/search/i), {
      target: { value: 'pizza' },
    });
    screen.getAllByRole('button')[0].click();

    expect(mockOnFilterChange).toHaveBeenCalledTimes(1);
  });
});
