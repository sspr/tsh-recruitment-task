import { Card } from '@mui/material';

import { SiteContentWrapper } from 'ui';
import { styles } from './MessageCard.styles';
import { MessageCardProps } from './MessageCard.types';

export const MessageCard = ({ children }: MessageCardProps) => {
  return (
    <SiteContentWrapper contentWidth={styles.contentWrapper.width}>
      <Card sx={styles.card}>{children}</Card>
    </SiteContentWrapper>
  );
};
