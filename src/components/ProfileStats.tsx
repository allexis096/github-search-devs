import React from 'react';
import { Icon, Link, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { MotionBox } from '../utils/MotionContainers';
import { variants } from '../utils/motionVariants';
import { useUser } from '../hooks/user';

type ProfileStatsProps = {
  icon: IconType;
  name: number;
  title: string;
};

export function ProfileStats({ icon: as, name, title }: ProfileStatsProps) {
  const {
    githubUser: { user },
    isWide,
  } = useUser();

  return (
    <MotionBox
      display="flex"
      mt="3"
      mr="2"
      alignItems="center"
      justifyContent="center"
      variants={variants}
      fontSize={isWide ? 18 : 54}
    >
      <Icon as={as} color="white.200" mr="1" />
      <Link href={`https://github.com/${user.login}?tab=${title}`} isExternal>
        <Text color="white.200" fontWeight="light" fontSize="smaller">
          {`${name} ${title}`}
        </Text>
      </Link>
    </MotionBox>
  );
}
