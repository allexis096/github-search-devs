import React from 'react';
import { formatDistance } from 'date-fns';

import { Repository } from '../components/Repository';

import { MotionBox } from '../utils/MotionContainers';
import { variants } from '../utils/motionVariants';
import { useUser } from '../hooks/user';
import { MenuLeft } from '../components/MenuLeft';

export function Profile() {
  const {
    githubUser: { user },
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
      <MenuLeft user={user} />

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
