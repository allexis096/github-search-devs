import React, { ReactNode } from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { MotionBox } from '../utils/MotionContainers';
import { variants } from '../utils/motionVariants';
import { useUser } from '../hooks/user';

type ProfileInfoProps = {
  icon: IconType;
  title: ReactNode | string;
};

export function ProfileInfo({ icon: as, title }: ProfileInfoProps) {
  const { isWide } = useUser();

  return (
    <MotionBox display="flex" mt="2" mr="2" alignItems="center" variants={variants}>
      <Icon as={as} fontSize={isWide ? 22 : 48} color="white.200" mr="1" />
      <Text color="white.200" fontWeight="light" fontStyle="italic" fontSize={isWide ? 'xl' : 28}>
        {title}
      </Text>
    </MotionBox>
  );
}
