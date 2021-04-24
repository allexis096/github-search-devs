import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type ProfileStatsProps = {
  icon: IconType;
  title: string;
};

export function ProfileStats({ icon: as, title }: ProfileStatsProps) {
  return (
    <Flex mt="3" mr="2">
      <Icon as={as} fontSize={18} color="white.200" mr="1" />
      <Text color="white.200" fontWeight="light" fontSize="smaller">
        {title}
      </Text>
    </Flex>
  );
}
