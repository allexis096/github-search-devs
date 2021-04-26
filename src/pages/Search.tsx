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
  const { setGithubUser, isWide } = useUser();
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
        maxWidth={isWide ? 400 : 900}
        w="100%"
        flexDirection="column"
        alignItems="center"
        initial="hidden"
        animate="show"
        variants={variants}
      >
        <MotionText
          color={color}
          fontStyle="italic"
          fontSize={isWide ? '30' : '60'}
          variants={variants}
        >
          Search Devs
        </MotionText>
        <MotionBox display="flex" justifyContent="center" gridGap="1" w="100%" variants={variants}>
          <Input
            name="user"
            isInvalid={error.error}
            position="relative"
            borderColor="white.700"
            errorBorderColor="crimson"
            placeholder="Type the username here..."
            _placeholder={{ fontStyle: 'italic' }}
            fontSize={isWide ? '18' : '36'}
            w={isWide ? '400px' : '400px'}
            h={isWide ? '40px' : '80px'}
          />
          {error.error && (
            <MotionText position="absolute" mt="50px" color="crimson">
              {isWide && error.message}
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
            w={isWide ? '100px' : '270px'}
            h={isWide ? 'initial' : '80px'}
          >
            {!done ? (
              <MotionBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                variants={variants}
                fontSize={isWide ? '18' : '60'}
              >
                <Icon as={FiSearch} fontSize={isWide ? '18' : '60'} marginRight="2" />
                Buscar
              </MotionBox>
            ) : (
              <Icon as={FiCheck} fontSize={isWide ? '18' : '60'} />
            )}
          </Button>
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
}
