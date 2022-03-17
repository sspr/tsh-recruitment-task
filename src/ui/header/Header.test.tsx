import { render, screen } from 'tests';
import { Header } from './Header';

describe('Header component', () => {
  it('renders page title and login button correctly', () => {
    render(<Header />);

    expect(screen.getByText(/join\.tsh\.io/i)).toBeInTheDocument();
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });
});
