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
import { useUser } from '../hooks/user';
import { formatDistance } from 'date-fns';
import { Link } from '@chakra-ui/layout';

export function Profile() {
  const {
    githubUser: { user },
  } = useUser();
  const history = useHistory();

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

          <MotionText
            fontSize="sm"
            textAlign="justify"
            mt="2"
            color="white.500"
            variants={variants}
          >
            {user.bio}
          </MotionText>

          <MotionBox display="flex" justifyContent="center" variants={variants}>
            <ProfileStats icon={MdPeopleOutline} title={`${user.followers} followers`} />
            <ProfileStats icon={AiOutlineHeart} title={`${user.following} following`} />
            <ProfileStats icon={IoIosStarOutline} title={`${user.starred} stars`} />
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
            color="white.700"
            fontStyle="italic"
            fontWeight="light"
            onClick={handleBack}
          >
            Voltar
          </Button>
        </MotionBox>
      </MotionBox>

      <MotionBox display="flex" w="75%" flexDirection="column" overflowY="auto" variants={variants}>
        {user.repos.map((repo) => (
          <Repository
            key={repo.id}
            name={repo.name}
            description={repo.description}
            stars={repo.stargazers_count}
            date={formatDistance(new Date(repo.updated_at), new Date(), { addSuffix: true })}
          />
        ))}
      </MotionBox>
    </MotionBox>
  );
}
