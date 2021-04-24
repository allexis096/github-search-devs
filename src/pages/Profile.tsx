import React, { FormEvent } from 'react';
import { useHistory } from 'react-router';

import { IoIosStarOutline } from 'react-icons/io';
import { AiOutlineHeart, AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { MdPeopleOutline } from 'react-icons/md';
import { BiBuilding } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { FiTwitter } from 'react-icons/fi';

import { ProfileStats } from '../components/ProfileStats';
import { ProfileInfo } from '../components/ProfileInfo';
import { Repository } from '../components/Repository';
import { MotionBox, MotionImage, MotionText } from '../utils/MotionContainers';
import { Button } from '@chakra-ui/button';
import { variants } from '../utils/motionVariants';

export function Profile() {
  const history = useHistory();

  const arr = [
    {
      repository: {
        name: 'Repository Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
        stars: '100 stars',
        date: 'Updated 30 days ago',
      },
    },
    {
      repository: {
        name: 'Repository Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
        stars: '100 stars',
        date: 'Updated 30 days ago',
      },
    },
    {
      repository: {
        name: 'Repository Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
        stars: '100 stars',
        date: 'Updated 30 days ago',
      },
    },
    {
      repository: {
        name: 'Repository Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.',
        stars: '100 stars',
        date: 'Updated 30 days ago',
      },
    },
  ];

  function handleBack(event: FormEvent) {
    event.preventDefault();

    history.push('/');
  }

  return (
    <MotionBox
      display="flex"
      w="100vw"
      h="100vh"
      initial="hidden"
      animate="show"
      variants={variants}
    >
      <MotionBox
        display="flex"
        bg="white.700"
        w="30%"
        flexDirection="column"
        justifyContent="space-around"
        variants={variants}
      >
        <MotionBox
          display="flex"
          mt="20px"
          alignItems="center"
          justifyContent="center"
          variants={variants}
        >
          <MotionImage src="http://github.com/allexis096.png" w="175" h="175" variants={variants} />
        </MotionBox>

        <MotionBox p="4">
          <MotionText
            fontSize="x-large"
            color="white.200"
            fontWeight="light"
            fontStyle="italic"
            variants={variants}
          >
            Allexis Figueiredo
          </MotionText>
          <MotionText
            fontSize="large"
            color="white.200"
            fontWeight="light"
            fontStyle="italic"
            variants={variants}
          >
            @allexis096
          </MotionText>

          <MotionText
            fontSize="sm"
            textAlign="justify"
            mt="2"
            color="white.500"
            variants={variants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt congue ligula in
            rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.
          </MotionText>

          <MotionBox display="flex" variants={variants}>
            <ProfileStats icon={MdPeopleOutline} title="200 followers" />
            <ProfileStats icon={AiOutlineHeart} title="200 following" />
            <ProfileStats icon={IoIosStarOutline} title="200 stars" />
          </MotionBox>

          <MotionBox display="flex" flexDirection="column" variants={variants}>
            <ProfileInfo icon={BiBuilding} title="organization" />
            <ProfileInfo icon={GoLocation} title="location" />
            <ProfileInfo icon={AiOutlineMail} title="email" />
            <ProfileInfo icon={AiOutlineLink} title="www.mywebsite.com" />
            <ProfileInfo icon={FiTwitter} title="@myTwitter" />
          </MotionBox>
        </MotionBox>

        <MotionBox display="flex" justifyContent="center" variants={variants}>
          <Button
            mt="-5"
            w="150px"
            color="white.700"
            fontStyle="italic"
            fontWeight="light"
            onClick={handleBack}
          >
            Voltar
          </Button>
        </MotionBox>
      </MotionBox>

      <MotionBox display="flex" flexDirection="column" overflowY="auto" variants={variants}>
        {arr.map((arrr) => (
          <Repository key={arrr.repository.name} repository={arrr.repository} />
        ))}
      </MotionBox>
    </MotionBox>
  );
}
