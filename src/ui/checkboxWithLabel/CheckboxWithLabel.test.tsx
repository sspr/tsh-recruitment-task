import { render, screen } from 'tests';
import { CheckboxWithLabel } from './CheckboxWithLabel';

describe('CheckboxWithLabel component', () => {
  it('renders label correctly', () => {
    render(<CheckboxWithLabel text="test" />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('marks checkbox as checked and back, when click on label or checkbox', () => {
    render(<CheckboxWithLabel text="test" />);

    screen.getByText(/test/i).click();

    expect(screen.getByTestId('checked-checkbox')).toBeInTheDocument();

    screen.getByTestId('checked-checkbox').click();

    expect(screen.queryByTestId('checked-checkbox')).not.toBeInTheDocument();
  });
});
