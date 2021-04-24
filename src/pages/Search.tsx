import React, { FormEvent, useState } from 'react';
import { Button, Icon, Input, useColorModeValue } from '@chakra-ui/react';
import { FiSearch, FiCheck } from 'react-icons/fi';
import { MotionBox, MotionText } from '../utils/MotionContainers';
import { useHistory } from 'react-router';
import { variants } from '../utils/motionVariants';
import { useUser } from '../hooks/user';
import { searchUser } from '../requests';

export function Search() {
  const history = useHistory();
  const { setGithubUser } = useUser();
  const color = useColorModeValue('white.700', 'white.400');

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: '',
  });

  async function handleSubmit(event: FormEvent) {
    await searchUser({
      event,
      history,
      setDone,
      setError,
      setGithubUser,
      setLoading,
    });
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
        <MotionText color={color} fontStyle="italic" fontSize="30" variants={variants}>
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
              <MotionBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                variants={variants}
              >
                <Icon as={FiSearch} fontSize="18" marginRight="2" />
                Buscar
              </MotionBox>
            ) : (
              <Icon as={FiCheck} fontSize="18" />
            )}
          </Button>
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
}
