import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

import { User } from '../../types';

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { useUser } from '../../hooks/user';
import { MenuLeftComponent } from './MenuLeftComponent';

type MenuLeftProps = {
  user: User;
};

export function MenuLeft({ user }: MenuLeftProps) {
  const { isOpen, handleDrawerClose, isWide } = useUser();
  const isDrawer = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawer) {
    return (
      <Drawer isOpen={isOpen} closeOnEsc placement="left" onClose={handleDrawerClose} size="lg">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton fontSize={isWide ? '' : 32} mt="6" />
            <DrawerHeader fontSize={isWide ? '' : 32}>User info</DrawerHeader>

            <DrawerBody>
              <MenuLeftComponent user={user} isDrawer={isDrawer} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return <MenuLeftComponent user={user} />;
}
