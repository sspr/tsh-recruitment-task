import { render, screen } from 'tests';
import { Header } from './Header';

describe('Header component', () => {
  it('renders page title, search bar, filter labels and login button correctly', () => {
    render(<Header />);

    expect(screen.getByText(/join\.tsh\.io/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByText(/active/i)).toBeInTheDocument();
    expect(screen.getByText(/promo/i)).toBeInTheDocument();
  });
});
