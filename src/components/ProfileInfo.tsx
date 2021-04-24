import React, { ReactNode } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { MotionBox } from '../utils/MotionContainers';
import { variants } from '../utils/motionVariants';

type ProfileInfoProps = {
  icon: IconType;
  title: ReactNode | string;
};

export function ProfileInfo({ icon: as, title }: ProfileInfoProps) {
  return (
    <MotionBox display="flex" mt="2" mr="2" alignItems="center" variants={variants}>
      <Icon as={as} fontSize={22} color="white.200" mr="1" />
      <Text color="white.200" fontWeight="light" fontStyle="italic" fontSize="xl">
        {title}
      </Text>
    </MotionBox>
  );
}
