import { Box, Typography } from '@mui/material';

import { styles } from './Pagination.styles';
import { PaginationProps } from './Pagination.types';
import { PaginationItem } from './paginationItem/PaginationItem';

export const Pagination = ({
  currentPage,
  onPageItemClick,
  pageCount,
}: PaginationProps) => {
  const pageNumbers: number[] = Array(pageCount)
    .fill(undefined)
    .map((_, index) => index + 1);

  const createPaginationNumberItem = (number: number) => (
    <PaginationItem
      key={number}
      isActive={currentPage === number}
      isDisabled={currentPage === number}
      onClick={() => {
        onPageItemClick(number);
      }}
    >
      {number}
    </PaginationItem>
  );

  return (
    <Box sx={styles.container}>
      <PaginationItem
        isDisabled={currentPage === 1}
        onClick={() => {
          onPageItemClick(1);
        }}
        typographyStyles={styles.paginationFirstItem}
      >
        First
      </PaginationItem>
      {pageCount <= 6 &&
        pageNumbers.map((page) => createPaginationNumberItem(page))}
      {pageCount > 6 && pageCount - currentPage < 5 && (
        <>
          <Typography sx={styles.spreadDots}>...</Typography>
          {pageNumbers
            .slice(-6)
            .map((page) => createPaginationNumberItem(page))}
        </>
      )}
      {pageCount > 6 && pageCount - currentPage >= 5 && (
        <>
          {currentPage === 1
            ? pageNumbers
                .slice(0, 3)
                .map((page) => createPaginationNumberItem(page))
            : pageNumbers
                .slice(currentPage - 2, currentPage + 1)
                .map((page) => createPaginationNumberItem(page))}
          <Typography sx={styles.spreadDots}>...</Typography>
          {pageNumbers
            .slice(-3)
            .map((page) => createPaginationNumberItem(page))}
        </>
      )}
      <PaginationItem
        isDisabled={currentPage === pageCount}
        onClick={() => {
          onPageItemClick(pageCount);
        }}
        typographyStyles={styles.paginationLastItem}
      >
        Last
      </PaginationItem>
    </Box>
  );
};
