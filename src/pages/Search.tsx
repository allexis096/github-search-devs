import React, { FormEvent, useState } from 'react';
import { Button, Icon, Input } from '@chakra-ui/react';
import { FiSearch, FiCheck } from 'react-icons/fi';
import { MotionBox, MotionText } from '../utils/MotionContainers';
import { useHistory } from 'react-router';
import { variants } from '../utils/motionVariants';
import { api } from '../services/api';
import { useUser } from '../hooks/user';
import { GithubUser, Repo, User } from '../types';

export function Search() {
  const history = useHistory();
  const { setGithubUser } = useUser();

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: '',
  });

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError({
      error: false,
      message: '',
    });

    try {
      const UNIQUE_FORM = 0;
      const form = document.forms[UNIQUE_FORM];
      const { user } = form;

      const { data: dataUser } = await api.get<User>(`${user.value}`);
      const { data: starred } = await api.get(`${user.value}/starred`);
      const { data: repos } = await api.get<Repo[]>(`${user.value}/repos`);

      const newUser: GithubUser = {
        user: {
          id: dataUser.id,
          avatar_url: dataUser.avatar_url,
          name: dataUser.name,
          login: dataUser.login,
          html_url: dataUser.html_url,
          bio: dataUser.bio,
          followers: dataUser.followers,
          following: dataUser.following,
          company: dataUser?.company,
          location: dataUser?.location,
          email: dataUser?.email,
          blog: dataUser?.blog,
          twitter_username: dataUser?.twitter_username,
          starred: starred.length,
          repos: repos.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo?.description,
            stargazers_count: repo.stargazers_count,
            updated_at: repo.updated_at,
            html_url: repo.html_url,
          })),
        },
      };

      setGithubUser(newUser);
      setLoading(false);
      setDone(true);

      localStorage.removeItem('@github-search-devs');
      localStorage.setItem('@github-search-devs', JSON.stringify(newUser));

      setTimeout(() => {
        history.push('/profile');
      }, 1000);
    } catch {
      setLoading(false);
      setError({
        error: true,
        message: 'Usuário não encontrado!',
      });
    }
  }

  return (
    <MotionBox display="flex" w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <MotionBox
        display="flex"
        as="form"
        maxWidth={400}
        w="100%"
        flexDirection="column"
        alignItems="center"
        initial="hidden"
        animate="show"
        variants={variants}
      >
        <MotionText color="white.700" fontStyle="italic" fontSize="30" variants={variants}>
          Search Devs
        </MotionText>
        <MotionBox display="flex" gridGap="1" w="100%" variants={variants}>
          <Input
            name="user"
            isInvalid={error.error}
            position="relative"
            errorBorderColor="crimson"
            placeholder="Type the username here..."
            _placeholder={{ fontStyle: 'italic' }}
          />
          {error.error && (
            <MotionText position="absolute" mt="50px" color="crimson">
              {error.message}
            </MotionText>
          )}
          <Button
            isLoading={loading}
            backgroundColor="white.600"
            color="white.200"
            fontStyle="italic"
            fontWeight="light"
            style={{
              backgroundColor: !done ? 'white.700' : 'green',
            }}
            _hover={{
              bg: 'white.700',
            }}
            type="submit"
            onClick={handleSubmit}
            w="100px"
          >
            {!done ? (
              <>
                <Icon as={FiSearch} fontSize="18" marginRight="2" />
                Buscar
              </>
            ) : (
              <Icon as={FiCheck} fontSize="18" />
            )}
          </Button>
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
}
