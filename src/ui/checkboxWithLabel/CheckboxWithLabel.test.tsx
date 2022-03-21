import { render } from 'tests';
import { CheckboxWithLabel } from './CheckboxWithLabel';

describe('CheckboxWithLabel component', () => {
  it('renders label correctly', () => {
    const { getByText } = render(<CheckboxWithLabel text="test" />);

    expect(getByText(/test/i)).toBeInTheDocument();
  });

  it('marks checkbox as checked and back, when click on label or checkbox', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <CheckboxWithLabel text="test" />
    );

    getByText(/test/i).click();

    expect(getByTestId('checked-checkbox')).toBeInTheDocument();

    getByTestId('checked-checkbox').click();

    expect(queryByTestId('checked-checkbox')).not.toBeInTheDocument();
  });
});
