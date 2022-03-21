import { theme } from 'assets/styles/theme';
import { render } from 'tests';
import { Chip } from './Chip';

describe('Chip component', () => {
  it('renders chip element correctly', () => {
    const { getByText } = render(<Chip text="test" />);

    expect(getByText(/test/i)).toBeInTheDocument();
    expect(getByText(/test/i)).toHaveStyle({
      backgroundColor: theme.color.accent,
    });
  });

  it('renders chip element correctly, when background color is given', () => {
    const { getByText } = render(
      <Chip text="test" backgroundColor="#123456" />
    );
    expect(getByText(/test/i)).toHaveStyle({
      backgroundColor: '#123456',
    });
  });
});
