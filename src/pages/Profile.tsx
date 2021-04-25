import React from 'react';
import { formatDistance } from 'date-fns';
import { Icon, IconButton } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { Repository } from '../components/Repository';
import { MenuLeft } from '../components/MenuLeft';

import { useUser } from '../hooks/user';
import { MotionBox } from '../utils/MotionContainers';
import { variants } from '../utils/motionVariants';

export function Profile() {
  const {
    githubUser: { user },
    handleDrawerOpen,
    isWide,
  } = useUser();

  return (
    <MotionBox
      display="flex"
      w="100vw"
      h="100vh"
      initial="hidden"
      animate="show"
      variants={variants}
    >
      {!isWide && (
        <IconButton
          aria-label="Open Drawer"
          icon={<Icon as={RiMenuLine} />}
          fontSize={isWide ? 20 : 54}
          variant="unstyled"
          onClick={() => handleDrawerOpen()}
          position="absolute"
          left="2"
        />
      )}

      <MenuLeft user={user} />

      <MotionBox
        display="flex"
        w={!isWide ? '100%' : '75%'}
        flexDirection="column"
        overflowY="auto"
        variants={variants}
      >
        {user.repos
          .sort((repoA, repoB) => Number(repoA.stargazers_count) - Number(repoB.stargazers_count))
          .reverse()
          .map((repo) => (
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
