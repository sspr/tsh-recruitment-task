import { keyframes } from '@emotion/react';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const styles = {
  width: 56,
  height: 56,
  animation: `${rotate} 1s linear infinite`,
};
