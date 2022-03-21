import { render, screen } from 'tests';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  it('renders pagination correctly, when page count is equal or less than 6', () => {
    render(
      <Pagination currentPage={1} onPageItemClick={() => {}} pageCount={6} />
    );

    const pageNumbers: number[] = Array(6)
      .fill(undefined)
      .map((_, index) => index + 1);

    pageNumbers.forEach((pageNumber) =>
      expect(screen.getByText(pageNumber)).toBeInTheDocument()
    );
    expect(screen.queryByText('...')).not.toBeInTheDocument();
    expect(screen.queryByText(1)).toHaveClass('active');
    expect(screen.queryByText(1)).toBeDisabled();
    expect(screen.queryByText(/first/i)).toBeDisabled();
  });

  it('renders pagination correctly, when page count is greater than 6 and one of last 5 pages is active', () => {
    render(
      <Pagination currentPage={10} onPageItemClick={() => {}} pageCount={10} />
    );

    const pageNumbers: number[] = Array(10)
      .fill(undefined)
      .map((_, index) => index + 1);

    pageNumbers
      .slice(-6)
      .forEach((pageNumber) =>
        expect(screen.getByText(pageNumber)).toBeInTheDocument()
      );
    expect(screen.queryByText('...')).toBeInTheDocument();
    expect(screen.queryByText(10)).toHaveClass('active');
    expect(screen.queryByText(/last/i)).toBeDisabled();
  });

  it('renders pagination correctly, when page count is greater than 6, and current page is equal to 1', () => {
    render(
      <Pagination currentPage={1} onPageItemClick={() => {}} pageCount={10} />
    );

    const pageNumbers: number[] = Array(10)
      .fill(undefined)
      .map((_, index) => index + 1);

    pageNumbers
      .slice(0, 3)
      .forEach((pageNumber) =>
        expect(screen.getByText(pageNumber)).toBeInTheDocument()
      );
    pageNumbers
      .slice(-3)
      .forEach((pageNumber) =>
        expect(screen.getByText(pageNumber)).toBeInTheDocument()
      );
    expect(screen.queryByText('...')).toBeInTheDocument();
  });

  it('renders pagination correctly, when page count is greater than 6, and current page is more than 1', () => {
    render(
      <Pagination currentPage={3} onPageItemClick={() => {}} pageCount={10} />
    );

    const pageNumbers: number[] = Array(10)
      .fill(undefined)
      .map((_, index) => index + 1);

    pageNumbers
      .slice(1, 4)
      .forEach((pageNumber) =>
        expect(screen.getByText(pageNumber)).toBeInTheDocument()
      );
    pageNumbers
      .slice(-3)
      .forEach((pageNumber) =>
        expect(screen.getByText(pageNumber)).toBeInTheDocument()
      );
    expect(screen.queryByText('...')).toBeInTheDocument();
  });

  it('fires callback correctly, when enabled buttons are clicked', () => {
    const mockOnClick = jest.fn();

    render(
      <Pagination
        currentPage={1}
        onPageItemClick={mockOnClick}
        pageCount={10}
      />
    );

    screen.getByText(/first/i).click();
    screen.getByText(1).click();
    screen.getByText(2).click();
    screen.getByText(3).click();
    screen.getByText(/last/i).click();

    expect(mockOnClick).toHaveBeenCalledTimes(3);
  });
});
