import { useBreakpointValue } from '@chakra-ui/media-query';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { GithubUser } from '../types';

type UserProviderProps = {
  children: ReactNode;
};

type UserContextData = {
  githubUser: GithubUser;
  setGithubUser: React.Dispatch<React.SetStateAction<GithubUser>>;
  isOpen: boolean;
  isWide: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });
  const [githubUser, setGithubUser] = useState<GithubUser>(() => {
    const user = localStorage.getItem('@github-search-devs');

    if (user) {
      return JSON.parse(user);
    }

    return {};
  });

  function handleDrawerOpen() {
    setIsOpen(true);
  }

  function handleDrawerClose() {
    setIsOpen(false);
  }

  return (
    <UserContext.Provider
      value={{ githubUser, setGithubUser, handleDrawerOpen, handleDrawerClose, isOpen, isWide }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
