import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { IoIosStarOutline } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';

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
    <Flex
      mt="5"
      ml="10"
      flexDirection="column"
      fontStyle="italic"
      fontWeight="light"
      textAlign="justify"
      color="white.700"
    >
      <Text>{repository.name}</Text>
      <Text mr="5">{repository.description}</Text>

      <Box
        borderBottom="1px solid #ECEFF4"
        pb="5"
        display="flex"
        flexDirection="row"
        mt="5"
        color="white.500"
      >
        <Flex align="center" justify="center">
          <Icon as={IoIosStarOutline} />
          {repository.stars}
        </Flex>

        <Flex align="center" justify="center" ml="5">
          <Icon as={GoPrimitiveDot} />
          {repository.date}
        </Flex>
      </Box>
    </Flex>
  );
}
