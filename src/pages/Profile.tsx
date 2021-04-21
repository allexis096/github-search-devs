import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ProfileStats } from '../components/ProfileStats';
import { IoIosStarOutline } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';

export function Profile() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex bg="white.700" w="25%" flexDirection="column">
        <Box display="flex" mt="45px" mb="-5" alignItems="center" justifyContent="center">
          <Image src="http://github.com/allexis096.png" w="200" h="200" />
        </Box>
        <Box mt="5" p="4">
          <Text fontSize="x-large" color="white.200" fontWeight="light" fontStyle="italic">
            Allexis Figueiredo
          </Text>
          <Text fontSize="large" color="white.200" fontWeight="light" fontStyle="italic">
            @allexis096
          </Text>
          <Text fontSize="sm" textAlign="justify" mt="2" color="white.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in
            rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.
          </Text>
          <Flex>
            <ProfileStats title="200 followers" icon={MdPeopleOutline} />
            <ProfileStats title="200 following" icon={AiOutlineHeart} />
            <ProfileStats title="200 stars" icon={IoIosStarOutline} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
