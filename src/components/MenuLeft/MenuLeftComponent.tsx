import React, { FormEvent } from 'react';
import { Button, Link, useColorModeValue } from '@chakra-ui/react';
import { useHistory } from 'react-router';

import { AiOutlineHeart, AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { BiBuilding } from 'react-icons/bi';
import { FiTwitter } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { IoIosStarOutline } from 'react-icons/io';
import { MdPeopleOutline } from 'react-icons/md';

import { ProfileInfo } from '../ProfileInfo';
import { ProfileStats } from '../ProfileStats';

import { User } from '../../types';
import { MotionBox, MotionImage, MotionText } from '../../utils/MotionContainers';
import { variants } from '../../utils/motionVariants';

type MenuLeftComponentProps = {
  user: User;
  isDrawer?: boolean;
};

export function MenuLeftComponent({ user, isDrawer }: MenuLeftComponentProps) {
  const history = useHistory();
  const color = useColorModeValue('white.700', 'white.400');

  function handleBack(event: FormEvent) {
    event.preventDefault();

    history.push('/');
  }

  return (
    <MotionBox
      display={'flex'}
      bg="white.700"
      w={isDrawer ? '100%' : '30%'}
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
        <Link href={`https://github.com/${user.login}`} isExternal>
          <MotionImage src={user.avatar_url} w="175" h="175" variants={variants} />
        </Link>
      </MotionBox>

      <MotionBox p="4">
        <MotionText
          fontSize="x-large"
          color="white.200"
          fontWeight="light"
          fontStyle="italic"
          variants={variants}
        >
          <Link href={`https://github.com/${user.login}`} isExternal>
            {user.name}
          </Link>
        </MotionText>
        <MotionText
          fontSize="large"
          color="white.200"
          fontWeight="light"
          fontStyle="italic"
          variants={variants}
        >
          {`@${user.login}`}
        </MotionText>

        <MotionText fontSize="sm" textAlign="justify" mt="2" color="white.500" variants={variants}>
          {user.bio}
        </MotionText>

        <MotionBox display="flex" justifyContent="center" variants={variants}>
          <ProfileStats icon={MdPeopleOutline} name={user.followers} title="followers" />
          <ProfileStats icon={AiOutlineHeart} name={user.following} title="following" />
          <ProfileStats icon={IoIosStarOutline} name={user.starred} title="stars" />
        </MotionBox>

        <MotionBox display="flex" flexDirection="column" variants={variants}>
          <ProfileInfo icon={BiBuilding} title={user.company ?? 'Sem companhia'} />
          <ProfileInfo icon={GoLocation} title={user.location ?? 'Não cadastrado'} />
          <ProfileInfo icon={AiOutlineMail} title={user.email ?? 'Sem e-mail'} />
          <ProfileInfo
            icon={AiOutlineLink}
            title={
              user.blog.length === 0 ? (
                'Sem site'
              ) : (
                <Link href={user.blog} isExternal>
                  {user.blog}
                </Link>
              )
            }
          />
          <ProfileInfo
            icon={FiTwitter}
            title={
              (
                <Link href={`https://twitter.com/${user.twitter_username}`} isExternal>
                  {user.twitter_username}
                </Link>
              ) ?? 'Sem twitter'
            }
          />
        </MotionBox>
      </MotionBox>

      <MotionBox display="flex" justifyContent="center" variants={variants}>
        <Button
          mt="-5"
          w="150px"
          color={color}
          fontStyle="italic"
          fontWeight="light"
          onClick={handleBack}
        >
          Voltar
        </Button>
      </MotionBox>
    </MotionBox>
  );
}
