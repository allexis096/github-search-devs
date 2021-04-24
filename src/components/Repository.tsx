import React from 'react';
import { Icon, Link } from '@chakra-ui/react';
import { IoIosStarOutline } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';
import { MotionBox, MotionText } from '../utils/MotionContainers';
import { variants } from '../utils/motionVariants';
import { useUser } from '../hooks/user';

type RepositoryProps = {
  name: string;
  description: string;
  stars: string;
  date: string;
};

export function Repository({ name, description, stars, date }: RepositoryProps) {
  const {
    githubUser: { user },
  } = useUser();

  return (
    <Link
      href={`https://github.com/${user.login}/${name}`}
      isExternal
      style={{ textDecoration: 'none' }}
    >
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
        _hover={{
          backgroundColor: 'white.200',
          transition: '.5s',
          cursor: 'pointer',
        }}
      >
        <MotionText variants={variants}>{name}</MotionText>
        <MotionText mr="5" variants={variants}>
          {description}
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
            <Icon as={IoIosStarOutline} mr="1" />
            {stars}
          </MotionBox>

          <MotionBox display="flex" alignItems="center" justifyContent="center" ml="5">
            <Icon as={GoPrimitiveDot} mr="1" />
            {date}
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </Link>
  );
}
