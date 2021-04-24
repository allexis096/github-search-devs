import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

type ProfileInfoProps = {
  icon: IconType;
  title: string;
};

export function ProfileInfo({ icon: as, title }: ProfileInfoProps) {
  return (
    <Flex mt="2" mr="2" align="center">
      <Icon as={as} fontSize={22} color="white.200" mr="1" />
      <Text color="white.200" fontWeight="light" fontStyle="italic" fontSize="xl">
        {title}
      </Text>
    </Flex>
  );
}
