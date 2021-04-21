import React, { FormEvent } from 'react';
import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';

export function Search() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        maxWidth={400}
        w="100%"
        direction="column"
        align="center"
      >
        <Text
          color="white.700"
          fontStyle="italic"
          fontSize="30"
        >
          Search Devs
        </Text>
        <Box
          display="flex"
          gridGap="1"
          w="100%"
        >
          <Input 
            name="user"
            placeholder="Type the username here..."
            _placeholder={{ fontStyle: 'italic' }}
          />
          <Button
            backgroundColor="white.600"
            color="white.200"
            fontStyle="italic"
            fontWeight="light"
            _hover={{
              bg: 'white.700'
            }}
            type="submit"
            onClick={handleSubmit}
          >
            <Icon as={FiSearch} fontSize="18" marginRight="2" />
            Buscar
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}