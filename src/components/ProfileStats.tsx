import React from 'react';
import { Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { MotionBox } from '../utils/MotionContainers';
import { variants } from '../utils/motionVariants';

type ProfileStatsProps = {
  icon: IconType;
  title: string;
};

export function ProfileStats({ icon: as, title }: ProfileStatsProps) {
  return (
    <MotionBox
      display="flex"
      mt="3"
      mr="2"
      alignItems="center"
      justifyContent="center"
      variants={variants}
    >
      <Icon as={as} fontSize={18} color="white.200" mr="1" />
      <Text color="white.200" fontWeight="light" fontSize="smaller">
        {title}
      </Text>
    </MotionBox>
  );
}
