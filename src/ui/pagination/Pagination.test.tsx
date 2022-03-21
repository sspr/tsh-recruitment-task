import { render } from 'tests';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  it('renders pagination correctly, when page count is equal or less than 6', () => {
    const { getByText, queryByText } = render(
      <Pagination currentPage={1} onPageItemClick={() => {}} pageCount={6} />
    );

    const pageNumbers: number[] = Array(6)
      .fill(undefined)
      .map((_, index) => index + 1);

    pageNumbers.forEach((pageNumber) =>
      expect(getByText(pageNumber)).toBeInTheDocument()
    );
    expect(queryByText('...')).not.toBeInTheDocument();
    expect(queryByText(1)).toHaveClass('active');
    expect(queryByText(1)).toBeDisabled();
    expect(queryByText(/first/i)).toBeDisabled();
  });

  it('renders pagination correctly, when page count is greater than 6 and one of last 5 pages is active', () => {
    const { getByText, queryByText } = render(
      <Pagination currentPage={10} onPageItemClick={() => {}} pageCount={10} />
    );

    const pageNumbers: number[] = Array(10)
      .fill(undefined)
      .map((_, index) => index + 1);

    pageNumbers
      .slice(-6)
      .forEach((pageNumber) =>
        expect(getByText(pageNumber)).toBeInTheDocument()
      );
    expect(queryByText('...')).toBeInTheDocument();
    expect(queryByText(10)).toHaveClass('active');
    expect(queryByText(/last/i)).toBeDisabled();
  });

  it('renders pagination correctly, when page count is greater than 6, and current page is equal to 1', () => {
    const { getByText, queryByText } = render(
      <Pagination currentPage={1} onPageItemClick={() => {}} pageCount={10} />
    );

    const pageNumbers: number[] = Array(10)
      .fill(undefined)
      .map((_, index) => index + 1);

    pageNumbers
      .slice(0, 3)
      .forEach((pageNumber) =>
        expect(getByText(pageNumber)).toBeInTheDocument()
      );
    pageNumbers
      .slice(-3)
      .forEach((pageNumber) =>
        expect(getByText(pageNumber)).toBeInTheDocument()
      );
    expect(queryByText('...')).toBeInTheDocument();
  });

  it('renders pagination correctly, when page count is greater than 6, and current page is more than 1', () => {
    const { getByText, queryByText } = render(
      <Pagination currentPage={3} onPageItemClick={() => {}} pageCount={10} />
    );

    const pageNumbers: number[] = Array(10)
      .fill(undefined)
      .map((_, index) => index + 1);

    pageNumbers
      .slice(1, 4)
      .forEach((pageNumber) =>
        expect(getByText(pageNumber)).toBeInTheDocument()
      );
    pageNumbers
      .slice(-3)
      .forEach((pageNumber) =>
        expect(getByText(pageNumber)).toBeInTheDocument()
      );
    expect(queryByText('...')).toBeInTheDocument();
  });

  it('fires callback correctly, when enabled buttons are clicked', () => {
    const mockOnClick = jest.fn();

    const { getByText } = render(
      <Pagination
        currentPage={1}
        onPageItemClick={mockOnClick}
        pageCount={10}
      />
    );

    getByText(/first/i).click();
    getByText(1).click();
    getByText(2).click();
    getByText(3).click();
    getByText(/last/i).click();

    expect(mockOnClick).toHaveBeenCalledTimes(3);
  });
});
