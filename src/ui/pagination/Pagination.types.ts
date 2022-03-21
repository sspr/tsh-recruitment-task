export type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageItemClick: (page: number) => void;
};
