import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import Routes from './routes';

import { theme } from './styles/theme';
import { UserProvider } from './hooks/user';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';

export const App = () => (
  <ChakraProvider theme={theme}>
    <UserProvider>
      <AnimatePresence>
        <ColorModeSwitcher position="absolute" right="5" />
        <Routes />
      </AnimatePresence>
    </UserProvider>
  </ChakraProvider>
);
