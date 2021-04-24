import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

import { IoIosStarOutline } from 'react-icons/io';
import { AiOutlineHeart, AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiBuilding } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { FiTwitter } from 'react-icons/fi';

import { ProfileStats } from '../components/ProfileStats';
import { ProfileInfo } from '../components/ProfileInfo';
import { Repository } from '../components/Repository';

export function Profile() {
  const repository = {
    name: 'Repository Name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
    stars: '100 stars',
    date: 'Updated 30 days ago',
  };

  const repository2 = {
    name: 'Repository Name',
    description:
      'Lorem ipsum dolor sit amasdasdasdasdasdasdet, consecteturasdasdasdasdasd adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
    stars: '100 stars',
    date: 'Updated 30 days ago',
  };

  return (
    <Flex w="100vw" h="100vh">
      <Flex bg="white.700" w="30%" flexDirection="column" justifyContent="space-around">
        <Box display="flex" mt="20px" alignItems="center" justifyContent="center">
          <Image src="http://github.com/allexis096.png" w="175" h="175" />
        </Box>

        <Box p="4">
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
            <ProfileStats icon={MdPeopleOutline} title="200 followers" />
            <ProfileStats icon={AiOutlineHeart} title="200 following" />
            <ProfileStats icon={IoIosStarOutline} title="200 stars" />
          </Flex>

          <Flex flexDirection="column">
            <ProfileInfo icon={BiBuilding} title="organization" />
            <ProfileInfo icon={GoLocation} title="location" />
            <ProfileInfo icon={AiOutlineMail} title="email" />
            <ProfileInfo icon={AiOutlineLink} title="www.mywebsite.com" />
            <ProfileInfo icon={FiTwitter} title="@myTwitter" />
          </Flex>
        </Box>

        <Box display="flex" justifyContent="center">
          <Button mt="-5" w="150px" color="white.700" fontStyle="italic" fontWeight="light">
            Voltar
          </Button>
        </Box>
      </Flex>

      <Flex flexDirection="column" overflowY="auto">
        <Repository repository={repository} />
        <Repository repository={repository2} />
        <Repository repository={repository2} />
        <Repository repository={repository} />
        <Repository repository={repository2} />
        <Repository repository={repository} />
      </Flex>
    </Flex>
  );
}
