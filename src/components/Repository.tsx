import React from 'react';
import { Icon } from '@chakra-ui/react';
import { IoIosStarOutline } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';
import { MotionBox, MotionText } from '../utils/MotionContainers';
import { variants } from '../utils/motionVariants';

type RepositoryProps = {
  repository: {
    name: string;
    description: string;
    stars: string;
    date: string;
  };
};

export function Repository({ repository }: RepositoryProps) {
  return (
    <MotionBox
      display="flex"
      mt="5"
      ml="10"
      flexDirection="column"
      fontStyle="italic"
      fontWeight="light"
      textAlign="justify"
      color="white.700"
      variants={variants}
    >
      <MotionText variants={variants}>{repository.name}</MotionText>
      <MotionText mr="5" variants={variants}>
        {repository.description}
      </MotionText>

      <MotionBox
        borderBottom="1px solid #ECEFF4"
        pb="5"
        display="flex"
        flexDirection="row"
        mt="5"
        color="white.500"
        variants={variants}
      >
        <MotionBox display="flex" alignItems="center" justifyContent="center">
          <Icon as={IoIosStarOutline} />
          {repository.stars}
        </MotionBox>

        <MotionBox display="flex" alignItems="center" justifyContent="center" ml="5">
          <Icon as={GoPrimitiveDot} />
          {repository.date}
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
}
