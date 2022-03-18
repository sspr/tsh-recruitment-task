import { theme } from 'assets/styles/theme';
import { render, screen } from 'tests';
import { Chip } from './Chip';

describe('Chip component', () => {
  it('renders chip element correctly', () => {
    render(<Chip text="test" />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toHaveStyle({
      backgroundColor: theme.color.accent,
    });
  });

  it('renders chip element correctly, when background color is given', () => {
    render(<Chip text="test" backgroundColor="#123456" />);
    expect(screen.getByText(/test/i)).toHaveStyle({
      backgroundColor: '#123456',
    });
  });
});
