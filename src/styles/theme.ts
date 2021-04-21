import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: {
      '50': '#FFFFFF',
      '100': '#FAFAFA',
      '200': '#ECEFF4',
      '300': '#E0E6ED',
      '400': '#C0CCDA',
      '500': '#8190A5',
      '600': '#47525E',
      '700': '#3B4252',
    },
  },
  fonts: {
    heading: 'Lato',
    body: 'Lato',
  },
  styles: {
    global: {
      bg: 'white.100',
      color: 'white.700',
    },
  },
});
