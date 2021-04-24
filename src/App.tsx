import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import Routes from './routes';

import { theme } from './styles/theme';
import { UserProvider } from './hooks/user';

export const App = () => (
  <ChakraProvider theme={theme}>
    <UserProvider>
      <AnimatePresence>
        <Routes />
      </AnimatePresence>
    </UserProvider>
  </ChakraProvider>
);
