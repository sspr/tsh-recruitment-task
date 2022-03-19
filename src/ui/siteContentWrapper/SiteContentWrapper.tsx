import { Box } from '@mui/material';

import { styles } from './SiteContentWrapper.styles';
import { SiteContentWrapperProps } from './SiteContentWrapper.types';

export const SiteContentWrapper = ({
  contentWidth,
  children,
}: SiteContentWrapperProps) => (
  <Box sx={styles.wrapper}>
    <Box
      sx={{
        width: {
          ...styles.container.width,
          lg: contentWidth ? contentWidth : styles.container.width.lg,
        },
      }}
    >
      {children}
    </Box>
  </Box>
);
