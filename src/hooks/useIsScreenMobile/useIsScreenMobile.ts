import { useEffect, useState } from 'react';

import { theme } from 'assets/styles/theme';

export const useIsScreenMobile = (): boolean => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= theme.breakpoints.values.sm;
};
